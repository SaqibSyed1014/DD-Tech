<script setup>
import ImageWithCircle from '../../components/global/ImageWithCircle.vue'
</script>

<template>
  <form class='px-3 sm:px-10 lg:px-20 mb-16 z-[111] relative'>
    <div class='form-wrapper p-0 sm:p-8 grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-10'>
      <div class='text-left'>
        <h3 class='text-3xl lg:pr-20'>Let’s speak. You’re here for a reason!</h3>
        <ImageWithCircle class='!ml-0 mt-20' image-path='illustrations/lamp.png' image-position='start' circle-color='#D4DAFA' />
      </div>
      <div class='form-body'>
        <div>
          <label>Name</label>
          <input type='text' placeholder='Your name'>
        </div>
        <div class='my-10'>
          <label>Email</label>
          <input type='text' placeholder='Email address'>
        </div>
        <div>
          <label>Message</label>
          <textarea placeholder='Message'></textarea>
        </div>
        <div class='mt-8 text-right'>
          <button class='md-btn' type='button'>Get in Touch</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang='scss' scoped>
.form-wrapper{
  border-radius: 2.5rem;
  background: white;
}
</style>
