<script>
export default {
  props: {
    divider_name: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div class="text-center text-muted mt-5 mb-4">
    <hr class="mx-auto m-2 border border-dark border-1" style="width: 5rem" />
    <p class="divider-text" v-text="divider_name"></p>
  </div>
</template>

<style scoped>
.divider-text {
  text-transform: uppercase;
  font-size: 14px;
}
</style>
