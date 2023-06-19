<script setup>
import NavBar from '../components/global/NavBar.vue'
import HeaderContent from '../components/HeaderContent.vue'
import PostHeaderContent from '../components/PostHeaderContent.vue'
import PartnerSection from '../components/PartnerSection.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import GlobalReachSection from '../components/GlobalReachSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
</script>

<template>
  <div class='site-frame container mx-auto'>
    <NavBar :show-b-g-curve='true' />
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

<style scoped>
.site-frame{
  border-top-right-radius: 0;
}
</style>
