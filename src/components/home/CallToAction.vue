<script setup>
import { useUtility } from '@/composables/utility.js';
import { useToast } from '@/composables/toast.js';
import { useAxios } from '@/composables/axios.js';
import { ref } from 'vue';

const { copyPhone } = useUtility();
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
      class="cta flex max-w-5xl grow flex-col items-center justify-between rounded px-4 pb-4 pt-10 text-center font-semibold shadow-lg md:flex-row md:px-6 lg:px-10 lg:py-14"
    >
      <div class="max-w-xs lg:max-w-sm">
        <h4 class="mb-4 text-2xl font-bold">Connect with Us and Stay Informed!</h4>
        <p class="mb-6">
          Skip the wait and give us a call during business hours. Want to get notified
          about promotions and events sign up today!
        </p>
      </div>
      <div class="max-w-xs grow">
        <form class="mb-12 flex items-center justify-center" @submit.prevent="signup">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="grow rounded-l border border-gray-500 bg-inherit px-2 py-2"
            required
          />
          <button
            class="rounded-r border border-minor bg-minor px-6 py-2 text-white hover:bg-minor-light"
          >
            Sign up
          </button>
        </form>
        <button
          class="rounded bg-main px-12 py-4 text-white hover:bg-main-light"
          type="submit"
          @click="copyPhone"
        >
          Call Now
        </button>
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
