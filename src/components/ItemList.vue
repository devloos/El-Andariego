<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div
    class="container mx-auto mt-2 grid grid-cols-1 gap-5 px-4 pt-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 xl:gap-8 xl:px-32"
  >
    <div v-for="item in items" :key="item.name" class="relative">
      <div class="mb-4 flex justify-between">
        <p class="font-bold text-main">{{ item.name }}</p>
        <p>{{ `($${item.price})` }}</p>
      </div>
      <p class="mb-5 font-semibold">{{ item.content }}</p>
      <hr class="border-1 border-gray-700" />
    </div>
  </div>
</template>

<style scoped>
hr {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>
