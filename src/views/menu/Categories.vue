<template>
  <div class="container">
    <div class="row mt-4">
      <div>
        <h2 class="text-center text-success fw-bold">Menu</h2>
      </div>
    </div>
    <category v-for="category in menu" :key="category" :items="category" />
    <div class="row justify-content-center mb-2">
      <button
        class="card border-0 col-10 col-sm-9 col-md-6 col-lg-5"
        @click="$router.push(`/items/${platillos.name}`)"
      >
        <img
          :srcset="platillos.image"
          :src="placeHolderSrc"
          class="card-img-top pt-1"
          :alt="platillos.name"
        />
        <div class="card-body text-dark">
          <h5 class="card-title" v-text="platillos.name"></h5>
          <p class="card-text" v-text="platillos.description"></p>
        </div>
      </button>
    </div>
    <div class="row justify-content-evenly">
      <button
        v-for="category in categories"
        :key="category.name"
        class="card border-0 col-6 col-lg-3 me-lg-1 col-md-4 mb-3 p-1"
        @click="$router.push(`/items/${category.name}`)"
      >
        <img
          :srcset="category.image"
          :src="placeHolderSrc"
          class="card-img-top"
          :alt="category.name"
        />
        <div class="card-body text-dark">
          <h5 class="card-title" v-text="category.name"></h5>
          <p class="card-text" v-text="category.description"></p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import Menu from '@/api/el-andariego/Menu';
import Category from '@/components/menu/Categories.vue';
import blankPixel from '@/utility/PlaceHolder';

export default {
  name: 'Categories-V',
  data() {
    return {
      categories: [],
      platillos: {},
      menu: [],
      placeHolderSrc: blankPixel,
    };
  },
  components: {
    Category,
  },
  async mounted() {
    this.menu = await Menu.get();
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
</style>
