<template>
  <div class="px-2 my-3">
    <h4>Top Categories</h4>
    <div class="row justify-content-center text-center gap-3">
      <div v-for="category in categories" :key="category.name" class="col-5 bg-light p-3">
        <div>
          <img src="categories.png" width="180" alt="" />
        </div>
        <div>
          <p class="m-0">{{ category.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: 'Platillos',
          image: 'categories/platillos.jpeg',
        },
        {
          name: 'Burritos',
          image: 'categories/burritos.jpeg',
        },
        {
          name: 'Tacos',
          image: 'categories/tacos.jpeg',
        },
        {
          name: 'Tortas',
          image: 'categories/tortas.jpeg',
        },
        {
          name: 'Sopes',
          image: 'categories/sopes.jpeg',
        },
        {
          name: 'Quesadillas',
          image: 'categories/quesadillas.jpeg',
        },
      ],
    };
  },
};
</script>

<style></style>
