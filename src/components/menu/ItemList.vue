<script setup>
import { ref, watch } from 'vue';
import { prettyContent, prettyOptions } from '@/assets/js/utility';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import ItemListSkeleton from '@/components/skeletons/ItemListSkeleton.vue';
import { useI18n } from 'vue-i18n';

const props = defineProps({
  menuId: {
    type: String,
    required: true,
  },
});

const items = ref([]);
const isLoading = ref(true);
const { locale } = useI18n({ useScope: 'global' });

watch(
  () => props.menuId,
  async () => {
    if (!props.menuId) {
      return;
    }

    try {
      isLoading.value = true;
      const response = await useAxios({
        url: `/api/menu/${props.menuId}`,
      });

      items.value = response.data.map((el) => ({
        ...el,
        content: prettyContent(el.content[locale.value], locale.value),
        options: prettyOptions(el.options?.[locale.value]),
      }));
    } catch (e) {
      useToast('Failed to fetch items.', { type: 'error' });
    } finally {
      isLoading.value = false;
    }
  },
  { immediate: true },
);

function getItemName(item) {
  if (item.priority) {
    return `#${item.priority} ${item.name}`;
  }

  return item.name;
}
</script>

<template>
  <ItemListSkeleton v-if="isLoading" />
  <div
    v-else
    class="mx-auto grid grid-cols-1 gap-8 px-4 pt-4 lg:container sm:grid-cols-2 md:px-8 xl:gap-12 xl:px-32"
  >
    <div v-for="item in items" :key="item.name" class="relative">
      <div class="mb-4 flex justify-between">
        <p class="text-lg font-semibold uppercase tracking-wide text-primary">
          {{ getItemName(item) }}
        </p>
        <p v-if="!item.options" class="font-semibold tracking-widest">
          {{ `$${item.base_price}` }}
        </p>
      </div>
      <p class="mb-2">{{ item.content }}</p>
      <p v-if="item.options" class="mb-2 tracking-wide">{{ item.options }}</p>
      <div class="mt-5">
        <hr class="border-1 border-gray-700" />
      </div>
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
