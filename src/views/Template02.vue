<script setup>
import NavBar from '../components/global/NavBar.vue'
</script>

<template>
  <div class='site-frame container mx-auto'>
    <NavBar />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
