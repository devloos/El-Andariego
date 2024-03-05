<script setup>
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { useStorage } from '@vueuse/core';

const { locale } = useI18n({ useScope: 'global' });
const localePreference = useStorage('locale', 'en');
const isEsLocale = ref(localePreference.value === 'es');

function setLocale(value) {
  isEsLocale.value = value === 'es';
  locale.value = value;
  localePreference.value = value;
}
</script>

<template>
  <div class="flex items-center justify-center">
    <button class="group flex items-center gap-2" type="button" @click="setLocale('es')">
      <img
        src="/mexico.png"
        class="h-7 w-7 rounded-full shadow-md"
        width="256"
        height="256"
      />
      <span
        class="underline-offset-2 group-hover:underline"
        :class="{ 'font-semibold text-secondary': isEsLocale }"
        >Español</span
      >
    </button>
    <div class="divider divider-horizontal" />
    <button class="group flex items-center gap-2" type="button" @click="setLocale('en')">
      <img
        src="/usa.png"
        class="h-7 w-7 rounded-full shadow-md"
        width="256"
        height="256"
      />
      <span
        class="underline-offset-2 group-hover:underline"
        :class="{ 'font-semibold text-secondary': !isEsLocale }"
      >
        English
      </span>
    </button>
  </div>
</template>
