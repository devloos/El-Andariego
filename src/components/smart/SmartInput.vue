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
  modelValue: {
    type: [String, Number, Boolean],
    required: true,
  },
});

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">
        {{ label }}
      </span>
    </label>
    <input
      :value="modelValue"
      class="input input-bordered w-full"
      :type="type"
      required
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
