<template>
  <footer class="footer py-[50px]">
    <div class="container mx-auto w-full px-5">
      <div class="teamly-container">
        <div class="flex flex-col text-center lg:!flex-row lg:!text-start">
          <router-link class="mr-32" to="/">
            <the-logo color="white" />
          </router-link>
        </div>

        <hr class="my-11" />

        <div class="flex flex-row flex-wrap text-center md:!text-start">
          <div class="mb-6 basis-full md:!basis-4/12 md:pr-6 xl:!basis-3/12">
            <h3 class="mb-0 text-xl font-bold text-gray-50">NamMQI</h3>

            <p class="mb-4 text-base text-gray-100">
              © {{ new Date().getFullYear() }} NamMQI.<br class="hidden lg:!block" />
              Barcha huquqlar himoyalangan.
            </p>

            <div class="flex items-center justify-center md:justify-start">
              <a href="#" class="mr-3 transition-all hover:-translate-y-[2px]" target="_blank">
                <img src="@/assets/images/svg/telegram.svg" alt="you tube icon" />
              </a>
              <a href="#" class="mr-3 transition-all hover:-translate-y-[2px]" target="_blank">
                <img src="@/assets/images/svg/linkedin.svg" alt="instagram icon" />
              </a>
              <span class="mr-3 cursor-not-allowed transition-all">
                <img src="@/assets/images/svg/twitter.svg" alt="twitter icon" />
              </span>
              <span class="mr-3 cursor-not-allowed transition-all">
                <img src="@/assets/images/svg/facebook.svg" alt="facebook icon" />
              </span>
            </div>
          </div>

          <div class="mb-6 basis-full text-sm text-gray-100 md:!basis-4/12 md:pr-6 xl:!basis-3/12">
            <h4 class="mb-3 text-base font-medium text-gray-50">Biz bilan bog'lanish</h4>
            <div class="mb-5 xl:!pr-28">12 Ulitsa Do'stlik, Namangan, Uzbekistan</div>
            <a to="#" class="hover:text-[#07294d]" title="info@email.com" href="mailto:#" />
            <br />
            <a
              href="tel:+998900506166"
              class="whitespace-nowrap text-base font-semibold max-sm:text-sm"
            >
              +998 (90) 050-61-66
            </a>
          </div>

          <div class="mb-6 basis-full md:!basis-4/12 md:pr-6 xl:!basis-3/12">
            <h4 class="mb-3 text-base font-medium text-gray-50">Ko'proq o'qish</h4>
            <ul class="list-unstyled mb-0 text-gray-100">
              <li v-for="(link, index) in links" :key="index">
                <router-link :to="link.path" class="text-sm hover:text-[#07294d]">{{
                  link.name
                }}</router-link>
              </li>
            </ul>
          </div>

          <div
            class="relative mb-6 basis-full text-base text-gray-50 md:!basis-full xl:!basis-3/12"
          >
            <div
              class="absolute z-10 hidden h-full w-full items-center justify-center rounded-md backdrop-blur-md"
            >
              Coming soon
            </div>
            <h4 class="mb-3 font-medium text-gray-50">Our Newsletter</h4>
            <p class="mb-5 text-gray-100">
              Subscribe to our newsletter to get our news &amp; deals delivered to you.
            </p>
            <div>
              <div id="mc_embed_signup2">
                <form method="post">
                  <div>
                    <div class="relative flex" title="coming soon">
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder=""
                        autocomplete="off"
                        disabled
                        class="placeholder:opacity- focus:border-logo-text-color peer w-full cursor-text rounded-lg border border-[#4b5569] bg-transparent p-3 pr-24 text-tg-white outline-none disabled:cursor-not-allowed"
                      />
                      <label
                        class="absolute left-3 top-[20%] translate-y-[-50%] cursor-text pl-[1px] text-xs transition-all peer-placeholder-shown:top-[50%] peer-placeholder-shown:text-sm peer-focus:top-[20%] peer-focus:text-xs"
                        >Email Address</label
                      >
                      <input
                        value="Join"
                        type="submit"
                        name="subscribe"
                        disabled
                        class="absolute right-0 h-full w-20 cursor-pointer rounded-r-lg bg-[#07294d] text-sm font-bold disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import TheLogo from '@/components/TheLogo.vue'
import { ref } from 'vue'

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
</script>

<style>
.footer {
  background-image: url('../assets/images/footer-bg-2.jpg');
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
