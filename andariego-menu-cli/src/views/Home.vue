<template>
  <div class="container border">
    <div class="row justify-content-evenly">
      <div v-for="category in categories" :key="category.name" class="col-3">
        {{ category.name }}
        {{ category.description }}
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
