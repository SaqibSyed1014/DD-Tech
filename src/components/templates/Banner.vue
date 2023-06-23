<template>
  <div class='my-10 sm:mx-0 lg:mx-20'>
    <div class='bg-navy template-banner px-3 sm:px-10 lg:px-20 py-20'>
      <h2 class='template-heading !text-white text-left mb-5'>Dreaming is for Sleeping</h2>
      <div class='flex flex-col md:flex-row items-start md:items-center justify-between gap-5'>
        <p class='text-pink text-left !text-3xl'>Wake Up & Launch Your Startup Today</p>
        <button type='button' class='uppercase'>Book a meeting</button>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.template-banner{
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 350px;
    background-color: transparent;
    border: .01rem solid #FAB8C4;
    border-radius: 50%;
    transform: translateX(-50%);
  }
  &::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 12rem;
    height: 12rem;
    background-color: #FAB8C4;
    border-radius: 50%;
    transform: translate(50%, -50%);
  }
}
</style>
