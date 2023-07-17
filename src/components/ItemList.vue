<script setup>
import { ref, watch } from 'vue';
import { prettyContent } from '@/assets/js/utility';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import ItemListSkeleton from '@/components/skeletons/ItemListSkeleton.vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});

const items = ref([]);
const isLoading = ref(true);
const { locale } = useI18n({ useScope: 'global' });

watch(
  () => props.category,
  async () => {
    if (!props.category) {
      return;
    }

    const url = `/api/menu/${
      props.category === 'Platillos' ? 'Platillos' : `items/${props.category}`
    }`;

    try {
      isLoading.value = true;
      const response = await useAxios({
        url,
      });

      items.value = response.data.map((el) => ({
        ...el,
        content: prettyContent(el.content[locale.value], locale.value),
      }));
    } catch (e) {
      useToast('Failed to fetch items.', { type: 'error' });
    } finally {
      isLoading.value = false;
    }
  },
  { immediate: true },
);
</script>

<template>
  <ItemListSkeleton v-if="isLoading" />
  <div
    v-else
    class="container mx-auto mt-2 grid grid-cols-1 gap-5 px-4 pt-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 xl:gap-8 xl:px-32"
  >
    <div v-for="item in items" :key="item.name" class="relative">
      <div class="mb-4 flex justify-between">
        <p class="font-bold text-primary">{{ item.name }}</p>
        <p>{{ `($${item.price})` }}</p>
      </div>
      <p class="mb-5 font-semibold">{{ item.content }}</p>
      <hr class="border-1 border-gray-700" />
    </div>
  </div>
</template>

<style scoped>
hr {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>
