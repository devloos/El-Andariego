<script setup>
import { useHead } from '@unhead/vue';
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useSmartFetch } from '@/composables/smart-fetch.js';
import { useToast } from '@/composables/toast.js';
import { formatMongoDate } from '@/assets/js/utility.js';
import { useI18n } from 'vue-i18n';
import SmartImg from '@/components/smart/SmartImg.vue';
import BlogSkeleton from '@/components/skeletons/BlogSkeleton.vue';

useHead({
  title: 'Blog | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Anything new in the life of El Andariego',
    },
  ],
});

const { t } = useI18n({ useScope: 'global' });

const posts = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await useSmartFetch({
      url: '/api/posts',
    });

    posts.value = response.data;
    posts.value.sort((a, b) => new Date(b.date) - new Date(a.date));
    posts.value.forEach((post) => {
      post.date = formatMongoDate(post.date);
    });
  } catch (e) {
    useToast('Failed to fetch posts.', { type: 'error' });
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <BlogSkeleton v-if="isLoading" />
  <div
    v-else
    class="container mt-6 grid grid-cols-1 items-center gap-10 px-3 lg:mt-10 lg:grid-cols-2 lg:gap-8 lg:px-12"
  >
    <div v-for="(post, i) in posts" :key="post._id">
      <RouterLink :to="`/blog/${post._id}`" class="inline-block cursor-pointer">
        <h1 class="text-xl font-semibold lg:text-2xl">
          {{ post.title }}
        </h1>
      </RouterLink>
      <RouterLink :to="`/blog/${post._id}`" class="cursor-pointer hover:opacity-75">
        <SmartImg
          :src="post.images[0].url"
          :alt="post.images[0].title"
          :width="post.images[0].width"
          :height="post.images[0].height"
        />
      </RouterLink>
      <div class="flex flex-col items-start" :class="{ 'order-lg-1': i % 2 === 0 }">
        <div class="mt-3 flex gap-2">
          <p>{{ post.type }}</p>
          &middot;
          <p>{{ post.date }}</p>
        </div>
        <RouterLink :to="`/blog/${post._id}`" class="cursor-pointer">
          <p class="text-primary underline hover:text-primary-600">
            {{ t('blog.read_more') }}
          </p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
