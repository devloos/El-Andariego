<template>
  <Nav />
  <!-- Calling Router View -->
  <router-view />
  <!-- End Call Router View -->
  <Footer />
</template>

<script>
import Nav from './views/Nav.vue';
import Footer from './views/Footer.vue';

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
}
</style>
