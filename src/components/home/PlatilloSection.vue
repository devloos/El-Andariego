<script setup>
import SmartImg from '@/components/smart/SmartImg.vue';
import { useAxios } from '@/composables/axios.js';
import { useToast } from '@/composables/toast.js';
import { ref, onMounted } from 'vue';

const platillos = ref([]);

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
</script>

<template>
  <div class="flex gap-3 overflow-x-scroll p-3 xl:container">
    <RouterLink
      v-for="platillo in platillos"
      :key="platillo.name"
      class="min-h-fit min-w-fit cursor-pointer rounded-b rounded-t shadow hover:scale-[1.01]"
      :to="`platillo/${platillo.name}`"
    >
      <SmartImg
        :src="platillo.thumbnail_image"
        class="h-auto max-w-[300px] rounded-t"
        alt="platillo"
      />
      <div class="flex flex-col gap-1 rounded-b p-2">
        <div class="flex items-center gap-3">
          <p class="text-lg font-bold">{{ platillo.name }}</p>
        </div>
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-money-bill text-main"></i>
          <p class="font-semibold">{{ '$' + platillo.price }}</p>
        </div>
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-heart text-minor"></i>
          <p class="font-semibold">{{ platillo.likes }}</p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
