<template>
  <div>
    <div v-text="category" class="h3"></div>
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
export default {
  name: 'Categories-C',
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      category: '',
    };
  },
  watch: {
    items: {
      immediate: true,
      handler(newValue) {
        if (newValue) {
          this.category = newValue[0].category;
          console.log(this.category);
        }
      },
    },
  },
};
</script>
