<script setup>
import SectionIndicator from './global/SectionIndicator.vue'
</script>

<template>
  <section class='container mx-auto relative px-3 sm:px-10 lg:px-20 mb-[130px]'>
    <img class='bg-curve' src='../../public/illustrations/curves_illustration.png' alt='Bg Curve'>
    <div>
      <h1 class='styled-heading text-center mb-28 sm:mb-40'>DDtech is <span style='background: #92AAFF;'>Consistent</span></h1>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-20 h-full relative'>
        <div class='flex items-end justify-end relative'>
          <div class='z-[11]'><img src='../../public/illustrations/rocket.png' alt='Rocket'></div>
          <div class='image-bg-circle'></div>
        </div>
        <div class='flex items-center z-[111]'>
          <div class='pt-10 sm:pt-20 lg:pt-0'>
            <p>We power software-based businesses with high efficient development. Sounds easier said than done? That’s
            because it is. Our team works day and night to stick to our Agile approach in maintaining and updating the
            application software.</p>
            <div class='text-center mt-10'>
              <button type='button' class='md-btn uppercase'>
                BOOK A MEETING
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SectionIndicator :index='4' section-name='Consistent' />
  </section>
</template>

<style lang='scss' scoped>
.image-bg-circle{
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: #EB7847;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  @media (max-width: 1280px) {
    width: 450px;
    height: 450px;
  }
  @media (max-width: 576px) {
    width: 300px;
    height: 300px;
  }
}
.bg-curve{
  position: absolute;
  right: 3%;
  top: 30%;
  z-index: 11;
  width: 60%;
}
</style>
