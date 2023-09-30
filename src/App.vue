<script setup>
import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import { useStorage } from '@vueuse/core';
import SmartNav from '@/components/smart/SmartNav.vue';
import SmartFooter from '@/components/smart/SmartFooter.vue';

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
  <SmartNav />
  <RouterView v-slot="{ Component }" class="router-view">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <SmartFooter />
</template>

<style lang="scss" scoped>
.router-view {
  min-height: calc(100vh - 460px);
}

.fade {
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-enter-active,
  &-leave-active {
    transition: all 200ms ease-in-out;
  }
}
</style>
