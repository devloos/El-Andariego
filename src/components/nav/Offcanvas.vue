<script setup>
import { copyPhone } from '@/assets/js/utility';
import { useI18n } from 'vue-i18n';
import SmartLinks from '@/components/smart/SmartLinks.vue';

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <div
    class="fixed bottom-0 left-0 top-[72px] z-50 h-screen w-screen overflow-scroll bg-white/[.9] backdrop-blur-sm"
  >
    <div
      class="mt-12 flex flex-col items-center gap-9 text-center text-3xl font-semibold"
    >
      <SmartLinks />
      <div class="my-3 flex justify-center gap-4">
        <a href="https://www.facebook.com/profile.php?id=100082710796984" target="_blank">
          <i class="fa-brands fa-facebook fa-sm"></i>
        </a>
        <a href="https://instagram.com/el_andariegotruck" target="_blank">
          <i class="fa-brands fa-instagram fa-sm"></i>
        </a>
        <a href="https://g.page/r/CY53oo_JlDb8EAI/review" target="_blank">
          <i class="fa-brands fa-google fa-xs"></i>
        </a>
      </div>
      <button
        class="rounded-md bg-primary px-6 py-3 text-xl text-gray-50 transition-all duration-300 hover:bg-primary-400"
        type="button"
        @click="copyPhone"
      >
        {{ t('link.call') }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  transition: all 150ms linear;
}

a:hover {
  color: #71706a;
}
</style>
