<script setup>
import Offcanvas from '@/components/nav/Offcanvas.vue';
import Navbar from '@/components/nav/Navbar.vue';
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const showOffCanvas = ref(false);
const route = useRoute();

function onResize() {
  if (window.innerWidth > 800) {
    showOffCanvas.value = false;
  }
}

watch(route, () => {
  showOffCanvas.value = false;
});

watch(showOffCanvas, (value) => {
  document.body.style.overflow = value ? 'hidden' : 'visible';
});

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
</script>
<template>
  <Navbar
    :show-off-canvas="showOffCanvas"
    @toggle-offcanvas="showOffCanvas = !showOffCanvas"
  />
  <transition name="fade">
    <Offcanvas v-if="showOffCanvas" />
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
