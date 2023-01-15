<template>
  <div class="container">
    <div class="row mt-4 mb-5">
      <header>
        <h1 id="title" class="text-center text-success text-uppercase">Menu</h1>
      </header>
      <div class="hidden-scroll col-8 col-lg-4 mt-1 mx-auto">
        <a
          v-for="category in categories"
          :key="category.name"
          class="mx-1"
          @click="$router.push(`/menu/items/${category.name}`)"
        >
          <span v-text="category.name" />
        </a>
      </div>
    </div>
    <categories
      v-for="items in menu"
      :key="items.category"
      :list="items.list"
      :category="items.category"
    />
  </div>
</template>

<script>
import categories from '@/components/category/list.vue';
import blankPixel from '@/utility/place-holder';

export default {
  name: 'Menu-V',
  data() {
    return {
      menu: [],
      categories: [],
      placeHolderSrc: blankPixel,
    };
  },
  components: {
    categories,
  },
  mounted() {
    this.getMenu();
    this.getCategories();
  },
  methods: {
    async getMenu() {
      try {
        const response = await this.$_andariego_axios({
          url: '/api/menu',
        });

        this.menu = response.data;
        this.menu.sort((list, list2) => list.priority - list2.priority);
      } catch (e) {
        // todo toast
        console.log(e);
      }
    },
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
#title {
  font-family: verdana;
  font-size: 48px;
  font-weight: 700;
  color: #f5f5f5;
  text-shadow: 1px 1px 1px #515151, 1px 2px 1px #515151, 1px 3px 1px #515151;
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
a {
  color: inherit;
}
a:hover {
  color: rgb(20, 97, 20);
  cursor: pointer;
}
</style>
