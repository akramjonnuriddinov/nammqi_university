<script setup lang="ts">
import { signWithGoogle } from '@/composables/useAuth'
import InlineSvg from '@/components/InlineSvg.vue'

const signInWithGoogle = async () => {
  await signWithGoogle()
}
</script>

<template>
  <section
    @click="$emit('close-register')"
    class="register overflow-y-auto p-10 fixed z-50 w-full top-0 left-0 bg-[#00000040] flex items-start justify-center"
  >
    <div
      @click.stop
      class="bg-white max-w-[800px] rounded-xl w-full flex shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
    >
      <div class="font-[sans-serif]">
        <div class="flex flex-col items-center justify-center">
          <div
            class="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 rounded-md"
          >
            <div class="w-full px-4 py-4">
              <form class="">
                <div class="mb-12">
                  <h3 class="text-gray-800 text-3xl font-extrabold">Ro'yxatdan o'tish</h3>
                  <p class="text-sm mt-4 text-gray-800">
                    Allaqachon ro'yxatdan o'tganmisiz?
                    <a
                      @click="$emit('open-login')"
                      href="#"
                      class="text-primary font-semibold hover:underline ml-1 whitespace-nowrap"
                      >Kirish</a
                    >
                  </p>
                </div>

                <div>
                  <label class="text-gray-800 text-xs block mb-2">Ism-familiya</label>
                  <div class="relative flex items-center">
                    <input
                      name="text"
                      type="text"
                      autocomplete="off"
                      required
                      class="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary px-2 py-3 outline-none"
                      placeholder="Ism-familiya"
                    />
                    <inline-svg
                      src="svg/username.svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-4 h-4 absolute right-4"
                    />
                  </div>
                </div>

                <div class="mt-8">
                  <label class="text-gray-800 text-xs block mb-2">Email</label>
                  <div class="relative flex items-center">
                    <input
                      name="email"
                      type="text"
                      autocomplete="off"
                      required
                      class="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary px-2 py-3 outline-none"
                      placeholder="Email kiriting"
                    />
                    <inline-svg
                      src="svg/mail-outline.svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-2"
                    />
                  </div>
                </div>

                <div class="mt-8">
                  <label class="text-gray-800 text-xs block mb-2">Parol</label>
                  <div class="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      class="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-primary px-2 py-3 outline-none"
                      placeholder="Parol kiriting"
                    />
                    <inline-svg
                      src="svg/eye.svg"
                      fill="#bbb"
                      stroke="#bbb"
                      class="w-[18px] h-[18px] absolute right-2"
                    />
                  </div>
                </div>

                <div class="flex flex-wrap items-center justify-between gap-4 mt-6">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 shrink-0 text-primary focus:ring-primary border-primary rounded"
                    />
                    <label for="remember-me" class="ml-3 block text-sm text-gray-800">
                      Eslab qolish
                    </label>
                  </div>
                </div>

                <div class="mt-12">
                  <button
                    type="button"
                    class="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-primary hover:opacity-90 focus:outline-none"
                  >
                    Ro'yxatdan o'tish
                  </button>
                </div>

                <div class="mt-6">
                  <button
                    @click="signInWithGoogle"
                    type="button"
                    class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <inline-svg src="svg/google.svg" class="inline" />
                    Google orqali ro'yxatdan o'tish
                  </button>
                </div>
              </form>
            </div>

            <div class="md:h-full bg-primary rounded-xl lg:p-12 p-8">
              <img
                src="@/assets/images/signin-image.webp"
                class="w-full h-full object-contain"
                alt="login-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.register {
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.73);
  -webkit-box-pack: center;
  overflow: auto;
  width: 100vw;
  height: -webkit-fill-available;
}
</style>
