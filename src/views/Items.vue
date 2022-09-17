<template>
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-10 col-lg-7">
        <img
          :srcset="`/heros/${this.$route.params.item}.jpeg`"
          :src="placeHolderSrc"
          class="img-fluid rounded-3"
          width="1080"
          height="1080"
        />
      </div>
    </div>
    <div class="row justify-content-center mb-4">
      <div class="col-lg-3">
        <button
          class="btn btn-outline-secondary fw-bold"
          type="button"
          @click="$router.push('/menu')"
        >
          Back To Categories
        </button>
      </div>
    </div>
    <div class="row justify-content-center ms-5 me-5">
      <span
        v-text="$route.params.item"
        class="mb-2 fs-3 text-uppercase fw-bold text-danger"
      />
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
import Items from '../api/el-andariego/items';
import blankPixel from '../utility/PlaceHolder';

export default {
  name: 'Items-V',
  data() {
    return {
      items: [],
      placeHolderSrc: blankPixel,
    };
  },
  async mounted() {
    this.items = await Items.GetByCategory(this.$route.params.item);
  },
};
</script>
