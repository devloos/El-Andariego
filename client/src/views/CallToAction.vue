<script setup>
import { useToast } from '@/composables/toast.js';
import { useSmartFetch } from '@/composables/smart-fetch.js';
import { useI18n } from 'vue-i18n';
import { inject, ref } from 'vue';

const { t } = useI18n({ useScope: 'global' });
const email = ref('');
const form = ref(null);
const startOverlay = inject('startOverlay');
const stopOverlay = inject('stopOverlay');

async function signup() {
  try {
    if (!email.value) {
      throw Error('No email field provided.');
    }

    startOverlay();

    const response = await useSmartFetch({
      url: '/api/sendgrid/subscribe',
      method: 'POST',
      data: {
        email: email.value,
      },
    });

    if (response.success === true) {
      useToast('Successfully subscribed to El Andariego', {
        type: 'success',
      });
    }
  } catch (err) {
    useToast('Error subscribing to El Andariego.', { type: 'error' });
  } finally {
    form.value.reset();
    stopOverlay();
  }
}
</script>

<template>
  <div class="flex justify-center px-2">
    <div
      class="mex-gradient flex flex-col items-center justify-between gap-8 rounded p-10 px-3 text-center shadow-lg sm:flex-row md:max-w-3xl md:px-6 lg:px-10 xl:max-w-4xl"
    >
      <div class="text-center sm:w-1/2">
        <div class="mb-4">
          <h3 class="mb-2 text-xl font-bold">{{ t('cta.contact.open_hours') }}</h3>
          <p>{{ t('cta.contact.hours') }}</p>
        </div>
        <div class="mb-4">
          <h3 class="mb-2 text-xl font-bold">{{ t('cta.contact.location') }}</h3>
          <p>31345 Los Rios St, San Juan Capistrano, CA 92675</p>
        </div>
        <div>
          <h3 class="mb-2 text-xl font-bold">{{ t('cta.contact.contact') }}</h3>
          <a
            href="tel:9498060123"
            class="cursor-pointer transition-all hover:font-semibold"
          >
            (949) 806-0123
          </a>
          <p>elandariegomex@gmail.com</p>
        </div>
      </div>
      <div class="sm:w-1/2">
        <h4 class="mb-4 text-2xl font-bold xl:text-3xl">
          {{ t('cta.hook') }}
        </h4>
        <p class="mb-6 xl:text-lg">
          {{ t('cta.info') }}
        </p>
        <form ref="form" class="join" @submit.prevent="signup">
          <input
            v-model="email"
            type="email"
            :placeholder="t('form.email')"
            class="input join-item input-bordered w-full max-w-xs"
            required
          />
          <button class="btn btn-secondary join-item">
            {{ t('form.sign_up') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
