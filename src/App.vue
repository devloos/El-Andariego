<template>
  <Nav />
  <!-- Calling Router View -->
  <router-view id="main" />
  <!-- End Call Router View -->
  <Footer />
</template>

<script>
import Nav from './views/nav/Nav.vue';
import Footer from './views/footer/Footer.vue';

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
#main {
  min-height: 100vh;
}
</style>
