<script setup>
import { useHead } from '@unhead/vue';
import { ref } from 'vue';
import { useSmartFetch } from '@/composables/smart-fetch';
import { useToast } from '@/composables/toast';
import { useI18n } from 'vue-i18n';
import SmartImg from '@/components/smart/SmartImg.vue';
import SmartInput from '@/components/smart/SmartInput.vue';
import { inject } from 'vue';

useHead({
  title: 'Contact | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Contact El Andariego',
    },
  ],
});

const { t } = useI18n({ useScope: 'global' });
const form = ref(null);
const startOverlay = inject('startOverlay');
const stopOverlay = inject('stopOverlay');

const name = ref('');
const email = ref('');
const phone = ref('');
const description = ref('');
const interestedIn = ref('');

async function formSubmitted() {
  try {
    startOverlay();
    const response = await useSmartFetch({
      url: '/api/sendgrid/send-email',
      method: 'POST',
      data: {
        name: name.value,
        email: email.value,
        phone: phone.value,
        description: description.value,
        interestedIn: interestedIn.value,
      },
    });

    if (response.success === true) {
      useToast('You will be contacted shortly thank you.');
    }
  } catch (err) {
    useToast('Failed to send information try again.', {
      type: 'error',
    });
  } finally {
    form.value.reset();
    stopOverlay();
  }
}
</script>

<template>
  <div class="container">
    <h4 class="mb-8 mt-4 text-center text-xl font-bold text-primary">
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
        ref="form"
        class="grid w-full max-w-lg grow grid-cols-1 gap-4 px-2"
        @submit.prevent="formSubmitted"
      >
        <SmartInput v-model="name" :label="t('form.name')" type="text" />
        <SmartInput v-model="email" :label="t('form.email')" type="email" />
        <SmartInput v-model="phone" :label="t('form.phone_number')" type="tel" />

        <div class="form-control">
          <label class="label">
            <span class="label-text">
              {{ t('form.message') }}
            </span>
          </label>
          <textarea
            v-model="description"
            class="textarea textarea-bordered"
            type="text"
            :placeholder="t('form.descriptive_message')"
            required
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">
              {{ t('form.interested_in') }}
            </span>
          </label>
          <select v-model="interestedIn" class="select select-bordered w-full" required>
            <option disabled value="">{{ t('form.select.selection') }}</option>
            <option>{{ t('form.select.order') }}</option>
            <option>Catering</option>
            <option>{{ t('form.select.job') }}</option>
            <option>{{ t('form.select.other') }}</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary btn-block">
          {{ t('form.submit') }}
        </button>
      </form>
    </div>
  </div>
</template>
