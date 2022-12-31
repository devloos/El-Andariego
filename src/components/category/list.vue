<template>
  <div class="mt-2">
    <div class="mt-2 mb-5">
      <p id="subtitle" v-text="category" class="text-center text-danger"></p>
    </div>
    <table class="row justify-content-evenly ms-5 me-5">
      <tr v-for="item in list" :key="item.name" class="col-lg-4 col-md-6 mb-2">
        <div class="text-center">
          <span class="fs-6 m-1 fw-bold text-success" v-text="item.name" />
          <span class="fs-6 m-1" v-text="' ($' + item.price + ')'" />
          <p class="fs-6 m-1 w-75 mx-auto" v-text="item.content" />
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
    list: {
      type: Array,
      default: null,
    },
    category: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
#subtitle {
  font-family: verdana;
  font-size: 24px;
  font-weight: 700;
  color: #f5f5f5;
  text-shadow: 1px 1px 1px #515151, 1px 2px 1px #515151;
}
#horizontal-scroll {
  overflow: auto;
  white-space: nowrap;
}
</style>
