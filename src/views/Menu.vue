<script setup>
import { useHead } from '@vueuse/head';
import { ref, onMounted, watch, computed } from 'vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import SmartImg from '@/components/smart/SmartImg.vue';
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

const categoriesToDisplay = computed(() => {
  return categories.value.filter((el) => el.name !== route.hash.slice(1));
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
  <div class="mt-5">
    <template v-if="isLoading">
      <Skeleton class="mx-auto mb-6 h-9 w-24 lg:text-2xl" />
      <div class="scroll-hidden flex gap-2 overflow-scroll px-1 py-4 lg:justify-center">
        <Skeleton v-for="index in 6" :key="index" class="flex h-6 w-20 gap-2" />
      </div>
    </template>
    <template v-else>
      <SmartImg
        src="/andariego/menu/header-wide-1689919765595.jpg"
        width="2048"
        height="922"
        alt="menu header"
      />
      <div class="container mb-5 mt-6 px-2">
        <div
          class="no-scrollbar flex gap-2 overflow-scroll px-1 py-2 text-lg lg:justify-center"
        >
          <p>|</p>
          <TransitionGroup name="list">
            <div
              v-for="category in categoriesToDisplay"
              :key="category.name"
              class="flex gap-2"
            >
              <RouterLink
                class="cursor-pointer hover:text-alternate"
                :to="`/menu/#${category.name}`"
              >
                {{ category.name }}
              </RouterLink>
              <p>|</p>
            </div>
          </TransitionGroup>
        </div>
        <h1
          class="mt-6 text-center text-2xl font-bold tracking-wider text-alternate lg:text-2xl"
        >
          {{ $route.hash.slice(1) }}
        </h1>
      </div>
    </template>
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

.list {
  &-move,
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-leave-active {
    position: absolute;
  }
}
</style>
