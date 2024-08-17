<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchTeacherVideos } from '@/composables/useFetch'

interface Video {
  video: string
}

const youtube_videos = ref<Video[]>([])
const showModal = ref(false)
const currentVideoUrl = ref('')

// Fetch videos on component mount
onMounted(async () => {
  try {
    const videos = await fetchTeacherVideos()
    if (Array.isArray(videos)) {
      youtube_videos.value = videos.map((doc: any) => ({
        video: typeof doc.video === 'string' ? doc.video : '' // Ensure videoLink is a string
      }))
    } else {
      console.error('Expected an array from fetchTeacherVideos')
    }
  } catch (error) {
    console.error('Error fetching videos:', error)
  }
})

// Open modal with embedded YouTube video
const openModal = (videoLink: string) => {
  if (typeof videoLink === 'string') {
    const embedUrl = getEmbedUrl(videoLink)
    if (embedUrl) {
      currentVideoUrl.value = embedUrl
      showModal.value = true
    } else {
      console.error('Invalid YouTube video link:', videoLink)
    }
  } else {
    console.error('Video link is not a string:', videoLink)
  }
}

// Close modal
const closeModal = () => {
  showModal.value = false
  currentVideoUrl.value = ''
}

// Extract the YouTube embed URL from a given YouTube video link
const getEmbedUrl = (videoLink: string) => {
  if (typeof videoLink === 'string') {
    const videoIdMatch = videoLink.match(
      /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    )
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : ''
  }
  return ''
}

// Extract YouTube video thumbnail URL
const getThumbnailUrl = (videoLink: string) => {
  if (typeof videoLink === 'string') {
    const videoIdMatch = videoLink.match(
      /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    )
    const videoId = videoIdMatch ? videoIdMatch[1] : ''
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : ''
  }
  return ''
}
</script>

<template>
  <div>
    <h2 class="text-xl font-bold text-center mb-8">Muallif Videolari</h2>
    <ul class="flex flex-wrap gap-4 justify-between">
      <li v-for="(videoLink, index) in youtube_videos" :key="index" class="rounded-md">
        <div class="relative w-full h-full rounded-md">
          <button
            class="absolute w-14 h-14 rounded-full flex items-center justify-center top-1/2 left-1/2 bg-white text-primary -translate-y-1/2 -translate-x-1/2"
            @click="openModal(videoLink.video)"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              />
            </svg>
          </button>
          <img class="rounded-md" :src="getThumbnailUrl(videoLink.video)" width="350" alt="" />
        </div>
      </li>
    </ul>

    <!-- Modal for displaying videos -->
    <div v-if="showModal" @click="closeModal" class="modal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <iframe
          width="560"
          height="315"
          :src="currentVideoUrl"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fefefe;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 6px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: rgb(231, 9, 9);
  text-decoration: none;
  cursor: pointer;
}
</style>
