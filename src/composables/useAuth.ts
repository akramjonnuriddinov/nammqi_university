import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { setDoc, doc, getDoc, collection, addDoc, getFirestore } from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'
import { firebaseApp } from '@/firebase'

const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

// Utility function to get current date-time
const getCurrentDateTime = () => {
  const currentDate = new Date()
  return {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds()
  }
}

export const signWithGoogle = async () => {
  const store = useAuthStore()
  const provider = new GoogleAuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    const colRef = doc(firestore, 'users', user.uid)
    const docSnapshot = await getDoc(colRef)

    if (!docSnapshot.exists()) {
      // Store user data only if not already in Firestore
      await setDoc(colRef, {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        verified: true
      })
    }

    // Update the store with signed-in user info
    await store.signIn(user)
  } catch (error) {
    console.error('Error during Google sign-in:', error)
  }
}

export const sendMailMessage = async (email: string, id: string) => {
  try {
    const mailCollection = collection(firestore, 'mail')
    const dateTime = getCurrentDateTime()

    const verifyLink = `${window.location.origin}/verify?id=${id}`
    const data = {
      to: email,
      message: {
        subject: 'Verify your email for ME',
        html: `
          <h1>Hello,</h1>
          <p>We received a request to sign in to ME using this email address, at ${dateTime.year}-${dateTime.month}-${dateTime.day} ${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}. 
          If you want to sign in with your ${email} account, click this <br> 
          <a href="${verifyLink}">link</a>.</p>
          <img src="" alt="Teamly Logo" style="display:block; width: 200px; height: auto;">
        `
      }
    }

    // Add the message to the Firestore mail collection
    await addDoc(mailCollection, data)
  } catch (error) {
    console.error('Error sending email verification:', error)
  }
}
