<script setup>
import ItemList from '@/components/ItemList.vue';
import { useHead } from '@vueuse/head';
import { ref, onMounted, watch } from 'vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { RouterLink } from 'vue-router';
import Loading from '@/components/Loading.vue';
import { useUtility } from '@/composables/utility';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const { prettyContent } = useUtility();

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
    if (!to.hash) {
      router.push('/menu/#Platillos');
      return;
    }

    let url = null;
    if (to.hash === '#Platillos') {
      url = '/api/menu/platillos';
    } else {
      url = `/api/menu/items/${to.hash.slice(1)}`;
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
      <h1 class="mb-6 text-center text-xl font-bold text-main lg:text-2xl">MENU</h1>
      <div class="scroll-hidden flex gap-2 overflow-scroll px-1 py-4 lg:justify-center">
        <p>|</p>
        <div v-for="category in categories" :key="category.name" class="flex gap-2">
          <RouterLink
            class="cursor-pointer hover:text-minor"
            :class="{
              'font-bold text-minor underline': `#${category.name}` === route.hash,
            }"
            :to="`/menu/#${category.name}`"
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
