<template>
  <div class="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-semibold text-center text-[#07294d] mb-6">Upload a Article</h2>

      <!-- File Input -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1" for="fileInput"
          >Choose a PDF/DOC file:</label
        >
        <input
          id="fileInput"
          type="file"
          @change="handleFileUpload"
          accept=".pdf,.doc,.docx"
          class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#07294d] file:text-white hover:file:bg-[#051f38]"
        />
      </div>

      <!-- Book Title Input -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-1" for="bookTitle"
          >Book Title</label
        >
        <input
          id="bookTitle"
          type="text"
          v-model="bookTitle"
          placeholder="Enter the book title"
          class="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#07294d]"
        />
      </div>

      <!-- Author Input -->
      <div class="mb-6">
        <label class="block text-sm font-medium text-gray-700 mb-1" for="author">Author</label>
        <input
          id="author"
          type="text"
          v-model="author"
          placeholder="Enter the author's name"
          class="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#07294d]"
        />
      </div>

      <!-- Upload Button -->
      <button
        @click="uploadBook"
        :disabled="isLoading"
        class="w-full py-3 px-6 text-white bg-[#07294d] rounded-lg font-semibold hover:bg-[#051f38] focus:outline-none focus:ring-2 focus:ring-[#07294d] focus:ring-opacity-50 disabled:opacity-50"
      >
        <!-- Display progress percentage in button -->
        <span v-if="isLoading">Uploading...</span>
        <span v-else>Upload Article</span>
      </button>

      <!-- Progress Debugging -->
      <p v-if="isLoading" class="text-center text-gray-500 mt-4">Progress: {{ uploadProgress }}%</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'
import { db } from '@/firebase'

const isLoading = ref(false)
const file = ref<File | null>(null)
const bookTitle = ref('')
const author = ref('')
const uploadProgress = ref(0)

const collectionRef = collection(db, 'articles')

const authStore = useAuthStore()

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  file.value = target.files ? target.files[0] : null
}

const uploadBook = async () => {
  if (!file.value) {
    console.error('No file selected')
    return
  }

  try {
    isLoading.value = true
    if (isLoading.value) console.log('hey')
    uploadProgress.value = 0 // Reset progress

    const storage = getStorage()
    const storageRefPath = storageRef(storage, `articles/${authStore.user.id}/${file.value.name}`)

    const uploadTask = uploadBytesResumable(storageRefPath, file.value)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        uploadProgress.value = Math.round(progress)
        console.log(`Upload is ${progress}% done`)
      },
      (error) => {
        console.error('Error uploading file: ', error)
        isLoading.value = false
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)

        await addDoc(collectionRef, {
          userId: authStore.user.id,
          bookTitle: bookTitle.value,
          author: author.value,
          fileUrl: downloadURL,
          date: Date.now()
        })

        file.value = null
        bookTitle.value = ''
        author.value = ''
        console.log('Book upload completed')
        isLoading.value = false
      }
    )
  } catch (error) {
    console.error('Error uploading book: ', error)
  } finally {
    uploadProgress.value = 0
  }
}
</script>
