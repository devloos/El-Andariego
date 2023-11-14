<script setup>
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import SmartTransition from '@/components/smart/SmartTransition.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const layout = computed(() => route.meta.layout || 'DefaultLayout');
</script>

<template>
  <div>
    <LoadingOverlay />
    <component :is="layout">
      <RouterView v-slot="{ Component }" class="router-view">
        <SmartTransition name="fade" mode="out-in">
          <component :is="Component" />
        </SmartTransition>
      </RouterView>
    </component>
  </div>
</template>

<style lang="scss" scoped>
.router-view {
  min-height: calc(100vh - 460px);
}
</style>
