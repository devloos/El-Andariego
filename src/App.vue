<script setup>
import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import { useStorage } from '@vueuse/core';
import SmartNav from '@/components/smart/SmartNav.vue';
import SmartFooter from '@/components/smart/SmartFooter.vue';
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import SmartTransition from '@/components/smart/SmartTransition.vue';

useHead({
  title: 'El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Authentic Mexican Food Truck',
    },
  ],
});

const { locale } = useI18n({ useScope: 'global' });
const localePreference = useStorage('locale', 'en');
locale.value = localePreference.value;
</script>

<template>
  <LoadingOverlay />
  <SmartNav />
  <RouterView v-slot="{ Component }" class="router-view">
    <SmartTransition name="fade" mode="out-in">
      <component :is="Component" />
    </SmartTransition>
  </RouterView>
  <SmartFooter />
</template>

<style lang="scss" scoped>
.router-view {
  min-height: calc(100vh - 460px);
}
</style>
