<template>
  <div class="container">
    <div class="row justify-content-center mb-3">
      <div class="col-2">
        <img
          src="./assets/El-Andariego-Logo.jpeg"
          class="border border-secondary border-1 rounded-circle w-75"
          alt="Logo"
        />
      </div>
    </div>
  </div>
  <!-- Calling Router View -->
  <router-view />
  <div class="mt-3 bg-light bg-gradient" style="height: 100px">
    <span class="align-self-center"></span>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
