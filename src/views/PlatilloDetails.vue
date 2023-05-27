<script setup>
import SmartImg from '@/components/smart/SmartImg.vue';
import { ref, onMounted } from 'vue';
import { useAxios } from '@/composables/axios';
import { useToast } from '@/composables/toast';
import { useRoute } from 'vue-router';
import { useUtility } from '@/composables/utility';
import Loading from '@/components/Loading.vue';

const route = useRoute();
const { prettyContent } = useUtility();
const platillo = ref(null);
const userLiked = ref(false);
const likes = ref(0);
const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await useAxios({
      url: `/api/menu/platillos/${route.params.name}`,
    });

    platillo.value = response.data[0];
    platillo.value.content = prettyContent(platillo.value.content);
    likes.value = platillo.value.likes;
  } catch (e) {
    useToast('Failed to fetch platillo.', { type: 'error' });
  } finally {
    isLoading.value = false;
  }

  const response = localStorage.getItem('platillos-liked');
  if (response) {
    if (JSON.parse(response).includes(platillo.value.name)) {
      userLiked.value = true;
    }
  }
});

async function toggleLiked() {
  userLiked.value = !userLiked.value;

  const response = localStorage.getItem('liked-platillos');

  let platillosLiked = [];
  if (response) {
    platillosLiked = JSON.parse(response);
    if (userLiked.value) {
      platillosLiked.push(platillo.value.name);
    } else {
      platillosLiked = platillosLiked.filter((name) => name !== platillo.value.name);
    }
  } else if (userLiked.value) {
    platillosLiked.push(platillo.value.name);
  }

  localStorage.setItem('liked-platillos', JSON.stringify(platillosLiked));

  likes.value += userLiked.value ? 1 : -1;
  try {
    await useAxios({
      url: `/api/menu/platillos/${platillo.value.name}`,
      method: 'POST',
      data: {
        likes: likes.value,
      },
    });
  } catch (e) {
    useToast('Failed to update platillo.', { type: 'error' });
  }
}
</script>

<template>
  <Loading v-if="isLoading" />
  <div v-else class="container mt-8 flex flex-col justify-center">
    <div class="relative mx-auto max-w-5xl">
      <SmartImg :src="platillo.hero_image" />
      <div class="like-btn flex items-center justify-center rounded shadow-lg">
        <button
          class="rounded-l bg-white px-4 py-2 hover:bg-light"
          type="button"
          @click="toggleLiked"
        >
          <i
            class="fa-solid fa-heart"
            :class="userLiked ? 'text-minor' : 'text-black'"
          ></i>
        </button>
        <div class="rounded-r bg-light px-6 py-2 font-semibold">{{ likes }}</div>
      </div>
    </div>
    <div class="mt-6 text-center">
      <h3 class="my-4 text-2xl font-bold text-main">{{ platillo.name }}</h3>
      <p class="mx-auto max-w-sm text-xl font-semibold">{{ platillo.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.like-btn {
  position: absolute;
  right: 30px;
  bottom: -15px;
}
</style>
