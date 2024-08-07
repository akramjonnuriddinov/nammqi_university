<script setup lang="ts">
import AppPagination from '@/components/AppPagination.vue'
</script>

<template>
  <main>
    <div class="hero"></div>
    <div class="container mx-auto w-full max-w-7xl px-5 py-[80px]">
      <div class="text-center pb-10">
        <span class="font-semibold uppercase mb-4 text-base text-[#808080]">Ustozlar</span>
        <h2 class="mb-1 font-bold text-4xl">O‘qituvchilar ro‘yxati</h2>
      </div>
      <ul class="flex flex-wrap">
        <li v-for="i in 7" :key="i" class="w-1/3 p-4">
          <div class="card-wrapper">
            <div class="card-inner">
              <div class="thumbnail-wrapper">
                <div class="thumbnail">
                  <a href="#">
                    <img class="rounded-[10px]" src="../assets/images/team-06.webp" alt="" />
                  </a>
                </div>
                <ul class="thumbnail-social flex gap-4">
                  <li class="flex items-center justify-center">
                    <a
                      class="flex border-2 text-white hover:bg-white hover:text-[#07294d] transition-all duration-300 w-full h-full p-3 rounded-full"
                      href="#"
                    >
                      <svg
                        class="w-5 h-5"
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
                  <li class="flex items-center justify-center">
                    <a
                      class="flex border-2 text-white hover:bg-white hover:text-[#07294d] transition-all duration-300 w-full h-full p-3 rounded-full"
                      href="#"
                    >
                      <svg
                        class="w-5 h-5"
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
                  <li class="flex items-center justify-center">
                    <a
                      class="flex border-2 text-white hover:bg-white hover:text-[#07294d] transition-all duration-300 w-full h-full p-3 rounded-full"
                      href="#"
                    >
                      <svg
                        class="w-5 h-5"
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
                </ul>
              </div>
              <div class="content text-center mt-4">
                <h5 class="title mb-1 font-semibold text-lg">
                  <router-link to="/teacher_detail">Jane Seymour</router-link>
                </h5>
                <span class="designation mb-4 text-[#808080]">Teacher</span>
                <p class="mb-4 text-[#808080] text-base">
                  Consectetur adipisicing elit, sed do eius mod tempor incididunt
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <app-pagination />
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

.card-wrapper {
  padding: 0 30px 36px;
  position: relative;
  z-index: 1;
}

.card-wrapper::after {
  content: '';
  height: 75%;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  /* box-shadow: 0 10px 50px 0 rgba(26, 46, 85, 0.1); */
  box-shadow: 0 10px 50px 0 rgba(7, 41, 77, 0.07);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.thumbnail a {
  border-radius: 10px;
  position: relative;
  display: block;
  transition: 0.3s;
}

.thumbnail a:after {
  content: '';
  height: 100%;
  width: 100%;
  /* background-color: rgba(26, 182, 157, 0.6); */
  background-color: rgba(7, 41, 77, 0.5);
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  visibility: visible;
  opacity: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.card-wrapper:hover .thumbnail a:after {
  visibility: visible;
  opacity: 1;
}

.card-wrapper:hover .thumbnail-social li:nth-child(1n) {
  transition-delay: 0.2s;
}
.card-wrapper:hover .thumbnail-social li:nth-child(2n) {
  transition-delay: 0.3s;
}
.card-wrapper:hover .thumbnail-social li:nth-child(3n) {
  transition-delay: 0.4s;
}

.card-wrapper:hover .thumbnail-social li {
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  visibility: visible;
  opacity: 1;
}

.thumbnail-social {
  transition: 0.3s;
  display: flex;
  justify-content: center;
  margin: -5px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.thumbnail-social li {
  -webkit-transform: translateX(10px);
  -ms-transform: translateX(10px);
  transform: translateX(10px);
  visibility: hidden;
  opacity: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
</style>
