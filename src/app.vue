<script setup>
import { useHead } from '@vueuse/head';
import AndariegoNav from '@/components/nav/andariego-nav.vue';
import AndariegoFooter from '@/components/andariego-footer.vue';

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
  <andariego-nav />
  <main class="flex flex-col">
    <router-view class="grow" />
    <andariego-footer />
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}
</style>
