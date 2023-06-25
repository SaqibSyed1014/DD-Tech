<template>
  <div class='bg-navy relative bg-no-repeat bg-cover px-3 sm:px-10 lg:px-20 py-32 my-16 lg:my-20' style='background-image: url(illustrations/faq_bg.png)'>
    <h3 class='template-heading text-center !text-white w-6/12 mx-auto'>Frequently Asked Questions</h3>

    <div class='faq-queries grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10'>
      <div v-for='(faq, index) in faqList' :key='index' class='faq relative bg-white p-8'>
        <p class='pr-10'>{{ `${index+1}. ${faq}` }}</p>
        <span>+</span>
      </div>
    </div>

    <img class='absolute -top-[4%] sm:-top-[7%] -left-[2%] w-7/12 sm:w-auto' src='illustrations/yellow_3D_ball.png' alt='Yellow 3D Ball'>
    <img class='absolute -bottom-[30%] right-0' src='illustrations/pink_boxes.png' alt='Pink 3D Boxes'>
  </div>
</template>

<script setup>
const faqList = [
  'I have an idea but I have never run a business before. Can I create a startup with ConvrtX?',
  'Do I have to be in the US or Canada to work with ConvrtX?',
  'I already have a business can I still sign up with you?',
  'What type of industries do you cater to?',
  'How long will my company stay in your studio program?',
  'Can I sign up if my product is already developed?',
  'Can I sign up if I still have not secured the required funding for my startup?',
  'Do I need a pitch deck to sign up with ConvrtX?',
  'Is it okay if I have a day job as I build a startup with ConvrtX?',
  'How do I get in touch with your representatives?'
]

</script>

<style lang='scss' scoped>
.faq-queries{
  .faq{
    border-radius: 20px;
    p{
      color: var(--color-heading);
      font-weight: 800;
      font-size: 1.125rem;
    }
    span{
      cursor: pointer;
      position: absolute;
      top: 14px;
      right: 22px;
      color: white;
      width: 14px;
      height: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 1rem;
      background: var(--color-primary);
    }
  }
}
</style>
