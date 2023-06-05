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
  <div class="flex flex-col">
    <label class="text-sm font-medium leading-6 text-gray-900">
      {{ label }}
    </label>
    <input
      :value="modelValue"
      class="rounded-md border border-gray-300 px-3 py-1.5 text-gray-900 shadow-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      :type="type"
      required
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
