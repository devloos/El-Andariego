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
};
</script>

<style></style>
