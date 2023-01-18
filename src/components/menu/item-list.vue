<template>
  <div class="mt-2">
    <h4 v-text="category" class="text-center fw-bold my-5"></h4>
    <div class="row justify-content-evenly px-2">
      <div v-for="item in items" :key="item.name" class="item col-lg-4 col-md-6 mb-2">
        <div class="row justify-content-between text-center">
          <p class="success col-auto fw-bold" v-text="item.name" />
          <p class="col-auto" v-text="' ($' + item.price + ')'" />
        </div>
        <p class="mb-5" v-text="item.content" />
        <hr class="border border-dark mx-auto" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      items: [],
    };
  },

  watch: {
    $route: {
      handler(to) {
        if (to.params.category === 'Platillos') {
          this.getItemsByCategory('/api/menu/platillos');
          return;
        }
        this.getItemsByCategory(`/api/menu/items/${to.params.category}`);
      },
      immediate: true,
    },
  },
  methods: {
    async getItemsByCategory(url) {
      try {
        const response = await this.$_andariego_axios({
          url,
        });

        this.items = response.data;
      } catch (e) {
        // todo toast
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
#horizontal-scroll {
  overflow: auto;
  white-space: nowrap;
}

h4 {
  color: #c8102e;
}

.success {
  color: #006847;
}

.border-danger {
  background-color: #c8102e;
  opacity: 0.2;
}

.item {
  position: relative;
}

hr {
  position: absolute;
  bottom: 0px;
  left: 13px;
  right: 13px;
}
</style>
