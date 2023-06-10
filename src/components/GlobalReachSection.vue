<template>
  <section>
    <img class='bg-circle w-4/12 sm:w-3/12' src='../assets/illustrations/sky_blue_circle.png' alt='Bg Circle'>
    <img class='bg-circle w-4/12 sm:w-3/12' src='../assets/illustrations/sky_blue_circle.png' alt='Bg Circle'>
    <div class='container w-full sm:w-9/12 lg:w-6/12 px-5 sm:px-10 lg:px-20 z-[11] relative mx-auto text-center'>
      <h1 class='styled-heading mb-10'>DDtech is <span style='background: #48BDFF;'>Global</span></h1>
      <p>A spark can come from anywhere. With cross border Team, DDtech brings together the resources you are missing no matter where you are.</p>
      <img class='mx-auto py-16' src='../assets/illustrations/3d_character.png' alt='3D Character'>
      <button type='button'>Industries we are Transforming</button>
    </div>
  </section>
</template>

<style lang='scss' scoped>
section{
  color: var(--section-color);
  background: var(--section-bg-color);
  padding: 8rem 1rem;
  position: relative;
  margin-top: 3rem;
  @media (max-width: 640px) {
    padding: 10rem 0;
  }
  .section-content{
    height: 500px;
  }
  h1{
    color: var(--section-color);
  }
  .bg-circle{
    z-index: 1;
    position: absolute;
    &:nth-child(1) {
      top: 0;
      right: 0;
    }
    &:nth-child(2) {
      bottom: 0;
      left: 0;
      transform: rotate(180deg);
    }
  }
}
</style>
