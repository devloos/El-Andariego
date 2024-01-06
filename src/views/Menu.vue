<script setup>
import { useHead } from '@unhead/vue';
import { inject, ref } from 'vue';
import { prettyContent } from '@/assets/js/utility';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { useI18n } from 'vue-i18n';
import SmartImg from '@/components/smart/SmartImg.vue';
import { onMounted } from 'vue';
import SmartSvg from '@/components/smart/SmartSvg.vue';

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
const platillos = ref(null);
const startOverlay = inject('startOverlay');
const stopOverlay = inject('stopOverlay');

const { locale, t } = useI18n({ useScope: 'global' });

onMounted(async () => {
  try {
    startOverlay();
    const response = await useAxios({
      url: `/api/categories/list`,
      params: {
        include_items: true,
      },
    });

    platillos.value = response.data.data.filter((el) => el.name === 'Platillos')[0];
    categories.value = response.data.data.filter((el) => el.name !== 'Platillos');
  } catch (e) {
    useToast('Failed to fetch items.', { type: 'error' });
  } finally {
    stopOverlay();
  }
});
</script>

<template>
  <div>
    <SmartImg
      src="/andariego/menu/tacos-asada-header.jpg"
      class="mb-2 max-h-[600px] object-none"
      width="5858"
      height="3905"
      alt="Menu Banner"
    />
    <div class="mb-4 px-1 lg:container lg:px-2">
      <div class="badge my-2 flex !h-8 items-center gap-2 rounded border-coal-300 px-1">
        <SmartSvg class="w-8 text-lg" name="FoodIcon" />
        <h3 class="font-bold uppercase">{{ t('link.menu') }}</h3>
      </div>
      <div class="gap-x-2 lg:grid lg:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="category in categories"
          :id="category._id"
          :key="category._id"
          class="collapse collapse-arrow h-fit rounded-none border-b border-gray-400 bg-coal-100 first:rounded-t last:rounded-b lg:first:rounded-none lg:last:rounded-none"
        >
          <p>SOME SICK MESSAGE</p>
          <input type="checkbox" />
          <div class="collapse-title font-bold">{{ category.name }}</div>
          <div class="collapse-content bg-primary-50 px-0 !pb-0">
            <div v-for="(item, itemIndex) in category.items" :key="item._id">
              <div class="mb-2 px-3 pt-3 text-sm">
                <div class="flex justify-between">
                  <p class="mb-1 font-semibold uppercase tracking-wide">
                    {{ item.name[locale] }}
                  </p>
                  <p>${{ item.base_price.toFixed(2) }}</p>
                </div>
                <p class="flex flex-wrap font-sans font-semibold tracking-wide">
                  {{ prettyContent(item.content[locale], locale) }}
                </p>
              </div>
              <hr v-if="itemIndex + 1 < category.items.length" class="border-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="platillos" :id="platillos._id" class="mb-2 lg:container lg:px-2">
      <div
        class="badge my-2 ms-1 flex !h-8 items-center gap-2 rounded border-coal-300 px-1"
      >
        <SmartSvg class="w-8 text-lg" name="PlateIcon" />
        <h3 class="font-bold uppercase">Platillos</h3>
      </div>
      <div
        class="mx-auto grid grid-cols-1 items-start gap-10 rounded border-[10px] border-double border-primary-100 bg-primary px-3 py-6 text-primary-100 lg:container md:grid-cols-2 md:px-8 xl:px-32"
      >
        <div
          v-for="platillo in platillos.items"
          :id="platillo._id"
          :key="platillo._id"
          class="relative"
        >
          <div class="flex justify-between">
            <p
              class="mb-2 w-fit rounded bg-gradient-to-r from-alternate from-70% pe-9 ps-2 font-semibold uppercase tracking-wide"
            >
              {{ platillo.priority }}. {{ platillo.name[locale] }}
            </p>

            <p>${{ platillo.base_price.toFixed(2) }}</p>
          </div>
          <p
            class="mb-2 flex flex-wrap whitespace-pre-wrap ps-1 font-sans font-semibold tracking-wide"
          >
            {{ prettyContent(platillo.content[locale], locale) }}
          </p>
          <div class="mt-5">
            <hr class="platillo-divider border-[1px] border-coal" />
          </div>
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
