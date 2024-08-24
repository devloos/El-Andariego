<script setup>
import { ref, onMounted } from 'vue';
import { useSmartFetch } from '@/composables/smart-fetch.js';
import { useToast } from '@/composables/toast.js';
import { useStorage } from '@vueuse/core';
import SmartImg from '@/components/smart/SmartImg.vue';
import { useI18n } from 'vue-i18n';

const platillos = ref([]);

const PLATILLOS_KEY = 'platillos-liked';

const platillosLiked = useStorage(PLATILLOS_KEY, []);
const { locale } = useI18n({ useScope: 'global' });

onMounted(async () => {
  try {
    const response = await useSmartFetch({
      url: '/api/categories',
      params: {
        match: {
          name: 'Platillos',
        },
        include: {
          items: true,
        },
      },
      notifyOnFailure: true,
    });

    platillos.value = response.data?.[0].items || [];
  } catch (_) {
    useToast('Failed to fetch platillos.', {
      type: 'error',
    });
  }
});

function userLikesPlatillo(id) {
  return platillosLiked.value.includes(id);
}

async function toggleLiked(index) {
  const platillo = platillos.value[index];
  const userLikes = userLikesPlatillo(platillo._id);

  if (userLikes) {
    platillosLiked.value = platillosLiked.value.filter((id) => id !== platillo._id);
  } else {
    platillosLiked.value.push(platillo._id);
  }

  platillo.likes += userLikes ? -1 : 1;

  try {
    const response = await useSmartFetch({
      url: `/api/items/${platillo._id}`,
      method: 'PATCH',
      data: {
        likes: platillo.likes,
      },
    });

    platillos.value[index] = response.data.data;
  } catch (e) {
    useToast('Failed to update platillo.', { type: 'error' });
  }
}
</script>

<template>
  <div class="carousel carousel-center flex gap-3 overflow-x-scroll p-3 xl:container">
    <RouterLink
      v-for="(platillo, index) in platillos"
      :key="platillo._id"
      class="card carousel-item card-compact rounded bg-base-100 shadow-md"
      :to="`/menu/#${platillo._id}`"
    >
      <figure class="relative">
        <SmartImg
          :src="platillo.images[0].url"
          class="max-w-[300px]"
          :alt="platillo.images[0].title"
          :width="platillo.images[0].width"
          :height="platillo.images[0].height"
        />
        <button class="btn absolute right-2 top-2" @click.prevent="toggleLiked(index)">
          <i
            class="fa-solid fa-heart"
            :class="userLikesPlatillo(platillo._id) ? 'text-alternate' : 'text-coal'"
          />
        </button>
      </figure>
      <div class="card-body">
        <p class="card-title">
          {{ `${platillo.priority}. ${platillo.name[locale]}` }}
        </p>
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-money-bill text-primary"></i>
          <p class="font-semibold">{{ '$' + platillo.base_price }}</p>
        </div>
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-heart text-alternate"></i>
          <p class="font-semibold">{{ platillo.likes }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
