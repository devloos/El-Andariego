<template>
  <div class="shimmer-effect rounded" />
</template>

<style>
.shimmer-effect {
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px;
  animation: shimmer 1.8s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -1000px;
  }

  100% {
    background-position: 1000px 0;
  }
}
</style>
