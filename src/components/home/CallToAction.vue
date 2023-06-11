<script setup>
import { useToast } from '@/composables/toast.js';
import { useAxios } from '@/composables/axios.js';
import { useI18n } from 'vue-i18n';
import { ref } from 'vue';
import { copyPhone } from '@/assets/utility';

const { t } = useI18n({ useScope: 'global' });
const email = ref('');

async function signup() {
  try {
    if (!email.value) {
      throw Error();
    }

    await useAxios({
      url: '/api/sendgrid/subscribe',
      method: 'POST',
      data: {
        email: email.value,
      },
    });

    email.value = '';
    useToast('Successfully subscribed to El Andariego', {
      type: 'success',
    });
  } catch (err) {
    useToast('Error submitting sign up.', { type: 'error' });
  }
}
</script>

<template>
  <div class="flex justify-center px-2">
    <div
      class="cta flex flex-col items-center justify-between gap-8 rounded p-10 px-3 text-center shadow-lg sm:flex-row md:max-w-3xl md:px-6 lg:px-10 xl:max-w-4xl"
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
          <p
            class="cursor-pointer transition-all hover:font-semibold"
            @click.prevent="copyPhone"
          >
            (949) 806-0123
          </p>
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
        <form class="flex items-center justify-center" @submit.prevent="signup">
          <input
            v-model="email"
            type="email"
            :placeholder="t('form.email')"
            class="appearance-none rounded-l border border-r-0 border-gray-300 p-2 text-gray-900 shadow-sm"
            required
          />
          <button
            class="rounded-r bg-minor px-4 py-[8.2px] text-white hover:bg-minor-light"
          >
            {{ t('form.sign_up') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta {
  background: rgb(118, 7, 10);
  background: linear-gradient(
    332deg,
    rgba(118, 7, 10, 1) 0%,
    rgba(212, 182, 182, 1) 0%,
    rgba(242, 238, 237, 1) 30%,
    rgba(246, 245, 244, 1) 40%,
    rgba(247, 247, 246, 1) 45%,
    rgba(248, 248, 247, 1) 50%,
    rgba(246, 247, 245, 1) 55%,
    rgba(245, 246, 244, 1) 60%,
    rgba(242, 244, 242, 1) 70%,
    rgba(195, 208, 199, 1) 100%,
    rgba(26, 83, 46, 1) 100%
  );
}
</style>
