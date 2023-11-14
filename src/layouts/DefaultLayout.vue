<script setup>
import SmartNav from '@/components/smart/SmartNav.vue';
import SmartFooter from '@/components/smart/SmartFooter.vue';
</script>

<template>
  <div>
    <SmartNav />
    <slot />
    <SmartFooter />
  </div>
</template>
