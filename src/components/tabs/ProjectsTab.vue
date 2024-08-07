<script setup lang="ts">
import { ref } from 'vue'

const books = ref([
  {
    id: 1,
    title: 'Book Title 1',
    author: 'John Doe',
    coverImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5Ei0F_j0MnzOfLg0x-GqTVcgss3x_yogXw&s',
    description: 'This is a description of the first book.'
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'John Doe',
    coverImage:
      'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
    description: 'This is a description of the second book.'
  },
  {
    id: 1,
    title: 'Book Title 1',
    author: 'John Doe',
    coverImage:
      'https://elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-e1464023124869.jpeg',
    description: 'This is a description of the first book.'
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'John Doe',
    coverImage:
      'https://img.etimg.com/thumb/width-420,height-315,imgsize-24942,resizemode-75,msid-98117504/top-trending-products/books/10-best-novels-for-beginners-to-read-this-year/best-novels-for-beginners.jpg',
    description: 'This is a description of the second book.'
  }
])

const viewDetails = (book: any) => {
  console.log('Viewing details for:', book.title)
}
</script>

<template>
  <div>
    <h2 class="text-xl font-bold text-center mb-8">Muallif Loyihalari</h2>
    <div class="books-grid">
      <div v-for="book in books" :key="book.id" class="book-card">
        <img :src="book.coverImage" alt="Book Cover" class="book-cover" />
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
