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
      class="min-h-fit min-w-fit cursor-pointer rounded-b rounded-t shadow hover:scale-[1.01]"
      :to="`platillo/${platillo.name}`"
    >
      <smart-img
        src="/andariego/platillos/thumbnails/final-dim_26Zwteo4L"
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
    </router-link>
  </div>
</template>
