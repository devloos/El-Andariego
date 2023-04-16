<template>
  <img :src="smartSrc" :class="classes" :style="style" :width="width" :alt="alt" />
</template>
<script>
import blankPixel from '@/utility/place-holder';

export default {
  props: {
    src: {
      type: String,
      default: blankPixel,
    },
    classes: {
      type: String,
      default: 'img-fluid',
    },
    style: {
      type: Object,
      default: new Object(),
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
  },
  computed: {
    smartSrc() {
      if (this.src) {
        return new URL('/andariego' + this.src, 'https://ik.imagekit.io').href;
      }
      return blankPixel;
    },
  },
};
</script>
