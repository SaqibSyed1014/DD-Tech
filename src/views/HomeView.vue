<script setup>
import NavBar from '../components/NavBar.vue'
import HeaderContent from '../components/HeaderContent.vue'
import PostHeaderContent from '../components/PostHeaderContent.vue'
import PartnerSection from '../components/PartnerSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import GlobalReachSection from '../components/GlobalReachSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
</script>

<template>
  <div class='site-frame'>
    <NavBar />
    <HeaderContent />
    <main>
      <PostHeaderContent />
      <PartnerSection />
      <FeaturesSection />
      <GlobalReachSection />
      <ServicesSection />
    </main>
    <img class='header-bg-curve z-1 w-6/12 sm:w-5/12 md:w-6/12' src='../assets/svgs/header_yellow_bg.svg' alt='yellow-bg'>
  </div>
</template>
