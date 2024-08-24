<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const model = defineModel({ type: [String, Number, Boolean], required: true });
</script>

<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">
        {{ label }}
      </span>
    </label>
    <input v-model="model" class="input input-bordered w-full" :type="type" required />
  </div>
</template>
