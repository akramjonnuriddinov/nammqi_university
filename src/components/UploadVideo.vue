<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase'
import { useAuthStore } from '@/stores/auth'
import { fetchTeacherVideos } from '@/composables/useFetch'

const authStore = useAuthStore()
const collectionRef = collection(db, 'videos')
const videoLink = ref('')
const isLoading = ref(false)
const teacherVideos = ref([])

const uploadVideo = async () => {
  try {
    isLoading.value = true
    const res = await addDoc(collectionRef, {
      userId: authStore.user.id,
      video: videoLink.value,
      date: Date.now()
    })

    console.log('Document successfully written with ID:', res.id)
  } catch (error) {
    isLoading.value = false
    console.error('Error adding document: ', error)
  } finally {
    isLoading.value = false
    console.log('Upload completed')
    videoLink.value = ''
  }
}

onMounted(async () => {
  teacherVideos.value = await fetchTeacherVideos()
})
</script>

<template>
  <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Add YouTube Video</h2>

    <form>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">YouTube Video Link</label>
        <input
          v-model="videoLink"
          required
          type="url"
          placeholder="https://www.youtube.com/watch?v=example"
          class="w-full rounded-md border border-[#e0e0e0] bg-transparent px-4 py-3 text-base outline-none focus:border-primary focus:shadow-md"
        />
      </div>

      <button
        @click.prevent="uploadVideo"
        class="w-[180px] update-btn bg-primary text-white flex justify-center items-center h-16 gap-2"
      >
        <span v-if="isLoading">Loading...</span>
        <span v-else>Save Video Link</span>
      </button>
    </form>
  </div>
</template>

<style scoped>
.update-btn {
  border: 0px;
  color: #fff;
  font-weight: 600;
  text-transform: capitalize;
  padding: 13px;
  border-radius: 6px;
}
</style>
