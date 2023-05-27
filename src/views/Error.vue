<script setup>
import { useHead } from '@vueuse/head';
import { RouterLink } from 'vue-router';

useHead({
  title: 'Page Not Found | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Page Not Found El Andariego',
    },
  ],
});
</script>

<template>
  <div class="flex flex-col items-center gap-3 py-5 text-center text-xl">
    <h1 class="text-2xl font-bold">SORRY, Page Not Found!</h1>
    <p>If you typed the URL directly, please make sure the spelling is correct.</p>
    <RouterLink
      to="/"
      class="mt-5 cursor-pointer rounded bg-main px-4 py-2 text-white hover:bg-main-light"
    >
      Back To Homepage
    </RouterLink>
  </div>
</template>
