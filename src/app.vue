<script>
import { useHead } from '@vueuse/head';
import navbar from '@/views/nav/navbar.vue';
import offcanvasNav from '@/views/nav/offcanvas-nav.vue';
import footerIndex from '@/views/footer.vue';

export default {
  components: {
    navbar,
    offcanvasNav,
    footerIndex,
  },
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
  data() {
    return {
      active: true,
    };
  },
  watch: {
    $route() {
      this.active = true;
    },
  },
  created() {
    window.addEventListener('resize', this.handleScreenResize);
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
  <navbar :active-burger="!active" @toggle-offcanvas="active = !active" />
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
