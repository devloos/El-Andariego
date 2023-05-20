<script>
export default {
  props: {
    showOffCanvas: Boolean,
  },
  emits: ['toggle-offcanvas'],
};
</script>

<template>
  <div
    class="absolute inset-x-0 top-0 z-50 mx-auto flex h-20 content-center items-center justify-between bg-white px-3 pb-4 pt-7 lg:px-8 xl:px-12"
  >
    <router-link class="text-2xl font-bold text-main" to="/">El Andariego</router-link>
    <div
      class="invisible hidden lg:visible lg:flex lg:content-center lg:items-center lg:gap-11"
    >
      <router-link class="text-lg font-semibold hover:text-accent-dark" to="/">
        Home
      </router-link>
      <router-link class="text-lg font-semibold hover:text-accent-dark" to="/menu">
        Menu
      </router-link>
      <router-link class="text-lg font-semibold hover:text-accent-dark" to="/blog">
        Blog
      </router-link>
      <router-link class="text-lg font-semibold hover:text-accent-dark" to="/contact">
        Contact
      </router-link>
      <button
        class="rounded-md bg-main px-6 py-2 font-semibold text-white hover:bg-main-light"
        type="button"
        @click="$_andariego_copyPhone"
      >
        GIVE US A CALL
      </button>
    </div>
    <button
      class="hamburger hamburger--squeeze"
      :class="{ 'is-active': showOffCanvas }"
      type="button"
      @click="$emit('toggle-offcanvas')"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/hamburgers.scss';

@media (min-width: 1024px) {
  .hamburger {
    display: none;
    visibility: hidden;
  }
}
</style>
