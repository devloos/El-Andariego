<script>
import smartImg from '@/components/smart-img.vue';

export default {
  components: {
    smartImg,
  },
  data() {
    return {
      platillos: [],
    };
  },
  mounted() {
    this.getPlatillos();
  },
  computed: {
    platilloImgStyle() {
      return {
        'border-top-left-radius': '5px',
        'border-top-right-radius': '5px',
      };
    },
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
  <div class="px-2 px-lg-5 mx-lg-3">
    <div class="d-flex gap-3 overflow-auto">
      <div
        v-for="platillo in platillos"
        :key="platillo.name"
        class="platillo-card"
        @click="$router.push(`platillo/${platillo.name}`)"
      >
        <div>
          <!-- Change Image -->
          <smart-img
            :src="platillo.thumbnail_image"
            :classes="'none'"
            :style="platilloImgStyle"
            :width="'220'"
          />
        </div>
        <div class="platillo-info px-2 border bg-light">
          <p class="my-1">{{ platillo.name }}</p>
          <p class="platillo-price text-muted mb-2">{{ '$' + platillo.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.platillo-card {
  cursor: pointer;
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
