<script setup>
import { useHead } from '@vueuse/head';
import { ref, onMounted, watch } from 'vue';
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
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await useAxios({
      url: '/api/categories',
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

const categoriesToDisplay = ['Menu', 'Platillos', 'Kids', 'Drinks', 'Sides'];

watch(route, async () => {}, { immediate: true });
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
        src="/andariego/menu/menu-header-image.jpg"
        class="max-h-[700px] object-none object-center"
        width="2400"
        height="1280"
        alt="menu header"
      />
      <div class="container mb-5 mt-6 px-2">
        <div
          class="flex gap-8 overflow-scroll px-1 py-2 text-xl font-semibold uppercase lg:justify-center lg:gap-16"
        >
          <RouterLink
            v-for="category in categoriesToDisplay"
            :key="category"
            class="cursor-pointer py-1 tracking-widest hover:border-y-2 hover:border-coal hover:text-alternate"
            active-class="border-y-2 border-coal text-alternate"
            :to="`/menu/${category.toLowerCase()}`"
          >
            {{ category }}
          </RouterLink>
        </div>
      </div>
    </template>
    <ItemList :category="$route.params.id" />
  </div>
</template>

<style lang="scss" scoped>
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
