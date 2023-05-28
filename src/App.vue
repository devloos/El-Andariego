<script setup>
import { useHead } from '@vueuse/head';
import AndariegoNav from '@/components/nav/AndariegoNav.vue';
import AndariegoFooter from '@/components/AndariegoFooter.vue';
import { useRoute } from 'vue-router';

useHead({
  title: 'El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Authentic Mexican Food Truck',
    },
  ],
});

const route = useRoute();
</script>

<template>
  <AndariegoNav />
  <RouterView v-slot="{ Component }" :key="route.path" class="router-link">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <AndariegoFooter />
</template>

<style scoped>
.router-link {
  min-height: calc(100vh - 460px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
