<script setup>
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useSmartLinks } from '@/composables/smart-links';
import { useWindowScroll, useWindowSize } from '@vueuse/core';
import SmartTransition from '@/components/smart/SmartTransition.vue';
import LocaleSelector from '@/components/LocaleSelector.vue';
import SocialLinks from '@/components/SocialLinks.vue';

const { t } = useI18n({ useScope: 'global' });
const navLinks = useSmartLinks();

const showNavDrawer = ref(false);
const route = useRoute();
const { width: windowWidth } = useWindowSize();
const { y: scrollY } = useWindowScroll();

watch(windowWidth, () => {
  if (windowWidth.value >= 1024) {
    showNavDrawer.value = false;
  }
});

watch(route, () => {
  showNavDrawer.value = false;
});

watch(showNavDrawer, (value) => {
  document.body.style.overflow = value ? 'hidden' : 'visible';
});
</script>
<template>
  <div
    class="sticky inset-x-0 top-0 z-40 mx-auto flex h-[60px] content-center items-center justify-between bg-primary-50 px-4 transition-all lg:h-[68px] lg:px-8 xl:px-12"
    :class="{ 'shadow-md': scrollY > 0 }"
  >
    <RouterLink class="lg:ml-7" to="/">
      <img
        src="/andariego-nav.png"
        alt="logo"
        class="h-[68px] w-[68px] lg:h-[78px] lg:w-[76px]"
      />
    </RouterLink>
    <ul
      class="menu menu-horizontal invisible hidden text-lg font-semibold uppercase lg:visible lg:inline-flex lg:gap-2"
    >
      <li v-for="link in navLinks" :key="link.name">
        <RouterLink :to="link.to">
          {{ link.name }}
        </RouterLink>
      </li>
      <li>
        <a href="tel:9498060123">
          {{ t('link.call') }}
        </a>
      </li>
    </ul>
    <button
      class="hamburger hamburger--squeeze lg:!hidden"
      :class="{ 'is-active': showNavDrawer }"
      type="button"
      @click="showNavDrawer = !showNavDrawer"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <Teleport to="body">
      <SmartTransition name="slide-from-right">
        <div
          v-if="showNavDrawer"
          class="fixed bottom-0 left-0 top-[60px] z-40 h-screen w-screen overflow-scroll bg-primary-50"
        >
          <div class="mt-12 flex flex-col items-center gap-4 font-semibold">
            <RouterLink
              v-for="link in navLinks"
              :key="link.name"
              class="btn btn-wide text-xl"
              :to="link.to"
            >
              {{ link.name }}
            </RouterLink>

            <a class="btn btn-wide text-xl" href="tel:9498060123">
              {{ t('link.call') }}
            </a>

            <LocaleSelector class="py-5 text-xl" />
            <SocialLinks class="flex justify-center gap-6 py-2 text-3xl" />
          </div>
        </div>
      </SmartTransition>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/hamburgers.scss';
</style>
