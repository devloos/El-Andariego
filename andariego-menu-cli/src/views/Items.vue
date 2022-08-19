<template>
  <div class="container">
    <div class="row justify-content-center mb-3 mt-2">
      <div class="col-2">
        <img
          src="/El-Andariego-Logo.jpeg"
          class="border border-secondary border-1 rounded-circle w-75"
          alt="Logo"
        />
      </div>
    </div>
    <div class="row justify-content-center mb-4">
      <div class="col-10">
        <img src="" ref="HeroImage" class="rounded-3 w-100" :alt="HeroImage" />
      </div>
    </div>
    <div class="row justify-content-center mb-4">
      <div class="col-lg-3">
        <button
          class="btn btn-outline-secondary fw-bold"
          type="button"
          @click="$router.push('/')"
        >
          Back To Categories
        </button>
      </div>
    </div>
    <div class="row justify-content-center ms-5 me-5">
      <span v-text="$route.name" class="mb-2 fs-3 text-uppercase fw-bold text-danger" />
      <hr class="border border-success border-2 ms-4 me-4" />
    </div>
    <table class="row justify-content-evenly ms-5 me-5">
      <tr v-for="item in items" :key="item.name" class="col-lg-4 col-md-6 mb-2">
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
    this.$refs.HeroImage.src = `/heros/${this.$route.name}.jpeg`;
  },
};
</script>
