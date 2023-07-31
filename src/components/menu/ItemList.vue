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

const categories = ref([]);
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
        url: `/api/menu/${props.menuId}/list`,
      });

      categories.value = response.data;
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
  <div v-for="(category, i) in categories" :key="i" class="pb-12">
    <h1
      v-if="category._id"
      :id="category._id"
      class="mb-2 text-center text-2xl font-semibold tracking-widest underline underline-offset-2"
    >
      {{ category._id }}
    </h1>
    <div
      class="mx-auto grid grid-cols-1 items-start gap-10 px-4 pt-4 lg:container md:grid-cols-2 md:px-8 xl:px-32"
    >
      <div v-for="item in category.items" :key="item.name" class="relative">
        <div class="mb-2 flex justify-between">
          <p class="text-lg font-semibold uppercase tracking-wide text-primary">
            {{ item.name }}
          </p>
          <p v-if="!item.options" class="font-semibold tracking-widest">
            {{ `$${item.base_price.toFixed(2)}` }}
          </p>
        </div>
        <p
          class="mb-2 flex flex-wrap whitespace-pre-wrap font-sans font-semibold tracking-wide"
        >
          {{ prettyContent(item.content[locale], locale) }}
        </p>
        <p
          v-if="item.options"
          class="mb-2 flex flex-wrap whitespace-pre-wrap font-sans font-semibold tracking-wide"
        >
          {{ prettyOptions(item.options?.[locale]) }}
        </p>
        <div class="mt-5">
          <hr class="border-[1px] border-alternate-600" />
        </div>
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
