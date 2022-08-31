<template>
  <div class="container">
    <div class="row">
      <div>
        <h2 class="fw-bold">Menu</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-9 col-md-6 col-lg-5">
        <img
          :src="platillos.image"
          class="img-thumbnail p-1 border border-0 rounded-3"
          :alt="platillos.name"
          width="1080"
          height="720"
        />
        <br />
        <button
          class="btn btn-outline-success m-2 p-1 ps-3 pe-3 fw-bold"
          type="button"
          v-text="platillos.name"
          @click="$router.push(`/${platillos.name}`)"
        ></button>
        <p v-text="platillos.description"></p>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <div
        v-for="category in categories"
        :key="category.name"
        class="col-6 col-lg-3 me-lg-1 col-md-4 mb-3 p-1"
      >
        <img
          :src="category.image"
          class="img-thumbnail rounded-3 border border-0"
          :alt="category.name"
          width="320"
          height="320"
        />
        <br />
        <button
          class="btn btn-outline-success m-2 p-1 ps-3 pe-3 fw-bold"
          type="button"
          v-text="category.name"
          @click="$router.push(`/${category.name}`)"
        ></button>
        <p v-text="category.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from '../api/categories';

export default {
  name: 'Home-V',
  data() {
    return {
      categories: [],
      platillos: {},
    };
  },
  async mounted() {
    this.categories = await Categories.GetCategories();
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
