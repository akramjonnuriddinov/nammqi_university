<script setup lang="ts"></script>

<template>
  <div id="back__preloader" style="">
    <div id="back__circle_loader"></div>
    <div class="back__loader_logo">
      <img
        loading="lazy"
        src="https://html.themewin.com/edurock-preview/edurock/img/pre.png"
        alt="Preload"
      />
    </div>
  </div>
</template>

<style scoped>
#back__preloader {
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: -webkit- flex;
  display: -ms- flex;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100vh;
  background: #ffffff;
  position: fixed;
  z-index: 999999;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
#back__circle_loader {
  width: 100px;
  height: 100px;
  border-style: solid;
  border-width: 5px;
  border-top-color: #465fe9;
  border-right-color: #465fe9;
  border-bottom-color: #d5eaff;
  border-left-color: #d5eaff;
  border-radius: 50%;
  -webkit-animation: spinLoader 2s linear infinite;
  animation: spinLoader 2s linear infinite;
}
.back__loader_logo {
  position: absolute;
}
.back__loader_logo img {
  width: 40px;
}
@keyframes spinLoader {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
