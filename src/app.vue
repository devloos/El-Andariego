<script>
import { useHead } from '@vueuse/head';
import navbar from '@/views/nav/navbar.vue';
import offcanvasNav from '@/views/nav/offcanvas-nav.vue';
import footerIndex from '@/views/footer.vue';

export default {
  setup() {
    useHead({
      title: 'El Andariego',
      meta: [
        {
          name: 'description',
          content: 'Authentic Mexican Food Truck',
        },
      ],
    });
  },
  components: {
    navbar,
    offcanvasNav,
    footerIndex,
  },
  data() {
    return {
      active: true,
    };
  },
  created() {
    window.addEventListener('resize', this.handleScreenResize);
  },
  watch: {
    $route() {
      this.active = true;
    },
  },
  methods: {
    handleScreenResize() {
      if (window.innerWidth > 800) {
        this.active = true;
      }
    },
  },
};
</script>

<template>
  <navbar @toggle-offcanvas="active = !active" :activeBurger="!active" />
  <main v-show="active">
    <router-view />
    <div class="footer">
      <footer-index />
    </div>
  </main>
  <transition>
    <offcanvas-nav v-if="!active" />
  </transition>
</template>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  padding-top: 116.5px;
  /* Needed for white space on the right */
  /* Messes with sticky-top */
  overflow-x: hidden;
}
</style>

<style scoped>
main {
  min-height: 100vh;
}

.footer {
  background-color: white;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
