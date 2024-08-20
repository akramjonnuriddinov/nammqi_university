<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'
import { db } from '@/firebase'

// State to hold books
const books = ref<any[]>([])

// Get user info from authStore
const authStore = useAuthStore()

// Fetch books from Firestore
const fetchBooks = async () => {
  try {
    // Reference to the books collection
    const booksCollectionRef = collection(db, 'articles')

    // Query for books by the current user
    const q = query(booksCollectionRef, where('userId', '==', authStore.user.id))
    const querySnapshot = await getDocs(q)

    // Map the results to an array of book objects
    books.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (error) {
    console.error('Error fetching books: ', error)
  }
}

// Call fetchBooks when the component is mounted
onMounted(() => {
  fetchBooks()
})

// Handle viewing book details
const viewDetails = (book: any) => {
  if (book.fileUrl) {
    // Open PDF in a new tab
    window.open(book.fileUrl, '_blank')
  } else {
    console.error('No file URL found for this book')
  }
}
</script>

<template>
  <div>
    <h2 class="text-xl font-bold text-center mb-8">Muallif Maqolalari</h2>
    <div class="articles-grid">
      <div v-for="article in books" :key="article.id" class="article-card">
        <img
          src="@/assets/images/signin-image.webp"
          alt="Article Thumbnail"
          class="article-thumbnail"
        />
        <div class="article-content">
          <h3 class="article-title">{{ article.title }}</h3>
          <p class="article-summary">{{ article.summary }}</p>
          <button class="article-button" @click="viewDetails(article)">Read More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 0;
  list-style: none;
}

.article-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 50px 0 rgba(7, 41, 77, 0.07);
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-thumbnail {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.article-content {
  padding: 16px;
}

.article-title {
  font-size: 18px;
  margin: 0 0 8px;
  font-weight: bold;
}

.article-summary {
  font-size: 14px;
  color: #666;
  margin: 0 0 16px;
}

.article-button {
  display: inline-block;
  padding: 10px 16px;
  color: #fff;
  background-color: #07294d;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;
  border: 1px solid transparent;
  font-weight: 500;
}

.article-button:hover {
  background-color: transparent;
  color: #07294d;
  border: 1px solid #07294d;
}
</style>
