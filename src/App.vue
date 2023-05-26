<script setup>
import { useHead } from '@vueuse/head';
import AndariegoNav from '@/components/nav/AndariegoNav.vue';
import AndariegoFooter from '@/components/AndariegoFooter.vue';

useHead({
  title: 'El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Authentic Mexican Food Truck',
    },
  ],
});
</script>

<template>
  <AndariegoNav />
  <main class="flex flex-col">
    <RouterView class="grow" />
    <AndariegoFooter />
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}
</style>
