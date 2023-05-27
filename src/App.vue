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
  <main>
    <RouterView />
  </main>
  <AndariegoFooter />
</template>

<style scoped>
main {
  min-height: calc(100vh - 460px);
}
</style>
