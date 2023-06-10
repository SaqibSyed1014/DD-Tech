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
  </div>
</template>
