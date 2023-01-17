<template>
  <div class="px-2 px-lg-5 mx-lg-3">
    <h4 class="mt-5 mb-4">Our Specialty Platillos</h4>
    <div class="d-flex gap-3 overflow-auto">
      <div
        v-for="platillo in platillos"
        :key="platillo.name"
        class="platillo-card"
        @click="$router.push(`platillo/${platillo.name}`)"
      >
        <div>
          <img src="platillo.png" class="platillo-img" width="220" alt="" />
        </div>
        <div class="platillo-info px-2 border">
          <p class="my-1">{{ platillo.name }}</p>
          <p class="platillo-price text-muted mb-2">{{ '$' + platillo.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        // todo toast
        console.log(e);
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
