<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TheLogo from '@/components/TheLogo.vue'
import { useAuthStore } from '@/stores/auth'
import InlineSvg from '@/components/InlineSvg.vue'

const links = ref([
  {
    name: 'O‘qituvchilar',
    path: '/teachers'
  },
  {
    name: 'Faoliyat',
    path: '/'
  },
  {
    name: 'Ta‘lim',
    path: '/'
  },
  {
    name: 'Abiturient',
    path: '/'
  },
  {
    name: 'Yangiliklar',
    path: '/'
  },
  {
    name: 'Hujjatlar',
    path: '/'
  },
  {
    name: 'NamMQI Green',
    path: '/'
  },
  {
    name: 'QABUL-2024',
    path: '/'
  },
  {
    name: 'Bog‘lanish',
    path: '/'
  }
])
const authStore = useAuthStore()
const user = ref<any>(null)
if (authStore.user) {
  console.log('hey bro')
}

onMounted(async () => {
  await authStore.fetchProfile()
  user.value = await authStore.user
  console.log(user.value, 'user')
})
</script>

<template>
  <header class="z-50">
    <div class="bg-primary text-[#c6c6c6] font-semibold py-4">
      <div class="container mx-auto w-full max-w-7xl px-5 flex items-center justify-between">
        <div class="flex">
          <div class="mr-5 flex items-center gap-2">
            <inline-svg src="svg/e-mail.svg" />
            <a href="#">nammqi_info@edu.uz</a>
          </div>
          <div class="mr-5 flex items-center gap-2">
            <inline-svg src="svg/phone.svg" />
            <a href="tel:+998692341430">+998 (69) 234-14-30</a>
          </div>
        </div>
        <div class="flex">
          <span class="block mr-2.5">Ijtimoiy tarmoqlar: </span>
          <ul class="flex items-center gap-2 mr-6">
            <li class="px-[5px]">
              <a href="#">
                <inline-svg src="svg/facebook.svg" />
              </a>
            </li>
            <li class="px-[5px]">
              <a href="#">
                <inline-svg src="svg/twitter.svg" />
              </a>
            </li>
            <li class="px-[5px]">
              <a href="#">
                <inline-svg src="svg/telegram.svg" />
              </a>
            </li>
            <li class="px-[5px]">
              <a href="#">
                <inline-svg src="svg/instagram.svg" />
              </a>
            </li>
          </ul>
          <div v-if="authStore.user" class="flex gap-2 text-[#ffc600]">
            <router-link to="profile">Profile</router-link>
          </div>
          <div v-else class="flex gap-2 text-[#ffc600]">
            <a @click="$emit('open-login')" href="#">Login</a>
            <span> / </span>
            <a @click="$emit('open-register')" href="#">Register</a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white font-semibold py-5 w-full">
      <div class="container mx-auto w-full max-w-7xl px-5 flex items-center justify-between">
        <the-logo />
        <ul class="flex items-center">
          <li v-for="(link, index) in links" :key="index" class="nav-link">
            <router-link class="px-2.5 hover:text-primary transition-all" :to="link.path">
              {{ link.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="bg-primary text-[#c6c6c6] font-semibold py-4 flex">
      <div class="container mx-auto w-full max-w-7xl px-5 flex items-center justify-between">
        <div class="flex justify-center w-full">
          <div class="w-[40%] relative">
            <input class="search-input outline-none" type="text" placeholder="Search teacher" />
            <inline-svg src="svg/search.svg" class="absolute w-5 left-3 top-1/2 -translate-y-1/2" />
          </div>
          <button class="search-btn">Search</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.search-input {
  width: 100%;
  color: #464646;
  font-weight: 500;
  text-transform: capitalize;
  border: 1px solid #ffffff;
  padding: 8px 45px;
  height: 100%;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  font-size: 14px;
}

.search-btn {
  border: 0px;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  padding: 13px;
  border: 1px solid #e25f30;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  background: linear-gradient(to top, #de592a, #f36b3b);
}

.nav-link {
  position: relative;
}

.nav-link::before {
  @apply bg-primary;
  content: '';
  position: absolute;
  width: 85%;
  height: 3px;
  border-radius: 3px;
  bottom: -8px;
  left: 0px;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.nav-link:hover::before {
  transform-origin: right;
  transform: scaleX(0.6);
}
</style>
