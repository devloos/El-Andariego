<script setup>
import { useHead } from '@vueuse/head';
import SmartImg from '@/components/smart/SmartImg.vue';
import { ref } from 'vue';
import { useAxios } from '@/composables/axios';
import { useToast } from '@/composables/toast';

useHead({
  title: 'Contact | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Contact El Andariego',
    },
  ],
});

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const phone = ref('');
const description = ref('');
const eventType = ref('');

function resetForm() {
  firstName.value = '';
  lastName.value = '';
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
        first_name: firstName.value,
        last_name: lastName.value,
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
      />
      <form
        class="grid w-full max-w-lg grow grid-cols-1 gap-4 px-2"
        @submit.prevent="formSubmitted"
      >
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">First Name</label>
          <input
            v-model="firstName"
            class="rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            type="text"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">Last Name</label>
          <input
            v-model="lastName"
            class="rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            type="text"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">Email</label>
          <input
            v-model="email"
            class="rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            type="email"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">Phone #</label>
          <input
            v-model="phone"
            class="rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            type="tel"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">Message</label>
          <textarea
            v-model="description"
            class="h-20 rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            type="text"
            placeholder="Descriptive Message"
            required
          />
        </div>
        <div class="flex flex-col">
          <label class="text-sm font-medium leading-6 text-gray-900">Interested In</label>
          <select
            v-model="eventType"
            class="rounded-md border border-gray-300 bg-gray-50 px-2 py-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option disabled value="">Please Select</option>
            <option>Order</option>
            <option>Catering</option>
            <option>Job Opportunity</option>
            <option>Other</option>
          </select>
        </div>
        <button
          type="submit"
          class="rounded bg-main px-4 py-2 text-white hover:bg-main-light"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
