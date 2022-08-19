<template>
  <div class="container">
    <div class="row justify-content-evenly">
      <div v-for="category in categories" :key="category.name" class="col-4 mt-1">
        <img
          src="../assets/320by320.jpeg"
          class="img-thumbnail rounded-3 border border-0"
          alt="320"
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
  },
};
</script>
