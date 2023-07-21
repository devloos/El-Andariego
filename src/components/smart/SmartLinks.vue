<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <RouterLink to="/" active-class="text-primary underline underline-offset-2">{{
    t('link.home')
  }}</RouterLink>
  <RouterLink
    to="/menu/#Platillos"
    :class="{ 'text-primary underline underline-offset-2': $route.name === 'Menu' }"
  >
    {{ t('link.menu') }}
  </RouterLink>
  <RouterLink to="/blog" active-class="text-primary underline underline-offset-2">
    Blog
  </RouterLink>
  <RouterLink to="/contact" active-class="text-primary underline underline-offset-2">
    {{ t('link.contact') }}
  </RouterLink>
</template>
