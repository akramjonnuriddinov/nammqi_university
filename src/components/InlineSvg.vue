<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'
import { getImageUrl } from '@/composables/useImage'

defineProps(['src'])
</script>

<template>
  <inline-svg fill="currentColor" style="" :src="getImageUrl(src)" />
</template>
