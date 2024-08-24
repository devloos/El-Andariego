<script setup>
import SmartImg from '@/components/smart/SmartImg.vue';
import { useSmartFetch } from '@/composables/smart-fetch.js';
import { useToast } from '@/composables/toast.js';
import { ref, onMounted } from 'vue';

const TOP_CATEGORIES = [
  'Platillos',
  'Burritos',
  'Tacos',
  'Tortas',
  'Sopes',
  'Quesadillas',
];

const categories = ref([]);

onMounted(async () => {
  try {
    const response = await useSmartFetch({
      url: '/api/categories',
      notifyOnFailure: true,
    });

    if (response.success === false) {
      return;
    }

    categories.value = response.data.filter((category) =>
      TOP_CATEGORIES.includes(category.name),
    );

    categories.value.sort((a, b) => a.priority - b.priority);
  } catch (_) {
    useToast('Failed to fetch categories.', {
      type: 'error',
    });
  }
});
</script>

<template>
  <div class="mx-auto flex max-w-7xl gap-3 overflow-x-scroll rounded-t p-3">
    <RouterLink
      v-for="category in categories"
      :key="category._id"
      :to="`/menu/#${category._id}`"
      class="cursor-pointer rounded shadow transition-all hover:scale-[1.01]"
    >
      <SmartImg
        :src="category.images[0].url"
        class="max-w-xs rounded-t sm:max-w-sm"
        :alt="category.images[0].title"
        :width="category.images[0].width"
        :height="category.images[0].height"
      />
      <p class="rounded-b border-t p-5 text-center font-bold">{{ category.name }}</p>
    </RouterLink>
  </div>
</template>
