<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <the-header />
  Home View
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
