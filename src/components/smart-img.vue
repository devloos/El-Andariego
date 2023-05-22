<script setup>
import { computed, defineProps } from 'vue';

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

function placeHolder() {
  return new URL(`https://placehold.co/300x300`).href;
}
</script>

<template>
  <img :src="placeHolder" :srcset="srcset" :alt="alt" />
</template>
