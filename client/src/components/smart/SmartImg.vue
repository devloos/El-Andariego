<script setup>
import { getImageKitUrl } from '@/assets/js/utility';
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
  type: {
    type: String,
    default: 'image',
  },
  loading: {
    type: String,
    default: 'lazy',
  },
});

// standard sizes taken from https://github.com/HCESrl/responsive-image-sizes/blob/master/src/index.js
const STANDARD_SCREEN_WIDTHS = [
  2880,
  2560, // 2K iMac
  2048, // iPad Landscape
  1920,
  1680,
  1536,
  1440,
  1366,
  1242, // iphone 13+ 414 * 3 dpr
  1024,
  828,
  720,
  640,
  400,
  200,
  100,
];

function calculateWidths(imgWidth) {
  // only include screen widths smaller than image width
  const widths = STANDARD_SCREEN_WIDTHS.filter((width) => width < imgWidth);
  widths.push(imgWidth);
  return widths.sort((a, b) => (a > b ? -1 : 1));
}

const srcset = computed(() => {
  const widths = calculateWidths(props.width);

  const srcsetHolder = [];
  widths.forEach((width) => {
    const url = new URL(props.src, 'https://ik.imagekit.io');
    const params = new URLSearchParams(url.search);
    params.set('tr', `w-${width}`);
    url.search = params.toString();
    srcsetHolder.push(`${url.toString()} ${width}w`);
  });

  return srcsetHolder.join(', ');
});
</script>

<template>
  <img
    v-if="type === 'image'"
    :loading="loading"
    :src="placeholder"
    :srcset="srcset"
    :width="width"
    :height="height"
    :style="{ 'background-color': isTransparent ? 'transparent' : 'lightgray' }"
    :alt="alt"
    sizes="auto"
  />
  <video
    v-else-if="type === 'video'"
    :src="getImageKitUrl(src)"
    :width="width"
    :height="height"
  />
</template>
