<script setup>
import { useHead } from '@unhead/vue';
import { inject, ref } from 'vue';
import { prettyContent } from '@/assets/js/utility';
import { useSmartFetch } from '@/composables/smart-fetch.js';
import { useToast } from '@/composables/toast.js';
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';

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
const startOverlay = inject('startOverlay');
const stopOverlay = inject('stopOverlay');
const selectedCategory = ref(null);

const { locale, t } = useI18n({ useScope: 'global' });

onMounted(async () => {
  try {
    startOverlay();
    const response = await useSmartFetch({
      url: `${import.meta.env.VITE_AWS_ORIGIN}/andariego-get-categories`,
      headers: {
        'Access-Control-Allow-Origin': window.origin,
      },
      notifyOnFailure: true,
    });

    categories.value = response.data;
    selectedCategory.value = categories.value[0];
  } catch (e) {
    useToast('Failed to fetch items.', { type: 'error' });
  } finally {
    stopOverlay();
  }
});
</script>

<template>
  <div>
    <div v-if="categories" class="px-1 lg:px-2">
      <div class="mb-3 flex items-center justify-between gap-3">
        <button
          class="btn btn-outline btn-primary btn-sm px-8 shadow md:btn-md md:btn-wide"
          @click="useToast('Coming soon.')"
        >
          {{ t('menu.full_menu') }}
        </button>

        <select
          v-model="selectedCategory"
          class="select select-primary select-sm w-full max-w-xs shadow md:select-md"
        >
          <option v-for="category in categories" :key="category._id" :value="category">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div
        v-if="selectedCategory"
        class="grid items-stretch gap-6 p-2 md:grid-cols-2 md:p-3 xl:grid-cols-3"
      >
        <div v-for="item in selectedCategory.items" :key="item._id" class="relative">
          <div class="mb-3 text-sm">
            <div class="flex justify-between">
              <p class="mb-1 font-semibold uppercase tracking-wide">
                {{ item.name[locale] }}
              </p>
              <p>${{ item.base_price.toFixed(2) }}</p>
            </div>
            <p class="flex flex-wrap font-sans font-semibold italic tracking-wide">
              {{ prettyContent(item.content[locale], locale) }}
            </p>
          </div>
          <hr class="absolute bottom-0 left-0 right-0 border-gray-400" />
        </div>
      </div>
    </div>
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

.platillo-divider {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>
