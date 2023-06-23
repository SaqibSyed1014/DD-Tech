<template>
  <div class='image-circle mx-auto lg:mr-0 lg:ml-auto' :style='{ background: props.circleColor }'>
    <img :src='props.imagePath' :alt='props.alt'>
  </div>
</template>

<script setup>
const props = defineProps({
  imagePath: String,
  alt: String,
  circleColor: String
})
</script>

<style lang='scss' scoped>
.image-circle{
  width: 330px;
  height: 330px;
  margin-left: auto;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

