<template>
  <div class='section-indicator z-[11] hidden lg:block'>
    <div class='flex flex-col items-end gap-3'>
      <div
        class='p-1'
        v-for='num in 7'
        :key='num'
        :class='{"flex items-center justify-between rounded-full bg-primary": num === props.index}'
      >
        <span v-if='num === props.index' class='section-name'>{{ props.sectionName }}</span>
        <div
          class='w-5 h-5 rounded-full border-2 border-primary'
          :class='{"bg-white ml-auto": num === props.index}'
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sectionName: String,
  index: Number
})
</script>

<style lang='scss' scoped>
.section-indicator{
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -50%);
  .section-name{
    font-size: 10px;
    color: #FFFFFF;
    margin: 0 .3rem;
  }
}
</style>
