<script setup>
import { useHead } from '@vueuse/head';
import { ref } from 'vue';
import { useAxios } from '@/composables/axios';
import { useToast } from '@/composables/toast';
import { useI18n } from 'vue-i18n';
import SmartImg from '@/components/smart/SmartImg.vue';

const { t } = useI18n({ useScope: 'global' });

useHead({
  title: 'Contact | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Contact El Andariego',
    },
  ],
});

const name = ref('');
const email = ref('');
const phone = ref('');
const description = ref('');
const eventType = ref('');

function resetForm() {
  name.value = '';
  email.value = '';
  phone.value = '';
  description.value = '';
  eventType.value = '';
}

async function formSubmitted() {
  try {
    await useAxios({
      url: '/api/sendgrid/save',
      method: 'POST',
      data: {
        name: name.value,
        email: email.value,
        phone: phone.value,
        description: description.value,
        event_type: eventType.value,
      },
    });

    useToast('You will be contacted shortly thank you.');
  } catch (err) {
    useToast('Failed to send information try again.', {
      type: 'error',
    });
  } finally {
    resetForm();
  }
}
</script>

<template>
  <div class="container">
    <h4 class="mb-8 mt-4 text-center text-xl font-bold text-main">
      Contact El Andariego
    </h4>
    <div
      class="flex flex-col items-center justify-center gap-4 px-2 xl:flex-row xl:gap-8"
    >
      <SmartImg
        src="/andariego/contact/card.jpg"
        class="h-full w-full max-w-3xl"
        alt="Contact Card"
        width="1900"
        height="1080"
      />
      <form
        class="grid w-full max-w-lg grow grid-cols-1 gap-4 px-2"
        @submit.prevent="formSubmitted"
      >
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">
            {{ t('form.name') }}
          </label>
          <input
            v-model="name"
            class="rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            type="text"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">
            {{ t('form.email') }}
          </label>
          <input
            v-model="email"
            class="rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            type="email"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">
            {{ t('form.phone_number') }}
          </label>
          <input
            v-model="phone"
            class="rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            type="tel"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">
            {{ t('form.message') }}
          </label>
          <textarea
            v-model="description"
            class="h-20 rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            type="text"
            :placeholder="t('form.descriptive_message')"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">
            {{ t('form.interested_in') }}
          </label>
          <select
            v-model="eventType"
            class="rounded-md border border-gray-300 bg-gray-50 px-2 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option disabled value="">{{ t('form.select.selection') }}</option>
            <option>{{ t('form.select.order') }}</option>
            <option>Catering</option>
            <option>{{ t('form.select.job') }}</option>
            <option>{{ t('form.select.other') }}</option>
          </select>
        </div>
        <button
          type="submit"
          class="rounded bg-main px-4 py-2 text-white hover:bg-main-light"
        >
          {{ t('form.submit') }}
        </button>
      </form>
    </div>
  </div>
</template>
