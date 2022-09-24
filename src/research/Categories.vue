<template>
  <div class="container-fluid p-0">
    <div class="row mt-4">
      <div>
        <h2 class="text-center text-success fw-bold">Menu</h2>
      </div>
    </div>
    <div id="horizontal-scroll">
      <button
        v-for="category in categories"
        :key="category.name"
        class="btn btn-outline-success m-1"
        @click="$router.push(`/items/${category.name}`)"
      >
        <h5 v-text="category.name"></h5>
      </button>
    </div>

    <div v-for="category in categories" :key="category.name">
      <Items :category="category.name" :categoryImage="category.image" />
    </div>
  </div>
</template>

<script>
import Categories from '@/api/el-andariego/categories';
import Items from '@/components/Items.vue';
import blankPixel from '@/utility/PlaceHolder';

export default {
  name: 'Categories-V',
  data() {
    return {
      categories: [],
      platillos: {},
      placeHolderSrc: blankPixel,
    };
  },
  components: {
    Items,
  },
  async mounted() {
    this.categories = await Categories.Get();
    const res = await Categories.GetPlatillos();
    this.platillos = {
      name: res[0].name,
      description: res[0].description,
      image: res[0].image,
    };
    this.categories.sort((cat1, cat2) => cat1.priority - cat2.priority);
  },
};
</script>

<style scoped>
p {
  font-size: 14px;
}
.card:hover {
  transform: scale(1.01);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.06);
}
#horizontal-scroll {
  overflow: auto;
  white-space: nowrap;
}
</style>
