<script setup>
import { useHead } from '@vueuse/head';
import SmartImg from '@/components/smart/smart-img.vue';
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { useUtility } from '@/composables/utility.js';

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
  }
});
</script>

<template>
  <div class="my-3 flex flex-col gap-10 px-3 lg:px-12">
    <router-link v-for="(post, i) in posts" :key="post._id" :to="`/blog/${post._id}`">
      <smart-img :src="post.image" alt="post" class="hover:opacity-75" />
      <div class="flex flex-col items-start gap-3" :class="{ 'order-lg-1': i % 2 === 0 }">
        <div class="mt-3 flex gap-2">
          <p>{{ post.type }}</p>
          &middot;
          <p>{{ post.date }}</p>
        </div>
        <h1 class="text-lg font-semibold hover:text-accent-dark">{{ post.title }}</h1>
        <p class="cursor-pointer text-main underline hover:text-main-light">Read More</p>
      </div>
    </router-link>
  </div>
</template>
