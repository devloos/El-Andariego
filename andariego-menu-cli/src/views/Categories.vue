<template>
  <header class="container-fluid mb-3 p-0">
    <div
      class="p-2 ps-3 bg-image text-start text-white fw-bold fs-3 text-uppercase"
      style="
        background-image: url(../assets/Header-bg.jpeg);
        height: 150px;
        background-size: cover;
      "
    >
      El Andariego
    </div>
  </header>
  <div class="container">
    <!-- <div class="row mb-3">
      <img
        src="../assets/Truck.jpeg"
        class="img-thumbnail rounded-3 border border-0"
        alt="El-Andariego-Truck"
      />
    </div> -->
    <div class="row">
      <div>
        <h2 class="fw-bold">Menu</h2>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <div
        v-for="category in categories"
        :key="category.name"
        class="col-lg-4 col-md-6 mt-1"
      >
        <img
          :src="category.url"
          class="img-thumbnail rounded-3 border border-0"
          :alt="category.name"
        />
        <br />
        <button
          class="btn btn-outline-success m-2 p-1 ps-3 pe-3 fw-bold"
          type="button"
          v-text="category.name"
          @click="$router.push(`${category.name}`)"
        ></button>
        <p v-text="category.description"></p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import Categories from '../categories';

export default {
  name: 'HomeView',
  data() {
    return {
      categories: [],
    };
  },
  async mounted() {
    this.categories = await Categories.GetCategories();
    this.categories.forEach((category) => {
      category.url = `../assets/thumbnails/${category.name}.jpeg`;
    });
  },
};
</script>
