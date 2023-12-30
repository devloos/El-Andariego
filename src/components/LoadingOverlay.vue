<script setup>
import SmartTransition from '@/components/smart/SmartTransition.vue';
import { watch } from 'vue';

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});

watch(
  () => props.loading,
  (newValue) => {
    document.body.style.overflow = newValue ? 'hidden' : 'visible';
  },
);
</script>
<template>
  <Teleport to="body">
    <SmartTransition>
      <div
        v-if="loading"
        class="fixed inset-0 z-50 bg-accent-200/[.5] backdrop-blur-[2px]"
      >
        <div class="flex h-full w-full items-center justify-center">
          <span class="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    </SmartTransition>
  </Teleport>
</template>
