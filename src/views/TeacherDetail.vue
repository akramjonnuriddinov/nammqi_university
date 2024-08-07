<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <the-header />

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
              <!-- <ul class="flex items-center gap-2 mb-4">
                <li v-for="i in 4">
                  <a
                    class="text-[#333931] bg-[#F3F5F5] flex p-2 rounded-full w-10 h-10 items-center justify-center"
                    href="#"
                  >
                    <svg
                      class="w-2.5"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                      />
                    </svg>
                  </a>
                </li>
              </ul> -->
              <ul class="flex items-center gap-2 mb-4">
                <li class="px-[5px] text-[#0866FF]">
                  <a href="#">
                    <svg
                      class="w-4"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="px-[5px] text-[#1DA1F2]">
                  <a href="#">
                    <svg
                      class="w-7"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="px-[5px] text-[#168CC8]">
                  <a href="#">
                    <svg
                      class="w-7"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="px-[5px] text-[#0A66C2]">
                  <a href="#">
                    <svg
                      class="w-6"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                      />
                    </svg>
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
                class="border w-full px-2 py-5 font-semibold border-none bg-white text-[#07294d] transition-all duration-500 rounded-tl-md"
              >
                Profil
              </button>
              <button
                class="border w-full px-2 bg-[#07294d] text-white py-5 font-semibold border-none hover:bg-white hover:text-[#07294d] transition-all duration-500"
              >
                Kitoblar
              </button>
              <button
                class="border w-full px-2 bg-[#07294d] text-white py-5 font-semibold border-none hover:bg-white hover:text-[#07294d] transition-all duration-500"
              >
                Maqolalar
              </button>
              <button
                class="border w-full px-2 bg-[#07294d] text-white py-5 font-semibold border-none hover:bg-white hover:text-[#07294d] transition-all duration-500"
              >
                Loyihalar
              </button>
              <button
                class="border w-full px-2 bg-[#07294d] text-white py-5 font-semibold border-none rounded-tr-md hover:bg-white hover:text-[#07294d] transition-all duration-500"
              >
                Videolar
              </button>
            </div>
            <!-- /BUTTONS -->
            <div class="p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut quas excepturi fuga,
              assumenda pariatur accusamus tempora at autem et. Molestias nisi dolore molestiae
              numquam corrupti tempora consequatur corporis vitae?
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
</style>
