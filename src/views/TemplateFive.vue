<script setup>
import NavBar from '../components/global/NavBar.vue'
import HeaderPart from '../components/templates/HeaderPart.vue'
import FAQS from '../components/templates/FAQs.vue'
import ContactForm from '../components/templates/ContactForm.vue'
import Banner from '../components/templates/Banner.vue'
import Footer from '../components/templates/Footer.vue'
</script>

<template>
  <div class='site-frame template template-two container mx-auto'>
    <NavBar />

    <HeaderPart
      heading='ConvrtX, Hub Of Software Incubation In Ras Al Khaimah'
      circle-color='rgba(47, 163, 242, .3)'
      image-path='imgs/map.png'
      alt='Map'
    />

    <section class='relative bg-green text-white px-3 !mb-36 sm:px-10 lg:px-20 py-32'>
      <div class='relative z-[11]'>
        <div class='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <p>You may be someone starting out new in the techno world, however, ConvrtX has already set up a niche for
            itself in the market. Ras al Khaimah happens to be another one of its hubs offering expert services for your
            business models.</p>
          <p>We at ConvrtX look forward to helping you shape the market with our endeavours. You will be impressed not
            only with our vision but also with the way we operate.</p>
        </div>
        <div class='my-10'>
          <img class='mx-auto' src='/characters/muslim_girl.png' alt='Muslim Girl'>
        </div>
        <div class='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <p>Being able to reach across platforms through a startup division that will help you comply with the rules of
            the market and also equip you with the means to stand out is one opportunity that you cannot pass upon.</p>
          <p>We are driven, we are experienced, and we are so ready for you. Our service operations in Ras al Khaimah
            have opened a new window for us where we will not only seek to expand our potential but also showcase our
            diligent effort.</p>
        </div>
      </div>

      <p class='mx-auto relative z-[11] w-auto md:w-9/12 pt-10 md:pt-20'>The digital space is gearing to experience cutting-edge technology with the way ConvrtX continues to drop products. You can become part of this network by making us a part of your journey.</p>

      <img class='absolute -top-[5%] sm:-top-[6%] -left-[6%] sm:-left-[2%]' src='/illustrations/red_3D_ball.png' alt='Red 3D Ball'>
      <img class='absolute top-0 right-0' src='/illustrations/quarter_circles.png' alt='Quarter Circles'>
      <img class='absolute top-[30%] -left-[3%]' src='/illustrations/big_curve.svg' alt='Light Curve'>
      <img class='absolute -bottom-[4%] sm:-bottom-[5%] md:-bottom-[6%] lg:-bottom-[8%] left-[3%] w-5/12 sm:w-3/12 lg:w-auto' src='/illustrations/3D_balls_group.png' alt='3D Balls Group'>
    </section>

    <FAQS />

    <ContactForm />

    <Banner />

    <Footer />
  </div>
</template>

<style scoped>

</style>
