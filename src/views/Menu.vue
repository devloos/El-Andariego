<script setup>
import { useHead } from '@unhead/vue';
import { ref } from 'vue';
import { prettyContent } from '@/assets/js/utility';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { useI18n } from 'vue-i18n';
import SmartImg from '@/components/smart/SmartImg.vue';
import { onMounted } from 'vue';
import { meats } from '@/assets/constants/menu';

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
const isLoading = ref(true);
const { locale, t } = useI18n({ useScope: 'global' });

onMounted(async () => {
  try {
    isLoading.value = true;
    const response = await useAxios({
      url: `/api/categories/list`,
      params: {
        include_items: true,
      },
    });

    categories.value = response.data;
  } catch (e) {
    useToast('Failed to fetch items.', { type: 'error' });
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="mt-5">
    <SmartImg
      src="/andariego/menu/menu-header-image.jpg"
      class="mb-5 max-h-[700px] object-none object-center"
      width="2400"
      height="1280"
      alt="menu header"
    />
    <div
      class="rounded border-[10px] border-double border-primary-100 bg-primary py-6 text-primary-100 lg:container"
    >
      <div class="mx-auto mb-5 w-fit gap-3 px-6 text-center text-xl">
        <p class="mb-2 font-bold underline underline-offset-2">
          {{ t('menu.meat_selection') }}
        </p>
        <ul class="flex flex-wrap justify-center gap-3">
          <li v-for="(meat, i) in meats" :key="i">
            <span>{{ meat[locale] }}</span>
            <span v-if="i + 1 < meats.length">,</span>
          </li>
        </ul>
      </div>
      <div>
        <div
          v-for="category in categories"
          :id="category._id"
          :key="category._id"
          class="mb-5"
        >
          <div
            class="mx-auto grid grid-cols-1 items-start gap-10 px-4 pt-4 lg:container md:grid-cols-2 md:px-8 xl:px-32"
          >
            <div
              v-for="item in category.items"
              :id="item._id"
              :key="item._id"
              class="relative"
            >
              <p
                class="mb-2 w-fit rounded bg-gradient-to-r from-alternate from-70% pe-9 ps-2 text-lg font-semibold uppercase tracking-wide"
              >
                <span v-if="category.name === 'Platillos'">{{ item.priority }}. </span>
                <span>{{ item.name[locale] }}</span>
              </p>
              <p
                class="mb-2 flex flex-wrap whitespace-pre-wrap ps-1 font-sans font-semibold tracking-wide"
              >
                {{ prettyContent(item.content[locale], locale) }}
              </p>
              <div class="mt-5">
                <hr class="border-[1px] border-coal" />
              </div>
            </div>
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

hr {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>
