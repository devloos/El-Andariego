<template>
  <Nav />
  <!-- Calling Router View -->
  <div id="main">
    <router-view />
  </div>
  <!-- End Call Router View -->
  <Footer />
</template>

<script>
import Nav from '@/views/nav/index.vue';
import Footer from '@/views/footer/index.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* Needed for white space on the right */
  /* Messes with sticky-top */
  overflow-x: hidden;
}
#main {
  min-height: 100vh;
}
</style>
