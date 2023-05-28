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
  <RouterView class="router-link" />
  <AndariegoFooter />
</template>

<style lang="scss" scoped>
.router-link {
  min-height: calc(100vh - 460px);
}
</style>
