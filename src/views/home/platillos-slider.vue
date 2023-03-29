<template>
  <div class="px-2 px-lg-5 mx-lg-3">
    <smart-divider :divider_name="'Our Specialty Platillos'" />
    <div class="d-flex gap-3 overflow-auto">
      <div
        v-for="platillo in platillos"
        :key="platillo.name"
        class="platillo-card"
        @click="$router.push(`platillo/${platillo.name}`)"
      >
        <div>
          <!-- Change Image -->
          <img :src="platillo.thumbnail_image" class="platillo-img" width="220" alt="" />
        </div>
        <div class="platillo-info px-2 border bg-light">
          <p class="my-1">{{ platillo.name }}</p>
          <p class="platillo-price text-muted mb-2">{{ '$' + platillo.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import smartDivider from '@/components/smart-divider.vue';

export default {
  components: {
    smartDivider,
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

<style scoped>
.platillo-card {
  cursor: pointer;
}

.platillo-img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.platillo-info {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.platillo-price {
  font-size: 14px;
}

div::-webkit-scrollbar {
  display: none;
}

div {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
