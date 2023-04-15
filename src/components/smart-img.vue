<template>
  <img :src="smartSrc" :class="class" :style="style" :width="width" :alt="alt" />
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: null,
    },
    class: {
      type: String,
      default: 'img-fluid',
    },
    style: {
      type: Object,
      default: {},
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
      return new URL('/andariego' + this.src, 'https://ik.imagekit.io').href;
    },
  },
};
</script>
