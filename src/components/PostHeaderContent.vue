<script setup>
import SectionIndicator from './global/SectionIndicator.vue'
</script>

<template>
  <section class='relative z-[111] px-3 sm:px-10 lg:px-20 py-10'>
    <div class='grid grid-cols-1 lg:grid-cols-2 gap-16 z-[111] relative'>
      <div class='left-content'>
        <h1 class='styled-heading mb-6 sm:mb-10'>DDtech is an Instigator <br> <span style='background: #80FF60;'>for Change</span></h1>
        <p class='mb-5'>DDtech champion your ideas not with applause, but with a scalable and comprehensive business strategy.</p>
        <div class='text-center lg:text-start'>
          <button type='button'>
            See what our clients say
          </button>
        </div>
      </div>
      <div class='right-column pt-10 lg:pt-0'>
        <div class='header-container'>
          <img class='m-auto' src='../../public/imgs/post_header_illustration.png' alt='Illustrations'>
        </div>
      </div>
    </div>
    <img class='red-ball' src='../../public/illustrations/red_ball.png' alt='Red'>
    <img class='green-ball' src='../../public/illustrations/green_ball.png' alt='Green'>
    <img class='yellow-ball' src='../../public/illustrations/yellow_ball.png' alt='Yellow'>
    <img class='blue-ball' src='../../public/illustrations/blue_ball.png' alt='Blue'>
    <div class='absolute top-10 right-20 z-[1]'>
      <img src='../../public/illustrations/curves_illustration.png' alt='illustration'>
    </div>

    <SectionIndicator :index='2' section-name='Instigator' />
  </section>
</template>

<style scoped>
.red-ball, .green-ball, .yellow-ball, .blue-ball{
  position: absolute;
  z-index: 11;
}
.red-ball{
  top: 40%;
  right: 18%;
}
.yellow-ball{
  top: 0;
  right: 10%;
}
.green-ball{
  bottom: 10%;
  right: 38%;
}
.blue-ball{
  top: 25%;
  right: 55%;
}
</style>
