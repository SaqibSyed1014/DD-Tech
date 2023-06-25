<template>
  <header class='px-3 sm:px-10 lg:px-20 py-10'>
    <div class='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0'>
      <div class='flex items-center'>
        <h1 class='template-heading'>{{ props.heading }}</h1>
      </div>
      <div>
        <div
          class='image-circle mx-auto lg:mr-0 lg:ml-auto'
          :style='{ background: props.circleColor, justifyContent: props.imagePosition }'
        >
          <img :src='props.imagePath' :alt='props.alt'>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  heading: String,
  circleColor: String,
  imagePath: String,
  alt: String,
  imagePosition: {
    type: String,
    default: 'center'
  }
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

