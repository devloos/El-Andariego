<template>
  <div class="container">
    <div class="my-2 mb-5 px-2">
      <h1 class="text-center fw-bold mb-5">MENU</h1>
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

<script>
import itemList from '@/components/menu/item-list.vue';
import blankPixel from '@/utility/place-holder';
import { useHead } from '@vueuse/head';

export default {
  name: 'Menu-V',
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
  components: {
    itemList,
  },
  data() {
    return {
      categories: [],
      placeHolderSrc: blankPixel,
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
        this.categories.sort(
          (category, category2) => category.priority - category2.priority
        );
      } catch (e) {
        // todo toast
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #006847;
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
}

.router-link:hover {
  color: #006847;
}

.active {
  text-decoration: underline;
  color: #006847;
  font-weight: bold;
}
</style>
