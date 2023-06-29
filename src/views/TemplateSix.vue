<script setup>
import NavBar from '../components/global/NavBar.vue'
import HeaderPart from '../components/templates/HeaderPart.vue'
import ImageWithCircle from '../components/global/ImageWithCircle.vue'
import FAQS from '../components/templates/FAQs.vue'
import ContactForm from '../components/templates/ContactForm.vue'
import Banner from '../components/templates/Banner.vue'
import Footer from '../components/templates/Footer.vue'
</script>

<template>
  <div class='site-frame template template-two container mx-auto'>
    <NavBar />

    <HeaderPart
      heading='Revolutionize the Digital Industry With ConvrtX in Mississauga, Canada'
      circle-color='rgba(47, 163, 242, .4)'
      image-path=''
      alt=''
    />

    <section class='px-3 sm:px-10 lg:px-20 pt-20'>
      <h2 class='template-heading text-center mb-5'>What Can We Do To Assist You?</h2>
      <p class='text-center pb-8 lg:pb-20'>ConvrtX is a software development company. Our bespoke software development, analytics, and business consulting firm help firms embrace technology and achieve strategic goals by combining a zealous entrepreneurial spirit and a consulting attitude.</p>
      <div class='grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0'>
        <div>
          <strong>Software Development on Demand</strong>
          <p class='pb-10'>You can be sure that your project is in good hands with our "Mobile First" development philosophy, which is backed by an industry-leading warranty against hidden faults. We are continuously bringing new ideas to the table and assisting you in seeing your product's long-term potential. Simultaneously, we adopt a realistic approach in helping you launch the product as quickly as possible. We use a cutting-edge technology stack and encourage CI/CD pipelines to speed up the build-release process.</p>

          <strong>Solutions for Business Analytics</strong>
          <p>Decision-makers and analysts in companies can utilize Business Intelligence (BI) tools to slice and dice data to gain valuable insights. Machine Learning and AI integrated solutions help provide predictive and prescriptive analytics. We work with all leading BI technologies at ConvrtX and complete mostdashboard projects well before time. We can also assist you with the development of Machine Learning models in or Python.</p>
        </div>
        <div>
          <image-with-circle class='mx-auto' image-path='' alt='' circle-color='rgba(89, 86, 233, .3)' />
        </div>
      </div>
    </section>

    <FAQS />

    <ContactForm />

    <Banner />

    <Footer />
  </div>
</template>

<style scoped>

</style>
