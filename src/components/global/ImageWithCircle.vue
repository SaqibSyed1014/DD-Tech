<template>
  <div
    class='image-circle mx-auto lg:mr-0 lg:ml-auto'
    :style='{ background: props.circleColor, justifyContent: props.imagePosition }'
  >
    <img :src='getImagePath' :alt='props.alt'>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  imagePath: String,
  alt: String,
  circleColor: String,
  imagePosition: {
    type: String,
    default: 'center'
  }
})

const getImagePath = computed(() => {
  console.log('paths ', import.meta.env.BASE_URL, props.imagePath)
  return import.meta.env.BASE_URL + props.imagePath
})
</script>

<style lang='scss' scoped>
.image-circle{
  width: 330px;
  height: 330px;
  margin-left: auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  @media (max-width: 640px) {
    width: 300px;
    height: 300px;
  }
}
</style>

