<script setup>
import SectionIndicator from './global/SectionIndicator.vue'
</script>

<template>
  <section class='relative'>
    <img class='bg-circle w-4/12 sm:w-3/12' src='../assets/illustrations/sky_blue_circle.png' alt='Bg Circle'>
    <img class='bg-circle w-4/12 sm:w-3/12' src='../assets/illustrations/sky_blue_circle.png' alt='Bg Circle'>
    <div class='container w-full sm:w-9/12 lg:w-6/12 px-5 sm:px-10 lg:px-20 z-[11] relative mx-auto text-center'>
      <h1 class='styled-heading mb-6 sm:mb-10'>DDtech is <span style='background: #48BDFF;'>Global</span></h1>
      <p>A spark can come from anywhere. With cross border Team, DDtech brings together the resources you are missing no matter where you are.</p>
      <img class='mx-auto py-16' src='../assets/illustrations/3d_character.png' alt='3D Character'>
      <button type='button'>Industries we are Transforming</button>
    </div>

    <SectionIndicator :index='5' section-name='Consistent' />

    <img class='bg-curves absolute -bottom-24 lg:-bottom-48 -left-24' src='../assets/illustrations/curves.png' alt='Curves'>
  </section>
</template>

<style lang='scss' scoped>
section{
  color: var(--section-color);
  background: var(--section-bg-color);
  padding: 8rem 1rem;
  position: relative;
  margin-top: 3rem;
  @media (max-width: 1024px) {
    margin-top: var(--section-sm-gap);
  }
  @media (max-width: 640px) {
    padding: 10rem 0;
  }
  .section-content{
    height: 500px;
  }
  h1{
    color: var(--section-color);
  }
  .bg-circle{
    z-index: 1;
    position: absolute;
    &:nth-child(1) {
      top: 0;
      right: 0;
    }
    &:nth-child(2) {
      bottom: 0;
      left: 0;
      transform: rotate(180deg);
    }
  }
  .bg-curves{
    position: absolute;
    //bottom: -12rem;
    //left: 6rem;
    z-index: 11;
    transform: scale(1.6);
  }
}
</style>
