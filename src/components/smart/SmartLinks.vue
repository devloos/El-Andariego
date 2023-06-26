<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <RouterLink to="/" active-class="text-primary-500">{{ t('link.home') }}</RouterLink>
  <RouterLink to="/menu" :class="{ 'text-primary-500': $route.name === 'Menu' }">
    {{ t('link.menu') }}
  </RouterLink>
  <RouterLink to="/blog" active-class="text-primary-500">Blog</RouterLink>
  <RouterLink to="/contact" active-class="text-primary-500">
    {{ t('link.contact') }}
  </RouterLink>
</template>
