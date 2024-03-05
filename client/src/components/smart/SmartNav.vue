<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useSmartLinks } from '@/composables/smart-links';
import { useWindowScroll, useWindowSize } from '@vueuse/core';
import SmartTransition from '@/components/smart/SmartTransition.vue';

const { t } = useI18n({ useScope: 'global' });
const navLinks = useSmartLinks();

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
    <div
      class="invisible hidden text-lg font-semibold lg:visible lg:flex lg:content-center lg:items-center lg:gap-8"
    >
      <RouterLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.to"
        class="hover:text-primary"
      >
        <span :class="{ 'text-primary underline underline-offset-2': link.isActive }">
          {{ link.name }}
        </span>
      </RouterLink>
      <a href="tel:9498060123" class="btn btn-primary">
        {{ t('link.call') }}
      </a>
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
      <SmartTransition name="slide-from-right">
        <div
          v-if="showOffCanvas"
          class="fixed bottom-0 left-0 top-[60px] z-40 h-screen w-screen overflow-scroll bg-primary-50"
        >
          <div
            class="mt-12 flex flex-col items-center gap-9 text-center text-3xl font-semibold"
          >
            <RouterLink
              v-for="link in navLinks"
              :key="link.name"
              :to="link.to"
              class="hover:text-primary"
            >
              <span
                :class="{ 'text-primary underline underline-offset-2': link.isActive }"
              >
                {{ link.name }}
              </span>
            </RouterLink>
            <div class="my-3 flex justify-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100082710796984"
                target="_blank"
              >
                <i class="fa-brands fa-facebook fa-sm"></i>
              </a>
              <a href="https://instagram.com/el_andariegotruck" target="_blank">
                <i class="fa-brands fa-instagram fa-sm"></i>
              </a>
              <a href="https://g.page/r/CY53oo_JlDb8EAI/review" target="_blank">
                <i class="fa-brands fa-google fa-xs"></i>
              </a>
            </div>
            <a href="tel:9498060123" class="btn btn-primary btn-lg">
              {{ t('link.call') }}
            </a>
          </div>
        </div>
      </SmartTransition>
    </Teleport>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/hamburgers.scss';

a {
  transition: all 150ms linear;
}

a:hover {
  color: #71706a;
}
</style>
