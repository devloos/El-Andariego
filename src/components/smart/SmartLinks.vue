<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <RouterLink class="transition-all hover:text-accent-dark" to="/">
    {{ t('link.home') }}
  </RouterLink>
  <RouterLink class="transition-all hover:text-accent-dark" to="/menu">
    {{ t('link.menu') }}
  </RouterLink>
  <RouterLink class="transition-all hover:text-accent-dark" to="/blog">Blog</RouterLink>
  <RouterLink class="transition-all hover:text-accent-dark" to="/contact">
    {{ t('link.contact') }}
  </RouterLink>
</template>
