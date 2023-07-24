<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { copyPhone } from '@/assets/js/utility';
import { useI18n } from 'vue-i18n';
import SmartLinks from '@/components/smart/SmartLinks.vue';
import Offcanvas from '@/components/nav/Offcanvas.vue';
import { useWindowScroll, useWindowSize } from '@vueuse/core';

const { t } = useI18n({ useScope: 'global' });

const showOffCanvas = ref(false);
const route = useRoute();
const { width: windowWidth } = useWindowSize();
const { y: scrollY } = useWindowScroll();

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
    class="sticky inset-x-0 top-0 z-50 mx-auto flex h-[60px] content-center items-center justify-between bg-primary-50/[.9] px-4 backdrop-blur-sm transition-all lg:h-[68px] lg:px-8 xl:px-12"
    :class="{ 'shadow-md': scrollY > 0 }"
  >
    <RouterLink class="lg:ml-7" to="/">
      <img
        src="/andariego-nav.png"
        alt="logo"
        class="h-[68px] w-[68px] lg:h-[78px] lg:w-[76px]"
      />
    </RouterLink>
    <div
      class="invisible hidden text-lg font-semibold lg:visible lg:flex lg:content-center lg:items-center lg:gap-8"
    >
      <SmartLinks />
      <button
        class="rounded-md bg-primary px-4 py-2.5 text-base text-gray-50 transition-all duration-300 hover:bg-primary-400"
        type="button"
        @click="copyPhone"
      >
        {{ t('link.call') }}
      </button>
    </div>
    <button
      class="hamburger hamburger--squeeze lg:!hidden"
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
@import '@/assets/hamburgers.scss';

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
