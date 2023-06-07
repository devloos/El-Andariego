<script setup>
import Skeleton from '@/components/skeletons/Skeleton.vue';
</script>
<template>
  <div
    class="container mt-6 grid grid-cols-1 items-center gap-10 px-3 lg:mt-10 lg:grid-cols-2 lg:gap-8 lg:px-12"
  >
    <div v-for="index in 4" :key="index">
      <Skeleton class="mb-3 h-8 w-36" />
      <Skeleton class="w-4/4 mb-3 h-72 sm:h-80 md:h-96 lg:h-64 xl:h-80 2xl:h-96" />
      <Skeleton class="h-16 w-72" />
    </div>
  </div>
</template>
