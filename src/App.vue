<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import RegisterComponent from '@/components/RegisterComponent.vue'

const isLoginOpen = ref(false)
const isRegisterOpen = ref(false)

const openLoginModal = () => {
  isLoginOpen.value = true
}

const openRegisterModal = () => {
  isRegisterOpen.value = true
}
</script>

<template>
  <div class="app-container relative">
    <the-header @open-login="openLoginModal" @open-register="openRegisterModal" />
    <main class="content">
      <RouterView />
    </main>
    <the-footer />

    <!-- Register Modal Transition -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 transform scale-95"
      enter-to-class="opacity-100 transform scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-95"
    >
      <login-component v-if="isLoginOpen" @close-login="isLoginOpen = false" />
    </transition>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 transform scale-95"
      enter-to-class="opacity-100 transform scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-95"
    >
      <register-component v-if="isRegisterOpen" @close-register="isRegisterOpen = false" />
    </transition>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
