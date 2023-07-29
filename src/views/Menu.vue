<script setup>
import { useHead } from '@vueuse/head';
import { RouterLink } from 'vue-router';
import SmartImg from '@/components/smart/SmartImg.vue';
import ItemList from '@/components/menu/ItemList.vue';

useHead({
  title: 'Menu | El Andariego',
  meta: [
    {
      name: 'description',
      content: 'El Andariego Menu',
    },
  ],
});

const menuIds = ['Menu', 'Platillos', 'Kids', 'Drinks', 'Sides'];
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
    <div class="container mb-5 mt-6 px-2">
      <div
        class="flex gap-8 overflow-scroll px-1 py-2 text-xl font-semibold uppercase lg:justify-center lg:gap-16"
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
.list {
  &-move,
  &-enter-active,
  &-leave-active {
    transition: all 0.5s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }

  &-leave-active {
    position: absolute;
  }
}
</style>
