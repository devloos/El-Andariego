<script setup>
import { useHead } from '@vueuse/head';
import { useI18n } from 'vue-i18n';
import { useStorage } from '@vueuse/core';
import AndariegoNav from '@/components/nav/AndariegoNav.vue';
import AndariegoFooter from '@/components/AndariegoFooter.vue';

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
  <AndariegoNav />
  <RouterView v-slot="{ Component }" class="router-view">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <AndariegoFooter />
</template>

<style>
a {
  transition: all 150ms linear;
}

a:hover {
  color: #1a532e;
}
</style>

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
