<script setup>
import { useHead } from '@vueuse/head';
import { ref, onMounted, watch } from 'vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { RouterLink } from 'vue-router';
import { prettyContent } from '@/assets/utility';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Loading from '@/components/Loading.vue';
import ItemList from '@/components/ItemList.vue';

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
const items = ref([]);
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
    let url = null;
    if (to.params?.category === 'Platillos') {
      url = '/api/menu/platillos';
    } else {
      url = `/api/menu/items/${to.params?.category}`;
    }

    try {
      isLoading.value = true;
      const response = await useAxios({
        url,
      });

      items.value = response.data.map((el) => ({
        ...el,
        content: prettyContent(el.content),
      }));
    } catch (e) {
      useToast('Failed to fetch items.', { type: 'error' });
    } finally {
      isLoading.value = false;
    }
  },
  { immediate: true }
);
</script>

<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <div class="container mt-5 px-2">
      <h1 class="mb-6 text-center text-xl font-bold text-main lg:text-2xl">
        {{ t('link.menu') }}
      </h1>
      <div class="scroll-hidden flex gap-2 overflow-scroll px-1 py-4 lg:justify-center">
        <p>|</p>
        <div v-for="category in categories" :key="category.name" class="flex gap-2">
          <RouterLink
            class="cursor-pointer hover:text-minor"
            :class="{
              'font-bold text-minor underline':
                `${category.name}` === route.params.category,
            }"
            :to="`/menu/${category.name}`"
          >
            {{ category.name }}
          </RouterLink>
          <p>|</p>
        </div>
      </div>
    </div>
    <ItemList :items="items" />
  </div>
</template>

<style lang="scss" scoped>
.scroll-hidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
