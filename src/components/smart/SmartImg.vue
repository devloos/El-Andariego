<script setup>
import { computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});

const srcset = computed(() => {
  return new URL(props.src, 'https://ik.imagekit.io').href;
});
</script>

<template>
  <img :src="srcset" :alt="alt" />
</template>
