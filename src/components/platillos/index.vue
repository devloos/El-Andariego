<template>
  <div v-if="platillo">
    {{ platillo }}
  </div>
</template>

<script>
export default {
  name: 'platillos-index',
  data() {
    return {
      platillo: null,
    };
  },
  mounted() {
    this.getPlatillo();
  },
  methods: {
    async getPlatillo() {
      try {
        const response = await this.$_andariego_axios({
          url: `/api/menu/platillos/${this.$route.params.name}`,
        });

        this.platillo = response.data;
      } catch (e) {
        // todo toast
        console.log(e);
      }
    },
  },
};
</script>

<style></style>
