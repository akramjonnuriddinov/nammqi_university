<script setup lang="ts">
import { ref } from 'vue'

const articles = ref([
  {
    id: 1,
    title: 'Understanding Quantum Physics',
    summary: 'A comprehensive guide to the principles of quantum physics.',
    thumbnail:
      'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop'
  },
  {
    id: 2,
    title: 'Advanced Calculus Techniques',
    summary: 'Exploring advanced techniques and applications of calculus.',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5Ei0F_j0MnzOfLg0x-GqTVcgss3x_yogXw&s'
  },
  {
    id: 2,
    title: 'Advanced Calculus Techniques',
    summary: 'Exploring advanced techniques and applications of calculus.',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5Ei0F_j0MnzOfLg0x-GqTVcgss3x_yogXw&s'
  },
  {
    id: 2,
    title: 'Advanced Calculus Techniques',
    summary: 'Exploring advanced techniques and applications of calculus.',
    thumbnail:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-5Ei0F_j0MnzOfLg0x-GqTVcgss3x_yogXw&s'
  }
])

const viewArticle = (article: any) => {
  console.log('Viewing article:', article.title)
}
</script>

<template>
  <div>
    <h2 class="text-xl font-bold text-center mb-8">Muallif Maqolalari</h2>
    <div class="articles-grid">
      <div v-for="article in articles" :key="article.id" class="article-card">
        <img :src="article.thumbnail" alt="Article Thumbnail" class="article-thumbnail" />
        <div class="article-content">
          <h3 class="article-title">{{ article.title }}</h3>
          <p class="article-summary">{{ article.summary }}</p>
          <button class="article-button" @click="viewArticle(article)">Read More</button>
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
