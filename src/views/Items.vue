<template>
  <div class="container">
    <div class="col-10 col-lg-7 mx-auto justify-content-center mt-4 mb-2">
      <div class="d-flex">
        <div class="col-auto text-center pt-1" id="hidden">
          <button
            class="btn btn-outline-secondary fw-bold pt-0 pb-0 ms-2"
            type="button"
            @click="$router.push('/menu')"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div class="col-auto mx-auto text-center">
          <span
            v-text="$route.params.item"
            class="fs-3 text-uppercase fw-bold text-danger"
          />
        </div>
        <div class="col-auto text-center pt-1">
          <button
            class="btn btn-outline-secondary fw-bold pt-0 pb-0 me-2"
            type="button"
            @click="$router.push('/menu')"
          >
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mb-4">
      <div class="col-10 col-lg-7 mb-4">
        <img
          :srcset="`/heros/${this.$route.params.item}.jpeg`"
          :src="placeHolderSrc"
          class="img-fluid rounded-3"
          width="1080"
          height="1080"
        />
      </div>
      <hr
        class="col-7 col-md-9 col-lg-9 col-xl-10 border border-success border-2 ms-4 me-4"
      />
    </div>
    <table class="row justify-content-evenly ms-5 me-5">
      <tr v-for="item in items" :key="item.name" class="col-lg-4 col-md-6 mb-2">
        <div class="text-center">
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

<style scoped>
#hidden {
  visibility: hidden;
}
</style>
