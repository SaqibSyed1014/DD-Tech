<template>
  <header class='px-3 sm:px-10 lg:px-20 py-10'>
    <div class='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0'>
      <div class='flex items-center'>
        <h1 class='template-heading'>BUILDING INNOVATIVE TECHNOLOGIES WITH CONVRTX</h1>
      </div>
      <div>
        <image-with-circle :circle-color='props.circleColor' :image-path='props.imagePath' :alt='props.alt' />
      </div>
    </div>
  </header>
</template>

<script setup>
import ImageWithCircle from '../global/ImageWithCircle.vue'
const props = defineProps({
  circleColor: String,
  imagePath: String,
  alt: String
})
</script>

