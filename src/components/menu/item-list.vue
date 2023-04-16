<template>
  <div class="mt-2">
    <h4 v-text="category" class="text-center fw-bold mt-5 mb-2"></h4>
    <smart-img :src="category_image" :classes="'img-fluid mb-5 rounded-2'" />
    <div class="row justify-content-evenly px-2">
      <div v-for="item in items" :key="item.name" class="item col-lg-4 col-md-6 mb-2">
        <div class="row justify-content-between text-center">
          <p class="success col-auto fw-bold" v-text="item.name" />
          <p class="col-auto" v-text="' ($' + item.price + ')'" />
        </div>
        <p class="mb-5" v-text="item.content" />
        <hr class="border border-dark mx-auto" />
      </div>
    </div>
  </div>
</template>

<script>
import smartImg from '@/components/smart-img.vue';
import { prettyContent } from '@/assets/js/mixins';

export default {
  components: {
    smartImg,
  },
  props: {
    category: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      items: [],
      category_image: null,
    };
  },
  watch: {
    $route: {
      async handler(to) {
        if (to.params.category === 'Platillos') {
          this.getItemsByCategory('/api/menu/platillos');
        } else {
          this.getItemsByCategory(`/api/menu/items/${to.params.category}`);
        }

        const res = await this.$_andariego_axios({
          url: `/api/menu/category/${to.params.category}`,
        });

        this.category_image = res.data[0].hero_image;
      },
      immediate: true,
    },
  },
  methods: {
    async getItemsByCategory(url) {
      try {
        const response = await this.$_andariego_axios({
          url,
        });

        this.items = response.data;

        this.items.forEach((item) => {
          item.content = prettyContent(item.content);
        });
      } catch (e) {
        this.$_andariego_toast('Failed to fetch items.', { type: 'error' });
      }
    },
  },
};
</script>

<style scoped>
#horizontal-scroll {
  overflow: auto;
  white-space: nowrap;
}

h4 {
  color: #76070a;
}

.success {
  color: #1a532e;
}

.border-danger {
  background-color: #76070a;
  opacity: 0.2;
}

.item {
  position: relative;
}

hr {
  position: absolute;
  bottom: 0px;
  left: 13px;
  right: 13px;
}
</style>
