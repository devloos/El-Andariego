<template>
  <div>news</div>
</template>

<script>
import { useHead } from '@vueuse/head';
export default {
  name: 'news-index',
  setup() {
    useHead({
      title: 'News | El Andariego',
      meta: [
        {
          name: 'description',
          content: 'Anything new in the life of El Andariego',
        },
      ],
    });
  },
};
</script>

<style></style>
