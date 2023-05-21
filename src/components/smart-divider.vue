<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
  },
};
</script>

<template>
  <div class="my-5 text-center">
    <hr class="m-2 mx-auto w-20 border border-neutral-400" />
    <p class="text-sm font-semibold uppercase" v-text="name" />
  </div>
</template>
