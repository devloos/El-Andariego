<template>
  <!-- Calling Router View -->
  <router-view />
  <!-- End Call Router View -->
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
