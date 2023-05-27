<script setup>
import { useUtility } from '@/composables/utility';
import { useAxios } from '@/composables/axios';
import { useToast } from '@/composables/toast';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const items = ref([]);
const { prettyContent } = useUtility();

watch(
  route,
  async (to) => {
    if (!to.params?.category) {
      return;
    }

    const url =
      to.params.category === 'Platillos'
        ? '/api/menu/platillos'
        : `/api/menu/items/${to.params.category}`;

    try {
      const response = await useAxios({
        url,
      });

      items.value = response.data.map((el) => ({
        ...el,
        content: prettyContent(el.content),
      }));
    } catch (e) {
      useToast('Failed to fetch items.', { type: 'error' });
    }
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <div
    class="container mx-auto mt-2 grid grid-cols-1 gap-5 px-4 pt-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 xl:gap-8 xl:px-32"
  >
    <div v-for="item in items" :key="item.name" class="relative">
      <div class="mb-4 flex justify-between">
        <p class="font-bold text-main">{{ item.name }}</p>
        <p>{{ `($${item.price})` }}</p>
      </div>
      <p class="mb-5 font-semibold">{{ item.content }}</p>
      <hr class="border-1 border-gray-700" />
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
