<script setup lang="ts">
import AppPagination from '@/components/AppPagination.vue'
import InlineSvg from '@/components/InlineSvg.vue'
</script>

<template>
  <main>
    <div class="hero"></div>
    <div class="container mx-auto w-full max-w-7xl px-5 py-[80px]">
      <div class="text-center pb-10">
        <span class="font-semibold uppercase mb-4 text-base text-tg-gray">Ustozlar</span>
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
                      class="flex border-2 text-white hover:bg-white hover:text-primary transition-all duration-300 w-full h-full p-3 rounded-full"
                      href="#"
                    >
                      <inline-svg class="w-5 h-5" src="svg/linkedin.svg" />
                    </a>
                  </li>
                  <li class="flex items-center justify-center">
                    <a
                      class="flex border-2 text-white hover:bg-white hover:text-primary transition-all duration-300 w-full h-full p-3 rounded-full"
                      href="#"
                    >
                      <inline-svg class="w-5 h-5" src="svg/twitter.svg" />
                    </a>
                  </li>
                  <li class="flex items-center justify-center">
                    <a
                      class="flex border-2 text-white hover:bg-white hover:text-primary transition-all duration-300 w-full h-full p-3 rounded-full"
                      href="#"
                    >
                      <inline-svg class="w-5 h-5" src="svg/facebook.svg" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="content text-center mt-4">
                <h5 class="title mb-1 font-semibold text-lg">
                  <router-link to="/teacher_detail">Jane Seymour</router-link>
                </h5>
                <span class="designation mb-4 text-tg-gray">Teacher</span>
                <p class="mb-4 text-tg-gray text-base">
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
