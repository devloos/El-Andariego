<script setup>
import SmartImg from '@/components/smart/SmartImg.vue';
import { ref, onMounted } from 'vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const post = ref(null);

onMounted(async () => {
  try {
    const response = await useAxios({
      url: `/api/blog/${props.id}`,
    });

    post.value = response.data[0];
    post.value.date = new Date(post.value.date).toLocaleString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch (e) {
    useToast('Failed to fetch post details.', { type: 'error' });
  }
});
</script>

<template>
  <div v-if="post" class="container flex flex-col items-center px-3">
    <h2 class="my-5 text-center text-2xl font-bold text-main">
      {{ post.title }}
    </h2>
    <div>
      <div class="mb-3 flex gap-2 text-sm text-gray-500">
        <p>{{ post.type }}</p>
        &middot;
        <p>{{ post.date }}</p>
      </div>
      <SmartImg :src="post.image" />
    </div>
    <p class="my-5 max-w-2xl text-center lg:text-xl">
      {{ post.description }}
    </p>
  </div>
</template>
