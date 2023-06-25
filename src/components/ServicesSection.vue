<script setup>
import SectionIndicator from './global/SectionIndicator.vue'
</script>

<template>
    <section class='relative py-20 px-5 sm:px-10 lg:px-20'>
    <div>
      <h1 class='styled-heading text-center mb-12 lg:mb-24'>Let's Work <span style='background: #24B47E;'>Together</span></h1>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-10 h-full relative'>
        <div class='flex items-end justify-center relative'>
          <div class='w-9/12 z-[11]'><img src='../../public/illustrations/brief_case.png' alt='Brief Case'></div>
        </div>
        <div class='flex items-center justify-center lg:justify-start z-[111]'>
          <div>
            <div class='flex items-center gap-5 mb-5'>
              <img src='../../public/svgs/email.svg' alt='Email Icon'>
              <span>hello@convrtx.com</span>
            </div>
            <div class='flex items-center gap-5'>
              <img src='../../public/svgs/mobile-chat.svg' alt='Chat Icon'>
              <div>
                <span>+1(929)810-0786</span><br>
                <span>+1(929)224-3281</span>
              </div>
            </div>
            <div class='text-center'>
              <button type='button' class='md-btn mt-10'>
                Let's Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SectionIndicator :index='6' section-name='Work' />
  </section>
</template>

<style scoped>
section{padding-bottom: 5rem;}
</style>
