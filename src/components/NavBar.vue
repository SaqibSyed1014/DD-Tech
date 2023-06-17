<template>
  <div class='relative pt-3 px-5'>
    <nav>
      <div class='flex pt-6 relative lg:px-10 lg:py-5 z-[11] flex-wrap items-center justify-between mx-auto p-4'>
        <a class='flex items-center'>
          <img src='../assets/imgs/logo.png' class='h-8 mr-3' alt='logo' />
        </a>
        <div class='hidden lg:flex lg:order-2'>
          <button class='md-btn uppercase' type='button'>
            Book a meeting
          </button>
        </div>
          <button @click='showMenu = !showMenu'
                  class='inline-flex items-center p-2 text-sm text-gray-500 lg:hidden'
                  aria-controls='navbar-cta' aria-expanded='false'>
            <span class='sr-only'>Open main menu</span>
            <svg class='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'
                 xmlns='http://www.w3.org/2000/svg'>
              <path fill-rule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clip-rule='evenodd'></path>
            </svg>
          </button>
        <div v-if='screenWidth > 1024' class='items-center justify-between w-full lg:w-auto lg:order-1'>
          <ul
            class='flex flex-col font-medium px-4 lg:px-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0'>
            <li v-for='link in menuLinks' :key='link'>
              <a href='#' class='inline lg:block pb-5 lg:pb-0 pr-4 lg:p-0' :class="[link==='Home'?'active':'']" aria-current='page'>
                {{ link }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Teleport to='body'>
        <div v-if='showMenu' class='mobile-menu bg-primary'>
          <div class='flex justify-end pt-5'>
            <svg @click='showMenu = false' width='40' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <div class='menu-links'>
            <ul class='flex flex-col font-medium px-4'>
              <li v-for='link in menuLinks' :key='link' class='pb-5 text-2xl'><a href=''>{{ link }}</a></li>
            </ul>
          </div>
        </div>
      </Teleport>

    </nav>
    <img class='header-bg-curve z-1 w-6/12 sm:w-5/12 md:w-6/12' src='../assets/svgs/header_yellow_bg.svg' alt='yellow-bg'>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuLinks = ['Home', 'Explore', 'Our Process', 'Company', 'Services', 'Blog','Contact']

let showMenu = ref(false)
const screenWidth = ref(window.innerWidth)
const screenHeight = ref(window.innerHeight)

window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth
  screenHeight.value = window.innerHeight
})
</script>

<style scoped>
.mobile-menu{
  height: 100%;
  left: 0;
  min-height: 100vh;
  padding: 20px 40px 40px;
  position: absolute;
  top: 0;
  transition: all .35s ease-in;
  width: 100%;
  z-index: 1111;
  color: #FFFFFF;
}
</style>
