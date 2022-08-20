<template>
  <header class="container-fluid mb-3 p-0">
    <div
      class="p-2 ps-3 bg-image text-start text-white fw-bold fs-3 text-uppercase"
      style="
        background-image: url(/Header-bg.jpeg);
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
    <div class="row justify-content-center">
      <div class="col-10 col-sm-9 col-md-6 col-lg-5">
        <img
          :src="platillos.image"
          class="img-thumbnail p-1 border border-0 rounded-3"
          :alt="platillos.name"
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
import Categories from '../categories';

export default {
  name: 'HomeView',
  data() {
    return {
      categories: [],
      platillos: {},
    };
  },
  async mounted() {
    this.categories = await Categories.GetCategories();

    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].name === 'Platillos') {
        this.platillos = this.categories[i];
        this.categories.splice(i, 1);
        break;
      }
    }

    this.categories.forEach((category) => {
      category.description = category.description.substring(
        0,
        category.description.length / 2
      );
    });
  },
};
</script>
