<script>
import offcanvas from '@/views/nav/offcanvas.vue';
import navbar from '@/views/nav/navbar.vue';

export default {
  components: {
    offcanvas,
    navbar,
  },
  data() {
    return {
      showOffCanvas: false,
    };
  },
  watch: {
    $route() {
      this.showOffCanvas = false;
    },
    showOffCanvas: {
      handler(value) {
        document.body.style.overflow = value ? 'hidden' : 'visible';
      },
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth > 800) {
        this.showOffCanvas = false;
      }
    },
  },
};
</script>
<template>
  <navbar
    :show-off-canvas="showOffCanvas"
    @toggle-offcanvas="showOffCanvas = !showOffCanvas"
  />
  <transition name="fade">
    <offcanvas v-if="showOffCanvas" />
  </transition>
</template>

<style lang="scss" scoped>
.fade {
  &-enter-from {
    opacity: 0;
  }

  &-enter-active {
    transition: all 300ms ease-in;
  }

  &-leave-active {
    transition: all 300ms ease-in;
  }

  &-leave-to {
    opacity: 0;
  }
}
</style>
