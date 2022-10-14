<template>
  <div class="container">
    <div class="row mt-4 mb-5">
      <header>
        <h1 id="title" class="text-center text-success text-uppercase">Menu</h1>
        <!-- <p class="col-10 col-md-7 col-lg-5 col-xl-4 mx-auto mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nostrum
          corporis voluptate. Iste, necessitatibus quae. Nemo commodi impedit neque
          dolores minima facere deleniti, quas a ullam vitae blanditiis fugiat error.
        </p>
        <p class="col-10 col-md-7 col-lg-5 col-xl-4 mx-auto mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nostrum
          corporis voluptate. Iste, necessitatibus quae. Nemo commodi impedit neque
          dolores minima facere deleniti, quas a ullam vitae blanditiis fugiat error.
        </p> -->
      </header>
      <div class="text-center">
        <p class="mt-3 mb-0 text-center fw-bold text-uppercase">Categories</p>
        <i class="fa-solid fa-angle-down"></i>
      </div>
      <div id="horizontal-scroll" class="col-8 col-lg-4 mt-1 mx-auto">
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
import Menu from '@/api/el-andariego/Menu';
import categories from '@/components/menu/List.vue';
import blankPixel from '@/utility/PlaceHolder';

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
      this.menu = await Menu.get();
      this.menu.sort((list, list2) => list.priority - list2.priority);
    },
    async getCategories() {
      this.categories = await Menu.getCategories();
      this.categories.sort(
        (category, category2) => category.priority - category2.priority
      );
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
#horizontal-scroll {
  overflow: auto;
  white-space: nowrap;
}
a {
  color: inherit;
}
a:hover {
  color: green;
  cursor: pointer;
}
</style>
