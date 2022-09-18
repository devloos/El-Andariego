<template>
  <div class="container">
    <div class="row">
      <div>
        <h2 class="text-success fw-bold">Menu</h2>
      </div>
    </div>
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
import Categories from '../api/el-andariego/categories';
import blankPixel from '../utility/PlaceHolder';

export default {
  name: 'Categories-V',
  data() {
    return {
      categories: [],
      platillos: {},
      placeHolderSrc: blankPixel,
    };
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
</style>
