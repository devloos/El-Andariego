<script setup>
import SmartImg from '@/components/smart/SmartImg.vue';
import { ref, onMounted, computed } from 'vue';
import { useAxios } from '@/composables/axios';
import { useToast } from '@/composables/toast';
import { useRoute } from 'vue-router';
import { prettyContent } from '@/assets/utility';
import { useStorage } from '@vueuse/core';
import DetailSkeleton from '@/components/skeletons/DetailSkeleton.vue';

const PLATILLOS_KEY = 'platillos-liked';

const route = useRoute();
const platillosLiked = useStorage(PLATILLOS_KEY, []);

const platillo = ref(null);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await useAxios({
      url: `/api/menu/platillos/${route.params.name}`,
    });

    platillo.value = response.data;
    platillo.value.content = prettyContent(platillo.value.content);
  } catch (e) {
    useToast('Failed to fetch platillo.', { type: 'error' });
  } finally {
    isLoading.value = false;
  }
});

const userLiked = computed(() => platillosLiked.value.includes(platillo.value.name));

async function toggleLiked() {
  if (userLiked.value) {
    platillosLiked.value = platillosLiked.value.filter(
      (name) => name !== platillo.value.name,
    );
  } else {
    platillosLiked.value.push(platillo.value.name);
  }

  platillo.value.likes += userLiked.value ? 1 : -1;
  try {
    await useAxios({
      url: `/api/menu/platillos/${platillo.value.name}`,
      method: 'POST',
      data: {
        likes: platillo.value.likes,
      },
    });
  } catch (e) {
    useToast('Failed to update platillo.', { type: 'error' });
  }
}
</script>

<template>
  <DetailSkeleton v-if="isLoading" />
  <div v-else class="container mt-2 flex flex-col justify-center">
    <h3 class="mb-5 text-center text-2xl font-bold text-primary">
      {{ platillo.name }}
    </h3>
    <div class="relative mx-auto mb-8 max-w-5xl">
      <SmartImg
        :src="platillo.images[1].url"
        :alt="platillo.images[1].title"
        :width="platillo.images[1].width"
        :height="platillo.images[1].height"
      />
      <button
        class="position absolute flex items-center justify-around gap-6 rounded-full bg-white px-4 py-2 shadow-lg hover:bg-ash"
        type="button"
        @click="toggleLiked"
      >
        <i
          class="fa-solid fa-heart"
          :class="userLiked ? 'text-alternate' : 'text-black'"
        ></i>
        <p class="font-semibold">{{ platillo.likes }}</p>
      </button>
    </div>
    <p class="mx-auto max-w-sm text-center text-xl font-semibold">
      {{ platillo.content }}
    </p>
  </div>
</template>

<style scoped>
.position {
  right: 30px;
  bottom: -15px;
}
</style>
