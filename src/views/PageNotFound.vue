<script setup>
import { useHead } from '@unhead/vue';
import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });

useHead({
  title: 'Page Not Found | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Page Not Found El Andariego',
    },
  ],
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3 p-5 text-center text-xl">
    <h1 class="text-2xl font-bold">{{ t('error.header') }}</h1>
    <p>{{ t('error.message') }}</p>
    <RouterLink to="/" class="btn btn-primary">
      {{ t('error.homepage') }}
    </RouterLink>
  </div>
</template>
