<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <component :is="name" class="smart-svg" />
</template>

<style>
.smart-svg {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
}
</style>
