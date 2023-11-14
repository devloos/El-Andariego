<script setup>
import { useHead } from '@unhead/vue';
import { RouterLink } from 'vue-router';
import SmartImg from '@/components/smart/SmartImg.vue';
import ItemList from '@/views/menu/-ItemList.vue';
import { useElementBounding } from '@vueuse/core';
import { ref } from 'vue';

useHead({
  title: 'Menu | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'El Andariego Menu',
    },
  ],
});

const menuPicker = ref(null);
const { top } = useElementBounding(menuPicker);

const menuIds = ['Menu', 'Platillos', 'Kids', 'Sides'];
</script>

<template>
  <div class="mt-5">
    <SmartImg
      src="/andariego/menu/menu-header-image.jpg"
      class="max-h-[700px] object-none object-center"
      width="2400"
      height="1280"
      alt="menu header"
    />
    <div
      ref="menuPicker"
      class="sticky top-[60px] z-40 mb-2 mt-6 bg-primary-50 p-2"
      :class="{ 'shadow-md': top === 60 }"
    >
      <div
        class="no-scrollbar flex justify-center gap-7 overflow-scroll px-1 py-2 text-xl font-semibold uppercase md:gap-16"
      >
        <RouterLink
          v-for="menuId in menuIds"
          :key="menuId"
          class="cursor-pointer py-1 tracking-widest hover:border-y-2 hover:border-coal hover:text-alternate"
          active-class="border-y-2 border-coal text-alternate"
          :to="`/menu/${menuId.toLowerCase()}`"
        >
          {{ menuId }}
        </RouterLink>
      </div>
    </div>
    <ItemList :menu-id="$route.params.id" />
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
</style>
