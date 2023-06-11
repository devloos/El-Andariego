<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <RouterLink to="/">{{ t('link.home') }}</RouterLink>
  <RouterLink to="/menu">{{ t('link.menu') }}</RouterLink>
  <RouterLink to="/blog">Blog</RouterLink>
  <RouterLink to="/contact">{{ t('link.contact') }}</RouterLink>
</template>
