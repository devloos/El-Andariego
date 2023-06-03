<script setup>
import SmartImg from '@/components/smart/SmartImg.vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { ref, onMounted } from 'vue';

const categories = ref([]);
const top_categories = [
  'Platillos',
  'Burritos',
  'Tacos',
  'Tortas',
  'Sopes',
  'Quesadillas',
];

onMounted(async () => {
  try {
    const res = await useAxios({
      url: '/api/menu/categories',
    });

    categories.value = res.data.filter((category) =>
      top_categories.includes(category.name)
    );

    categories.value.sort((a, b) => a.priority - b.priority);
  } catch (err) {
    useToast('Failed to fetch categories', {
      type: 'error',
    });
  }
});
</script>

<template>
  <div class="container flex gap-3 overflow-x-scroll rounded-t p-3">
    <div
      v-for="category in categories"
      :key="category.name"
      class="min-h-fit min-w-fit cursor-pointer snap-center rounded hover:scale-[1.01]"
      @click="$router.push(`/menu/${category.name}`)"
    >
      <SmartImg
        :src="category.images[0].url"
        class="rounded-t"
        :alt="category.images[0].title"
        :width="category.images[0].width"
        :height="category.images[0].height"
      />
      <p class="rounded-b bg-light p-5 text-center font-bold">{{ category.name }}</p>
    </div>
  </div>
</template>
