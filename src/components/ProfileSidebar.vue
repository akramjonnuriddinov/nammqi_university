<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['selectItem'])
const selectedNavItem = ref("Profil ma'lumotlari")
const navigations = ref([
  {
    name: "Profil ma'lumotlari",
    component: 'ProfileDetail',
    disabled: false
  },
  {
    name: 'Video yuklash',
    component: 'UploadVideo',
    disabled: false
  },
  {
    name: 'Kitob yuklash',
    component: 'UploadBook',
    disabled: false
  },
  {
    name: 'Maqola yuklash',
    component: 'UploadArticle',
    disabled: false
  },
  {
    name: 'Loyihalar',
    disabled: false
  }
])

const selectNavItem = (nav: any) => {
  if (!nav.disabled) {
    selectedNavItem.value = nav.name
    emit('selectItem', nav.component)
  }
}
</script>

<template>
  <aside
    class="relative left-0 z-10 w-64 pt-10 max-[990px]:mt-[50px] max-[990px]:flex max-[990px]:w-full max-[990px]:justify-center max-[990px]:pt-0 sm:translate-x-0"
  >
    <div class="h-full px-3 max-[990px]:w-full max-[990px]:p-0 max-[990px]:pb-0">
      <h1 class="text-2xl font-medium max-[990px]:mb-4">Sizning Profilingiz</h1>
      <ul
        class="mt-[57px] flex flex-col overflow-y-auto max-[990px]:mt-0 max-[990px]:flex-row max-[990px]:justify-start max-[990px]:gap-2"
      >
        <li
          v-for="nav in navigations"
          :key="nav.name"
          onmousedown="return false;"
          onselectstart="return false;"
          :class="{
            'cursor-not-allowed text-gray-400 max-[990px]:px-0 ': nav.disabled,
            'cursor-pointer hover:text-primary ': !nav.disabled
          }"
          class="relative mb-3 w-full rounded-md text-base font-semibold max-[990px]:mb-0 max-[990px]:w-auto max-[990px]:rounded-none max-[990px]:border-0"
          @click="selectNavItem(nav)"
        >
          <span
            :class="{
              'bg-primary text-white max-[990px]:border-[0px] max-[990px]:border-x-0 max-[990px]:border-t-0 max-[990px]:border-primary  max-[990px]:bg-transparent max-[990px]:text-primary':
                selectedNavItem === nav.name
            }"
            class="block w-full whitespace-nowrap rounded-md px-5 py-3 max-[990px]:rounded-none max-[990px]:py-2"
            >{{ nav.name }}</span
          >
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
::-webkit-scrollbar {
  height: 4px;
}
</style>
