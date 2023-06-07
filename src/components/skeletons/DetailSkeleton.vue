<script setup>
import Skeleton from '@/components/skeletons/Skeleton.vue';
</script>

<template>
  <div class="mt-3 flex flex-col items-center">
    <Skeleton class="mb-5 h-8 w-1/2 max-w-xs md:h-10 md:w-1/3" />
    <Skeleton class="mb-5 h-72 w-full max-w-5xl md:h-96 md:w-11/12 lg:h-[500px]" />
    <Skeleton class="h-28 w-2/3 max-w-2xl md:h-32 lg:h-36 lg:w-1/2" />
  </div>
</template>
