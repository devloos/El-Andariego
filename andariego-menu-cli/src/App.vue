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
  methods: {
    async CopyPhone() {
      try {
        await navigator.clipboard.writeText('949-806-0123');
      } catch (err) {
        alert('Could not copy');
      }
    },
  },
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
