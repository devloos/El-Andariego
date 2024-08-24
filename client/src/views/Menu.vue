<script setup>
import { useHead } from '@unhead/vue';
import { inject, ref } from 'vue';
import { prettyContent } from '@/assets/js/utility';
import { useSmartFetch } from '@/composables/smart-fetch.js';
import { useToast } from '@/composables/toast.js';
import { useI18n } from 'vue-i18n';
import SmartImg from '@/components/smart/SmartImg.vue';
import { onMounted } from 'vue';
import StyledDivider from '@/components/StyledDivider.vue';
import { useUserAgent } from '@/composables/user-agent';

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
const chosenCategory = ref(null);

const { locale, t } = useI18n({ useScope: 'global' });
const { isMobileDimensions } = useUserAgent();

onMounted(async () => {
  try {
    startOverlay();
    const response = await useSmartFetch({
      url: `/api/categories`,
      params: {
        include: {
          items: true,
        },
      },
      notifyOnFailure: true,
    });

    platillos.value = response.data.filter((el) => el.name === 'Platillos')[0];
    categories.value = response.data.filter((el) => el.name !== 'Platillos');
    chosenCategory.value = categories.value[0];
  } catch (e) {
    useToast('Failed to fetch items.', { type: 'error' });
  } finally {
    stopOverlay();
  }
});
</script>

<template>
  <div class="lg:container">
    <SmartImg
      v-if="isMobileDimensions"
      class="max-h-60 w-full object-none"
      src="/andariego/menu/tacos-mobile-1708239474899.jpg"
      width="900"
      height="900"
      alt="tacos"
    />
    <SmartImg
      v-else
      class="max-h-96 w-full object-none"
      src="/andariego/menu/tacos-desktop-1708287961851.jpg"
      width="1400"
      height="500"
      alt="tacos"
    />
    <div v-if="categories" class="mb-4 px-1 lg:px-2">
      <StyledDivider :name="t('dividers.menu')" class="mt-8" />
      <div class="mb-3 flex items-center justify-between gap-3">
        <button
          class="btn btn-outline btn-primary btn-sm px-8 shadow md:btn-md md:btn-wide"
          @click="useToast('Coming soon.')"
        >
          {{ t('menu.full_menu') }}
        </button>

        <select
          v-model="chosenCategory"
          class="select select-primary select-sm w-full max-w-xs shadow md:select-md"
        >
          <option v-for="category in categories" :key="category._id" :value="category">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div
        v-if="chosenCategory"
        class="grid items-stretch gap-6 p-2 md:grid-cols-2 md:p-3 xl:grid-cols-3"
      >
        <div v-for="item in chosenCategory.items" :key="item._id" class="relative">
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
    <div v-if="platillos" :id="platillos._id" class="mb-2 lg:px-2">
      <StyledDivider :name="t('dividers.platillo')" />
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
            class="mb-2 flex flex-wrap whitespace-pre-wrap ps-1 font-sans font-semibold italic tracking-wide"
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
