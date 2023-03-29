<template>
  <div class="mt-5 mb-4">
    <hr class="mx-auto m-2 border border-dark border-1" style="width: 5rem" />
    <p class="text-center text-muted" v-text="divider_name"></p>
  </div>
</template>

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
