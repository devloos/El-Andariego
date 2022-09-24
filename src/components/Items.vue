<template>
  <div class="row d-flex justify-content-center gap-1 gap-sm-3 gap-lg-4 ms-sm-5 me-sm-5">
    <h5 class="m-3 ms-5" v-text="category"></h5>
    <div
      class="col-12 col-sm-12 col-lg-5 card rounded-0"
      v-for="item in items"
      :key="item.name"
    >
      <div class="card-body p-1 pt-3 pb-3">
        <div class="d-flex justify-content-between">
          <div class="me-2 ms-2 ms-lg-0 me-lg-0">
            <p class="card-title fw-semibold" v-text="item.name"></p>
            <p class="card-text mb-1" v-text="item.content"></p>
            <p class="card-text text-muted" v-text="'$' + item.price"></p>
          </div>
          <div class="d-flex align-items-center me-1">
            <img :src="categoryImage" class="mx-auto" alt="..." width="90" height="90" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Items from '@/api/el-andariego/items';

export default {
  name: 'Items-C',
  data() {
    return {
      items: [],
    };
  },
  props: {
    category: {
      type: String,
      default: null,
    },
    categoryImage: {
      type: String,
      default: null,
    },
  },
  async mounted() {
    this.items = await Items.GetByCategory(this.category);
  },
};
</script>
