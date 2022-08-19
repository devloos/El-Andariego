<template>
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-10">
        <img src="" ref="HeroImage" class="rounded-3 w-100" :alt="HeroImage" />
      </div>
    </div>
    <div class="row justify-content-center mb-4">
      <button
        class="col-3 btn btn-outline-secondary fw-bold"
        type="button"
        @click="$router.push('/')"
      >
        Back To Categories
      </button>
    </div>
    <div class="row justify-content-center ms-5 me-5">
      <span v-text="$route.name" class="mb-2 fs-3 text-uppercase fw-bold text-danger" />
      <hr class="border border-success border-2 ms-4 me-4" />
    </div>
    <table class="row justify-content-evenly ms-5 me-5">
      <tr v-for="item in items" :key="item.name" class="col-4 mb-2">
        <div>
          <span class="fs-6 m-1 fw-bold text-success" v-text="item.name" />
          <span class="fs-6 m-1" v-text="' ($' + item.price + ')'" />
          <p class="fs-6 m-1" v-text="item.content" />
          <p class="fs-6 mt-4">..............................................</p>
        </div>
      </tr>
    </table>
  </div>
</template>

<script>
import Items from '../items';

export default {
  name: 'Items-View',
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    this.items = await Items.GetItemsByCategory(this.$route.name);
    this.$refs.HeroImage.src = `/assets/${this.$route.name}.jpeg`;
  },
};
</script>
