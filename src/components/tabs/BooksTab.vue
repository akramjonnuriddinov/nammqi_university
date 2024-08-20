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
    const booksCollectionRef = collection(db, 'books')

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
    <h2 class="text-xl font-bold text-center mb-8">Muallif Kitoblari</h2>
    <div class="books-grid">
      <div v-for="book in books" :key="book.id" class="book-card">
        <img src="@/assets/images/signin-image.webp" alt="Book Cover" class="book-cover" />
        <div class="book-info">
          <h3 class="book-title">{{ book.title }}</h3>
          <p class="book-author">{{ book.author }}</p>
          <p class="book-description">{{ book.description }}</p>
          <button class="book-button" @click="viewDetails(book)">View Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 0;
  list-style: none;
}

.book-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 50px 0 rgba(7, 41, 77, 0.07);
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  cursor: pointer;
}

.book-card:hover {
  transform: translateY(-5px);
}

.book-cover {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.book-info {
  padding: 16px;
}

.book-title {
  margin: 0 0 8px;
  font-weight: bold;
}

.book-author {
  margin: 0 0 8px;
}

.book-description {
  margin: 0 0 16px;
}

.book-button {
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

.book-button:hover {
  background-color: transparent;
  color: #07294d;
  border: 1px solid #07294d;
}
</style>
