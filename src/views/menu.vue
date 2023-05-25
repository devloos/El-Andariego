<script>
import ItemList from '@/components/item-list.vue';
import { useHead } from '@vueuse/head';

export default {
  components: {
    ItemList,
  },
  setup() {
    useHead({
      title: 'Menu | El Andariego',
      meta: [
        {
          name: 'description',
          content: 'El Andariego Menu',
        },
      ],
    });
  },
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      try {
        const response = await this.$_andariego_axios({
          url: '/api/menu/categories',
        });

        this.categories = response.data;
        this.categories.sort((a, b) => a.priority - b.priority);
      } catch (e) {
        this.$_andariego_toast('Failed to fetch categories.', {
          type: 'error',
        });
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="my-2 mb-5 px-2">
      <h1 class="fw-bold mb-5 text-center">MENU</h1>
      <div class="d-flex justify-content-lg-center hidden-scroll">
        <span class="mx-2">|</span>
        <a
          v-for="category in categories"
          :key="category.name"
          @click="$router.push(`/menu/${category.name}`)"
        >
          <span
            class="router-link"
            :class="{ active: category.name === $route.params.category }"
          >
            {{ category.name }}
          </span>
          <span class="mx-2">|</span>
        </a>
      </div>
    </div>
    <item-list :category="$route.params.category" />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: #1a532e;
}

.hidden-scroll {
  overflow-x: scroll;
}

.hidden-scroll::-webkit-scrollbar {
  display: none;
}

.hidden-scroll {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.router-link {
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #1a532e;
  }
}

.active {
  text-decoration: underline;
  color: #1a532e;
  font-weight: bold;
}
</style>
