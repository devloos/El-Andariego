<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { copyPhone } from '@/assets/utility';
import { useI18n } from 'vue-i18n';
import SmartLinks from '@/components/smart/SmartLinks.vue';
import Offcanvas from '@/components/nav/Offcanvas.vue';
import { useWindowSize } from '@vueuse/core';

const { t } = useI18n({ useScope: 'global' });

const showOffCanvas = ref(false);
const route = useRoute();
const { width: windowWidth } = useWindowSize();

watch(windowWidth, () => {
  if (windowWidth.value >= 1024) {
    showOffCanvas.value = false;
  }
});

watch(route, () => {
  showOffCanvas.value = false;
});

watch(showOffCanvas, (value) => {
  document.body.style.overflow = value ? 'hidden' : 'visible';
});
</script>
<template>
  <div
    class="sticky inset-x-0 top-0 z-50 mx-auto flex h-[72px] content-center items-center justify-between bg-white/[.9] px-4 backdrop-blur-sm lg:h-20 lg:px-8 xl:px-12"
  >
    <RouterLink class="lg:ml-7" to="/">
      <img src="/andariego-nav.png" alt="logo" width="92" height="92" />
    </RouterLink>
    <div
      class="invisible hidden text-lg font-semibold lg:visible lg:flex lg:content-center lg:items-center lg:gap-8"
    >
      <SmartLinks />
      <button
        class="rounded-md bg-main px-6 py-3 text-base text-gray-50 transition-all duration-300 hover:bg-main-light"
        type="button"
        @click="copyPhone"
      >
        {{ t('link.call') }}
      </button>
    </div>
    <button
      class="hamburger hamburger--squeeze"
      :class="{ 'is-active': showOffCanvas }"
      type="button"
      @click="showOffCanvas = !showOffCanvas"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <Teleport to="body">
      <Transition name="slide-from-right">
        <Offcanvas v-if="showOffCanvas" />
      </Transition>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/hamburgers.scss';

@media (min-width: 1024px) {
  .hamburger {
    display: none;
    visibility: hidden;
  }
}
.slide-from-right {
  &-enter-from {
    translate: 100%;
  }

  &-enter-active {
    transition: all 300ms ease-in-out;
  }

  &-leave-active {
    transition: all 300ms ease-in-out;
  }

  &-leave-to {
    translate: 100%;
  }
}
</style>
