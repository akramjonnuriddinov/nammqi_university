import { ref } from 'vue'
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { addDoc } from 'firebase/firestore'
import { authStore } from '@/authStore' // Import your authStore if it's external
import { collectionRef } from '@/firebaseConfig' // Reference to your Firestore collection

const isLoading = ref(false)
const file = ref(null) // To bind the selected file
const bookTitle = ref('')
const author = ref('')

export const uploadBook = async () => {
  if (!file.value) {
    console.error('No file selected')
    return
  }

  try {
    isLoading.value = true

    // Create a storage reference
    const storage = getStorage()
    const storageRefPath = storageRef(storage, `books/${authStore.user.id}/${file.value.name}`)

    // Upload the file to Firebase Storage
    const uploadTask = uploadBytesResumable(storageRefPath, file.value)

    // Monitor upload progress
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(`Upload is ${progress}% done`)
      },
      (error) => {
        console.error('Error uploading file: ', error)
        isLoading.value = false
      },
      async () => {
        // Get the download URL once the upload is complete
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)

        // Store book metadata and download URL in Firestore
        await addDoc(collectionRef, {
          userId: authStore.user.id,
          bookTitle: bookTitle.value,
          author: author.value,
          fileUrl: downloadURL,
          date: Date.now()
        })

        console.log('Book upload completed')

        // Reset the form
        file.value = null
        bookTitle.value = ''
        author.value = ''
      }
    )
  } catch (error) {
    console.error('Error uploading book: ', error)
  } finally {
    isLoading.value = false
  }
}
