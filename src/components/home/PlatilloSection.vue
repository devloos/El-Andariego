<script setup>
import { ref, onMounted } from 'vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { useStorage } from '@vueuse/core';
import SmartImg from '@/components/smart/SmartImg.vue';

const platillos = ref([]);

const PLATILLOS_KEY = 'platillos-liked';

const platillosLiked = useStorage(PLATILLOS_KEY, []);

onMounted(async () => {
  try {
    const response = await useAxios({
      url: '/api/menu/platillos',
    });

    platillos.value = response.data;
  } catch (err) {
    useToast('Failed to fetch platillos.', {
      type: 'error',
    });
  }
});

function userLikesPlatillo(name) {
  return platillosLiked.value.includes(name);
}

async function toggleLiked(platillo) {
  const userLikes = userLikesPlatillo(platillo.name);
  if (userLikes) {
    platillosLiked.value = platillosLiked.value.filter((name) => name !== platillo.name);
  } else {
    platillosLiked.value.push(platillo.name);
  }

  // subtract or add depending on user preference already
  platillo.likes += userLikes ? -1 : 1;
  try {
    await useAxios({
      url: `/api/menu/platillos/${platillo._id}`,
      method: 'POST',
      data: {
        likes: platillo.likes,
      },
    });
  } catch (e) {
    useToast('Failed to update platillo.', { type: 'error' });
  }
}
</script>

<template>
  <div class="flex gap-3 overflow-x-scroll p-3 xl:container">
    <RouterLink
      v-for="platillo in platillos"
      :key="platillo.name"
      class="card card-compact bg-base-100 shadow-md"
      :to="`/menu/platillos#${platillo._id}`"
    >
      <div class="relative">
        <SmartImg
          :src="platillo.images[0].url"
          class="max-w-[300px]"
          :alt="platillo.images[0].title"
          :width="platillo.images[0].width"
          :height="platillo.images[0].height"
        />
        <button class="btn absolute right-2 top-2" @click.prevent="toggleLiked(platillo)">
          <i
            class="fa-solid fa-heart"
            :class="userLikesPlatillo(platillo.name) ? 'text-alternate' : 'text-coal'"
          />
        </button>
      </div>
      <div class="card-body">
        <p class="card-title">
          {{ `#${platillo.priority} ${platillo.name}` }}
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
