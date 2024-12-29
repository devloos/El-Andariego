<script setup>
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import SmartTransition from '@/components/smart/SmartTransition.vue';
import { useStorage } from '@vueuse/core';
import { ref, provide } from 'vue';
import { useI18n } from 'vue-i18n';

const isLoading = ref(false);
provide('startOverlay', () => (isLoading.value = true));
provide('stopOverlay', () => (isLoading.value = false));

const localePreference = useStorage('locale', 'en');
const { locale } = useI18n({ useScope: 'global' });
locale.value = localePreference.value;
</script>

<template>
  <div>
    <LoadingOverlay :loading="isLoading" />
    <div class="pb-5">
      <RouterView v-slot="{ Component }" class="router-view">
        <SmartTransition name="fade" mode="out-in">
          <component :is="Component" />
        </SmartTransition>
      </RouterView>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.router-view {
  min-height: calc(100vh - 460px);
}
</style>
