<script setup>
import { useHead } from '@vueuse/head';
import { ref, onMounted, watch } from 'vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import ItemList from '@/components/ItemList.vue';
import Skeleton from '@/components/skeletons/Skeleton.vue';

useHead({
  title: 'Menu | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'El Andariego Menu',
    },
  ],
});

const route = useRoute();
const { t } = useI18n({ useScope: 'global' });

const categories = ref([]);
const selectedCategory = ref(null);
const isLoading = ref(true);

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
  } finally {
    isLoading.value = false;
  }
});

watch(
  route,
  async (to) => {
    if (!to.hash) {
      return;
    }

    selectedCategory.value = to.hash.slice(1);
  },
  { immediate: true },
);
</script>

<template>
  <div class="container mt-5">
    <template v-if="isLoading">
      <Skeleton class="mx-auto mb-6 h-9 w-24 lg:text-2xl" />
      <div class="scroll-hidden flex gap-2 overflow-scroll px-1 py-4 lg:justify-center">
        <Skeleton v-for="index in 6" :key="index" class="flex h-6 w-20 gap-2" />
      </div>
    </template>
    <div v-else class="px-2">
      <h1 class="mb-6 text-center text-xl font-bold text-primary lg:text-2xl">
        {{ t('link.menu') }}
      </h1>
      <div class="no-scrollbar flex gap-2 overflow-scroll px-1 py-4 lg:justify-center">
        <p>|</p>
        <div v-for="category in categories" :key="category.name" class="flex gap-2">
          <RouterLink
            class="cursor-pointer hover:text-alternate"
            :class="{
              'font-bold text-alternate underline': category.name === route.hash.slice(1),
            }"
            :to="`/menu/#${category.name}`"
          >
            {{ category.name }}
          </RouterLink>
          <p>|</p>
        </div>
      </div>
    </div>
    <ItemList :category="selectedCategory" />
  </div>
</template>

<style lang="scss" scoped>
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
