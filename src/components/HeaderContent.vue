<template>
  <header class='relative z-[11] px-3 sm:px-10 lg:px-20 py-10 relative'>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div class='left-content'>
          <h1 class='styled-heading mb-6 sm:mb-10'>We Make Ideas, <br> <span style='background: #FBDA63;'>Known!</span></h1>
          <p class='mb-5'>DDtech is an resourceful software development agency that transforms a dream by developing,
            and catalysing growth.</p>
          <div class='flex gap-10'>
            <div><img src='../assets/svgs/upwork_icon.svg' alt='Upwork'></div>
            <div><img src='../assets/svgs/dribbble_icon.svg' alt='Dribble'></div>
            <div><img src='../assets/svgs/clutch_icon.svg' alt='Clutch'></div>
          </div>
        </div>
        <div class='right-column z-[11] relative pt-10 lg:pt-0'>
          <div class='header-container'>
            <img class='m-auto' src='../assets/imgs/header_illustrations.png' alt='Illustrations'>
          </div>
        </div>
      </div>
      <SectionIndicator :index='1' section-name='Home' />
  </header>
</template>

<script setup>
import SectionIndicator from './SectionIndicator.vue'
</script>

<style scoped>

</style>
