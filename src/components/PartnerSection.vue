<script setup>
import SectionIndicator from './SectionIndicator.vue'
</script>

<template>
  <section class='mt-0 relative'>
    <div class='container mx-auto relative section-content px-0'>
      <div class='grid grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:gap-20 h-full relative'>
        <div class='order-2 lg:order-1 flex items-end justify-end pb-5 px-3 sm:px-10 z-[111]'>
          <img class='-mb-10' src='../assets/illustrations/3d_character.png' alt='3D Character'>
        </div>
        <div class='order-1 lg:order-2 px-3 sm:px-10 lg:pl-0 lg:pr-28 z-[111]'>
          <h1 class='styled-heading mb-6 sm:mb-10'>DDtech is your <span style='background: #48BDFF;'>Partner</span></h1>
          <p>We ensure that your vision becomes a reality. You need more than just an app. You need a team create a
            valuable asset and someone to take your project to the next level. It takes more than just capital to build
            the next big thing. For that, we have expertise set in motion at every stage of DDtech project cycle.</p>
          <div class='text-center mt-10'>
            <button type='button'>
              What it looks like to build a business?
            </button>
          </div>
        </div>

        <img class='section-bg-circle w-9/12 sm:w-5/12 lg:w-2/6' src='../assets/svgs/header_yellow_bg.svg' alt='Yellow Half Circle'>
      </div>
      <SectionIndicator :index='3' section-name='Partner' />
    </div>
  </section>
</template>

<style lang='scss' scoped>
section{
  color: var(--section-color);
  background: var(--section-bg-color);
  padding: 8rem 0 0;
  position: relative;
  @media (max-width: 640px) {
    padding: 5rem 0 0;
  }
  .section-content{
    height: 600px;
    @media (max-width: 1024px) {
      height: 800px;
    }
  }
  h1{
    color: var(--section-color);
  }
  .section-bg-circle{
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(180deg);
  }
}
</style>
