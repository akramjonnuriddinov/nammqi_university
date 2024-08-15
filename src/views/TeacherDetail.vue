<script setup lang="ts">
import { ref, computed } from 'vue'
import ProfileTab from '@/components/tabs/ProfileTab.vue'
import BooksTab from '@/components/tabs/BooksTab.vue'
import ArticlesTab from '@/components/tabs/ArticlesTab.vue'
import ProjectsTab from '@/components/tabs/ProjectsTab.vue'
import VideosTab from '@/components/tabs/VideosTab.vue'
import InlineSvg from '@/components/InlineSvg.vue'

const tabs = ref<string[]>(['Profil', 'Videolar', 'Kitoblar', 'Maqolalar', 'Loyihalar'])
const currentTab = ref<number>(0)
const tabComponents: any = {
  Profil: ProfileTab,
  Kitoblar: BooksTab,
  Maqolalar: ArticlesTab,
  Loyihalar: ProjectsTab,
  Videolar: VideosTab
}

const currentComponent = computed(() => {
  const componentName = tabs.value[currentTab.value]
  return tabComponents[componentName]
})
</script>

<template>
  <main>
    <div class="hero"></div>
    <div class="bg-[#edf0f2] pt-[70px] py-[120px]">
      <div class="container mx-auto w-full max-w-7xl px-5 flex">
        <div class="px-4 max-w-[33%] w-full">
          <div class="bg-white py-9 px-10 rounded-md flex flex-col">
            <img class="rounded-md mb-6" src="@/assets/images/team-06.webp" width="300" alt="" />
            <div class="mb-4">
              <h6 class="text-lg text-black font-bold">Mark Alen</h6>
              <span class="text-[#8a8a8a]">Vice Chancellor</span>
            </div>
            <div>
              <ul class="flex items-center gap-2 mb-4">
                <li class="px-[5px] text-[#0866FF]">
                  <a href="#">
                    <inline-svg class="w-4" src="svg/facebook-color.svg" />
                  </a>
                </li>
                <li class="px-[5px] text-[#1DA1F2]">
                  <a href="#">
                    <inline-svg class="w-7" src="svg/twitter-color.svg" />
                  </a>
                </li>
                <li class="px-[5px] text-[#168CC8]">
                  <a href="#">
                    <inline-svg class="w-7" src="svg/linkedin-color.svg" />
                  </a>
                </li>
                <li class="px-[5px] text-[#0A66C2]">
                  <a href="#">
                    <inline-svg class="w-7" src="svg/telegram-color.svg" />
                  </a>
                </li>
              </ul>
            </div>
            <p class="text-[#505050]">
              Gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat
              ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate..
            </p>
          </div>
        </div>
        <div class="px-4 w-full">
          <div class="bg-white rounded-md flex flex-col">
            <!-- BUTTONS -->
            <div class="w-full flex">
              <button
                v-for="(tab, index) in tabs"
                :key="index"
                :class="[
                  'border w-full px-2 py-5 font-semibold border-none transition-all duration-500 hover:bg-white hover:text-primary',
                  currentTab === index ? 'bg-white text-primary' : 'bg-primary text-white'
                ]"
                class="tab-btn"
                @click="currentTab = index"
              >
                {{ tab }}
              </button>
            </div>
            <!-- /BUTTONS -->
            <div class="p-10">
              <component :is="currentComponent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero {
  background: url(@/assets/images/pro-bg.jpg) no-repeat center center;
  width: 100%;
  height: 250px;
  display: block;
  background-size: cover;
}

.tab-btn:first-child {
  border-top-left-radius: 6px;
}

.tab-btn:last-child {
  border-top-right-radius: 6px;
}
</style>
