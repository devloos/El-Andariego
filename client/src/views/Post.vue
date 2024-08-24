<script setup>
import { ref, onMounted } from 'vue';
import { useSmartFetch } from '@/composables/smart-fetch.js';
import { useToast } from '@/composables/toast.js';
import { formatMongoDate } from '@/assets/js/utility';
import SmartImg from '@/components/smart/SmartImg.vue';
import DetailSkeleton from '@/components/skeletons/DetailSkeleton.vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const post = ref(null);
const isLoading = ref(true);
const { locale } = useI18n({ useScope: 'global' });

onMounted(async () => {
  try {
    const response = await useSmartFetch({
      url: `/api/posts/${props.id}`,
    });

    post.value = response.data;
    post.value.date = formatMongoDate(post.value.date);
  } catch (e) {
    useToast('Failed to fetch post details.', { type: 'error' });
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <DetailSkeleton v-if="isLoading" />
  <div v-else class="container flex flex-col items-center px-3">
    <h2 class="my-5 text-center text-2xl font-bold text-primary">
      {{ post.title }}
    </h2>
    <div>
      <div class="mb-3 flex gap-2 text-sm text-gray-500">
        <p>{{ post.type }}</p>
        &middot;
        <p>{{ post.date }}</p>
      </div>
      <SmartImg
        :src="post.images[0].url"
        :alt="post.images[0].title"
        :width="post.images[0].width"
        :height="post.images[0].height"
      />
    </div>
    <p class="my-5 max-w-2xl text-center lg:text-xl">
      {{ post.description[locale] }}
    </p>
  </div>
</template>
