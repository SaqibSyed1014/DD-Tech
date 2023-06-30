<template>
  <!-- Left Floating Card -->
  <div v-if='cardPosition === "left"' class='hidden lg:block bg-primary rounded-tr-[2.5rem] rounded-br-[2.5rem] w-9/12 h-64 px-6 py-5 mb-10'>
    <div class='flex items-center h-full'>
      <div class='rounded-full w-28 h-28 grow-0 shrink-0 bg-white text-primary fw-bold text-7xl p-10 flex justify-center items-center'>
        <span>{{ props.cardNumber }}</span>
      </div>
      <p class='text-white pl-8'>{{ props.text }}</p>
      <div :class='[`bg-[${props.cardColor}]`]' class='relative -right-36 grow-0 shrink-0 rounded-3xl h-full w-56 -ml-10'>
        <slot />
      </div>
    </div>
  </div>

  <!-- Right Floating Card -->
  <div v-else class='hidden lg:block bg-primary rounded-tl-[2.5rem] rounded-bl-[2.5rem] w-9/12 h-64 px-6 py-5 my-10 ml-auto lg:my-20'>
    <div class='flex items-center h-full'>
      <div :class='[`bg-[${props.cardColor}]`]' class='relative flex items-center -left-24 grow-0 shrink-0 rounded-3xl h-full w-56 -ml-10'>
        <slot />
      </div>
      <p class='text-white pr-8'>{{ props.text }}</p>
      <div class='rounded-full w-28 h-28 grow-0 shrink-0 bg-white text-primary fw-bold text-7xl p-10 flex justify-center items-center'>
        <span>{{ props.cardNumber }}</span>
      </div>
    </div>
  </div>

  <div class='block lg:hidden text-center bg-primary rounded-xl p-8 mx-3 sm:mx-10 mb-44'>
    <div class='-mt-24 mx-auto rounded-full shadow-xl w-28 h-28 grow-0 shrink-0 bg-white text-primary fw-bold text-7xl p-10 flex justify-center items-center'>
      <span>{{ props.cardNumber }}</span>
    </div>
    <p class='text-white my-10'>{{ props.text }}</p>
    <div :class='[`bg-[${props.cardColor}]`]' class='relative flex items-center -mb-24 mx-auto grow-0 shrink-0 rounded-3xl h-full h-56 w-56'>
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  cardColor: String,
  cardNumber: Number,
  cardPosition: {
    type: String,
    default: 'left'
  }
})
</script>

<style scoped>

</style>
