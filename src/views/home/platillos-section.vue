<script>
import SmartImg from '@/components/smart-img.vue';

export default {
  components: {
    SmartImg,
  },
  data() {
    return {
      platillos: [],
    };
  },
  mounted() {
    this.getPlatillos();
  },
  methods: {
    async getPlatillos() {
      try {
        const response = await this.$_andariego_axios({
          url: '/api/menu/platillos',
        });

        this.platillos = response.data;
      } catch (e) {
        this.$_andariego_toast('Failed to fetch platillos.', {
          type: 'error',
        });
      }
    },
  },
};
</script>

<template>
  <div class="container mx-auto flex gap-3 overflow-x-scroll p-3">
    <router-link
      v-for="platillo in platillos"
      :key="platillo.name"
      class="min-h-fit min-w-fit cursor-pointer shadow-sm"
      :to="`platillo/${platillo.name}`"
    >
      <smart-img
        src="/andariego/platillos/thumbnails/new-dimension_dsbkFuJy8"
        class="h-auto max-w-[280px]"
        alt="platillo"
      />
      <div class="flex flex-col gap-1 p-2">
        <p class="font-bold">{{ platillo.name }}</p>
        <p class="font-semibold">{{ '$' + platillo.price }}</p>
      </div>
    </router-link>
  </div>
</template>
