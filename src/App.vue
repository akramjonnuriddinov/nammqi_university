<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import LoginComponent from '@/components/LoginComponent.vue'
import RegisterComponent from '@/components/RegisterComponent.vue'
import AppLoader from '@/components/AppLoader.vue'

const isLoginOpen = ref(false)
const isRegisterOpen = ref(false)
const isLoading = ref(true)

const openLoginModal = () => {
  isLoginOpen.value = true
  isRegisterOpen.value = false
  document.body.classList.add('overflow-hidden')
}

const openRegisterModal = () => {
  isRegisterOpen.value = true
  isLoginOpen.value = false
  document.body.classList.add('overflow-hidden')
}

const closeAllModal = () => {
  isRegisterOpen.value = false
  isLoginOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

setTimeout(() => {
  isLoading.value = false
}, 2000)
</script>

<template>
  <div class="app-container">
    <the-header @open-login="openLoginModal" @open-register="openRegisterModal" />
    <main class="content">
      <RouterView />
    </main>
    <the-footer />

    <!-- LOGIN/REGISTER MODAL -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 transform scale-95"
      enter-to-class="opacity-100 transform scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-95"
    >
      <login-component
        v-if="isLoginOpen"
        @close-login="closeAllModal"
        @open-register="openRegisterModal"
      />
    </transition>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 transform scale-95"
      enter-to-class="opacity-100 transform scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-95"
    >
      <register-component
        v-if="isRegisterOpen"
        @close-register="closeAllModal"
        @open-login="openLoginModal"
      />
    </transition>
  </div>
  <app-loader v-if="isLoading" />
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
