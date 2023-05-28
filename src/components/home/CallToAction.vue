<script setup>
import { useToast } from '@/composables/toast.js';
import { useAxios } from '@/composables/axios.js';
import { ref } from 'vue';

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
      class="cta flex w-full flex-col items-center justify-between rounded px-3 pb-8 pt-10 text-center font-semibold shadow-lg sm:flex-row md:max-w-3xl md:px-6 lg:px-10 lg:py-14 xl:max-w-4xl xl:px-16 xl:py-16"
    >
      <div class="max-w-xs lg:max-w-sm">
        <h4 class="mb-4 text-2xl font-bold xl:text-3xl">
          Connect with Us and Stay Informed!
        </h4>
        <p class="mb-6 xl:text-lg">
          Skip the wait and give us a call during business hours. Want to get notified
          about promotions and events sign up today!
        </p>
      </div>
      <form
        class="flex flex-col items-center justify-center gap-2"
        @submit.prevent="signup"
      >
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="rounded border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          required
        />
        <button class="rounded bg-minor px-4 py-2 text-white hover:bg-minor-light">
          Sign up
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.cta {
  background: rgb(118, 7, 10);
  background: linear-gradient(
    332deg,
    rgba(118, 7, 10, 1) 0%,
    rgba(212, 182, 182, 1) 18%,
    rgba(242, 238, 237, 1) 32%,
    rgba(246, 245, 244, 1) 40%,
    rgba(247, 247, 246, 1) 45%,
    rgba(248, 248, 247, 1) 50%,
    rgba(246, 247, 245, 1) 55%,
    rgba(245, 246, 244, 1) 60%,
    rgba(242, 244, 242, 1) 68%,
    rgba(195, 208, 199, 1) 82%,
    rgba(26, 83, 46, 1) 100%
  );
}
</style>
