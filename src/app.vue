<script>
import { useHead } from '@vueuse/head';
import AndariegoNav from '@/views/nav/andariego-nav.vue';
import AndariegoFooter from '@/views/andariego-footer.vue';

export default {
  components: {
    AndariegoNav,
    AndariegoFooter,
  },
  setup() {
    useHead({
      title: 'El Andariego',
      meta: [
        {
          name: 'description',
          content: 'Authentic Mexican Food Truck',
        },
      ],
    });
  },
};
</script>

<template>
  <andariego-nav />
  <main class="flex flex-col">
    <router-view class="grow" />
    <andariego-footer />
  </main>
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
}
</style>
