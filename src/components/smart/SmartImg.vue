<script setup>
import { computed } from 'vue';

const placeholder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    required: true,
  },
  height: {
    type: [Number, String],
    required: true,
  },
  isTransparent: {
    type: Boolean,
    default: false,
  },
});

const srcset = computed(() => {
  return new URL(props.src, 'https://ik.imagekit.io').href;
});
</script>

<template>
  <img
    loading="lazy"
    :src="placeholder"
    :srcset="srcset"
    :width="width"
    :height="height"
    :style="{ 'background-color': isTransparent ? 'transparent' : 'lightgray' }"
  />
</template>
