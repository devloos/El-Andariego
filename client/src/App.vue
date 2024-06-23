<script setup>
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import SmartTransition from '@/components/smart/SmartTransition.vue';
import { useStorage } from '@vueuse/core';
import { ref, provide, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import PromotionalModal from '@/components/PromotionalModal.vue';

const route = useRoute();

const layout = computed(() => route.meta.layout || 'DefaultLayout');

const isLoading = ref(false);
provide('startOverlay', () => (isLoading.value = true));
provide('stopOverlay', () => (isLoading.value = false));

const localePreference = useStorage('locale', 'en');
const { t, locale } = useI18n({ useScope: 'global' });
locale.value = localePreference.value;

const showPromotionalModal = ref(false);

const defaultSeenPromotionState = () => ({
  value: false,
  expiry: new Date().getDate() + 3,
});

const seenPromotion = useStorage('seen-promotion', defaultSeenPromotionState());

const date = new Date();

if (date.getDate() >= seenPromotion.value.expiry) {
  seenPromotion.value = defaultSeenPromotionState();
}

setTimeout(() => {
  if (!seenPromotion.value.value) {
    showPromotionalModal.value = true;
    seenPromotion.value = {
      value: true,
      expiry: new Date().getDate() + 3,
    };
  }
}, 3500);
</script>

<template>
  <div>
    <LoadingOverlay :loading="isLoading" />
    <PromotionalModal v-if="showPromotionalModal">
      <template #header>
        <h1 class="text-2xl font-bold">{{ t('promotional.header') }}</h1>
      </template>
      <template #body>
        <div class="flex flex-col items-center justify-center gap-8 px-3 pt-6">
          <div class="text-center">
            <h2 class="text-3xl font-bold">{{ t('promotional.hook') }}</h2>
            <p>{{ t('promotional.body') }}</p>
          </div>
          <a
            class="btn btn-primary btn-wide"
            href="https://order.elandariegotruck.com/?cc=first-online-15"
          >
            {{ t('home.order_now') }}
          </a>
        </div>
      </template>
    </PromotionalModal>
    <component :is="layout">
      <RouterView v-slot="{ Component }" class="router-view">
        <SmartTransition name="fade" mode="out-in">
          <component :is="Component" />
        </SmartTransition>
      </RouterView>
    </component>
  </div>
</template>

<style lang="scss" scoped>
.router-view {
  min-height: calc(100vh - 460px);
}
</style>
