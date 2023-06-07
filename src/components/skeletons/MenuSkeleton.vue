<script setup>
import Skeleton from '@/components/skeletons/Skeleton.vue';
</script>

<template>
  <div class="container mt-5 px-2">
    <Skeleton class="mx-auto mb-6 h-9 w-24 lg:text-2xl" />
    <div class="scroll-hidden flex gap-2 overflow-scroll px-1 py-4 lg:justify-center">
      <Skeleton v-for="index in 6" :key="index" class="flex h-6 w-20 gap-2" />
    </div>
    <div
      class="container mx-auto mt-2 grid grid-cols-1 gap-5 px-4 pt-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 xl:gap-8 xl:px-32"
    >
      <Skeleton v-for="index in 6" :key="index" class="h-36" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-hidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
