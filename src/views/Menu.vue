<script setup>
import ItemList from '@/components/ItemList.vue';
import { useHead } from '@vueuse/head';
import { ref, onMounted } from 'vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { RouterLink } from 'vue-router';

useHead({
  title: 'Menu | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'El Andariego Menu',
    },
  ],
});

const categories = ref([]);

onMounted(async () => {
  try {
    const response = await useAxios({
      url: '/api/menu/categories',
    });

    categories.value = response.data;
    categories.value.sort((a, b) => a.priority - b.priority);
  } catch (e) {
    useToast('Failed to fetch categories.', {
      type: 'error',
    });
  }
});
</script>

<template>
  <div class="container mt-5 px-2">
    <h1 class="mb-6 text-center text-xl font-bold text-main lg:text-2xl">MENU</h1>
    <div class="scroll-hidden flex gap-2 overflow-scroll px-1 py-4 lg:justify-center">
      <p>|</p>
      <div v-for="category in categories" :key="category.name" class="flex gap-2">
        <RouterLink
          class="cursor-pointer hover:text-minor"
          :to="`/menu/${category.name}`"
        >
          {{ category.name }}
        </RouterLink>
        <p>|</p>
      </div>
    </div>
  </div>
  <ItemList :category="$route.params.category" />
</template>

<style lang="scss" scoped>
.scroll-hidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
}

a.router-link-active {
  text-decoration: underline;
  color: #76070a;
  font-weight: bold;
}
</style>
