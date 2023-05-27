<script setup>
import { useHead } from '@vueuse/head';
import SmartImg from '@/components/smart/SmartImg.vue';
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { useUtility } from '@/composables/utility.js';
import Loading from '@/components/Loading.vue';

useHead({
  title: 'Blog | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Anything new in the life of El Andariego',
    },
  ],
});

const posts = ref([]);
const isLoading = ref(true);

const { mongoDateToString } = useUtility();

onMounted(async () => {
  try {
    const response = await useAxios({
      url: '/api/blog',
    });

    posts.value = response.data;
    posts.value.sort((a, b) => new Date(b.date) - new Date(a.date));
    mongoDateToString(posts.value);
  } catch (e) {
    useToast('Failed to fetch posts.', { type: 'error' });
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <Loading v-if="isLoading" />
  <div
    v-else
    class="container mt-6 grid grid-cols-1 items-center gap-10 px-3 lg:mt-10 lg:grid-cols-2 lg:gap-8 lg:px-12"
  >
    <div v-for="(post, i) in posts" :key="post._id">
      <RouterLink
        :to="`/blog/${post._id}`"
        class="inline-block cursor-pointer hover:opacity-75"
      >
        <h1 class="text-xl font-semibold hover:text-accent-dark lg:text-2xl">
          {{ post.title }}
        </h1>
      </RouterLink>
      <RouterLink :to="`/blog/${post._id}`" class="cursor-pointer hover:opacity-75">
        <SmartImg :src="post.image" alt="post" />
      </RouterLink>
      <div class="flex flex-col items-start" :class="{ 'order-lg-1': i % 2 === 0 }">
        <div class="mt-3 flex gap-2">
          <p>{{ post.type }}</p>
          &middot;
          <p>{{ post.date }}</p>
        </div>
        <RouterLink :to="`/blog/${post._id}`" class="cursor-pointer hover:opacity-75">
          <p class="text-main underline hover:text-main-light">Read More</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
