<script setup>
import { computed } from 'vue';
import SmartSvg from '@/components/smart/SmartSvg.vue';

const types = {
  success: {
    class: 'alert-success',
    name: 'SuccessIcon',
  },
  info: {
    class: 'alert-info',
    name: 'InfoIcon',
  },
  warning: {
    class: 'alert-warning',
    name: 'WarningIcon',
  },
  error: {
    class: 'alert-error',
    name: 'ErrorIcon',
  },
};

const props = defineProps({
  type: {
    type: String,
    default: 'success',
  },
  message: {
    type: String,
    required: true,
  },
});

const typeClass = computed(() => {
  return types[props.type].class;
});

const svgName = computed(() => {
  return types[props.type].name;
});
</script>

<template>
  <div
    class="alert fixed bottom-0 right-0 z-50 sm:bottom-10 sm:right-5 sm:max-w-sm"
    :class="typeClass"
  >
    <SmartSvg :name="svgName" />
    <span>{{ props.message }}</span>
  </div>
</template>

<style></style>
