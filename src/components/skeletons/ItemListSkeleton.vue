<script setup>
import Skeleton from '@/components/skeletons/Skeleton.vue';
</script>

<template>
  <div
    class="container mx-auto mt-2 grid grid-cols-1 gap-5 px-4 pt-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 xl:gap-8 xl:px-32"
  >
    <Skeleton v-for="index in 6" :key="index" class="h-32" />
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
