<template>
  <section>
    <img class='section-bg-circle' src='../assets/svgs/header_yellow_bg.svg' alt='Yellow Half Circle'>
    <div class='container mx-auto relative section-content px-5 sm:px-10 lg:px-20'>
      <div class='grid grid-cols-1 lg:grid-cols-2 gap-10 h-full'>
        <div class='order-2 lg:order-1 flex items-end justify-end'>
          <div><img src='../assets/illustrations/3d_character.png' alt='3D Character'></div>
        </div>
        <div class='order-1 lg:order-2'>
          <h1 class='styled-heading mb-10'>DDtech is your <span style='background: #48BDFF;'>Partner</span></h1>
          <p>We ensure that your vision becomes a reality. You need more than just an app. You need a team create a
            valuable asset and someone to take your project to the next level. It takes more than just capital to build
            the next big thing. For that, we have expertise set in motion at every stage of DDtech project cycle.</p>
          <div class='text-center mt-10'>
            <button type='button'>
              What it looks like to build a business?
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang='scss' scoped>
section{
  color: var(--section-color);
  background: var(--section-bg-color);
  padding: 8rem 1rem 0;
  position: relative;
  .section-content{
    height: 500px;
    @media (max-width: 1024px) {
      height: auto;
    }
  }
  h1{
    color: var(--section-color);
  }
  .section-bg-circle{
    width: 400px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(180deg);
  }
}
</style>
