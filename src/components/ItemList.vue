<script>
import { prettyContent } from '@/assets/js/mixins';

export default {
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
        if (!to.params?.category) {
          return;
        }

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

<template>
  <div
    class="container mx-auto mt-6 grid grid-cols-1 gap-5 px-4 pt-4 sm:grid-cols-2 md:px-8 lg:grid-cols-3 xl:gap-8 xl:px-32"
  >
    <div v-for="item in items" :key="item.name" class="relative">
      <div class="mb-4 flex justify-between">
        <p class="font-bold text-main">{{ item.name }}</p>
        <p>{{ `($${item.price})` }}</p>
      </div>
      <p class="mb-5 font-semibold">{{ item.content }}</p>
      <hr class="border-1 border-gray-700" />
    </div>
  </div>
</template>

<style scoped>
hr {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
</style>
