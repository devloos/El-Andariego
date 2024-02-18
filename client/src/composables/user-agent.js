import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

export function useUserAgent() {
  const { width } = useWindowSize();

  const isMobileDimensions = computed(() => width.value < 600);

  return {
    isMobileDimensions,
  };
}
