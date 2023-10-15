<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="mb-8 mt-14 text-center">
    <hr class="m-2 mx-auto w-20 border border-neutral-400" />
    <p class="text-sm font-semibold uppercase">{{ name }}</p>
  </div>
</template>
