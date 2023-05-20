<script>
export default {
  props: {
    dividerName: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div class="text-center text-muted mt-5 mb-4">
    <hr class="mx-auto m-2 border border-dark border-1" style="width: 5rem" />
    <p v-text="dividerName" />
  </div>
</template>

<style scoped>
p {
  text-transform: uppercase;
  font-size: 14px;
}
</style>
