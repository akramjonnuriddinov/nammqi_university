import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { setDoc, doc, getDoc, collection, addDoc, getFirestore } from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'
import { firebaseApp } from '@/firebase'


const auth = getAuth(firebaseApp)
const firestore = getFirestore(firebaseApp)

export const signWithGoogle = async () => {
  // Initialize Firestore and Auth
  const store = useAuthStore()
  console.log(store)

  const provider = new GoogleAuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    const colRef = doc(firestore, 'users', user.uid)
    const docSnapshot = await getDoc(colRef)

    if (!docSnapshot.exists()) {
      await setDoc(colRef, {
        id: user.uid,
        email: user.email,
        name: user.displayName,
        verified: true
      })
    }

    await store.signIn(user)
  } catch (error) {
    console.error('Error signing in with Google: ', error)
  }
}

export const sendMailMessage = async (email: string, id: string) => {
  try {
    const mailCollection = collection(firestore, 'mail')
    const currentDate = new Date()
    const dateTime = {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      day: currentDate.getDate(),
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds()
    }

    const verifyLink = `${window.location.origin}/verify?id=${id}`
    const data = {
      to: email,
      message: {
        subject: 'Verify your email for ME',
        html: `
          <h1>Hello,</h1>
          <p>We received a request to sign in to ME using this email address, at ${dateTime.year}-${dateTime.month}-${dateTime.day} ${dateTime.hours}:${dateTime.minutes}:${dateTime.seconds}. If you want to sign in with your ${email} account, click this <br> <a href="${verifyLink}">link</a>.</p>
          <img src="" alt="Teamly Logo" style="display:block; width: 200px; height: auto;">
        `
      }
    }

    await addDoc(mailCollection, data)
  } catch (error) {
    console.error('Error adding data to Firestore: ', error)
  }
}
