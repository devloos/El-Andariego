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
  <RouterView class="router-view" />
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
</style>
