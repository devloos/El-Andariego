<template>
  <div class="flex h-96 w-full items-center justify-center">
    <span class="loader"></span>
  </div>
</template>

<style>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #333;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
