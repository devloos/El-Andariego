<script setup>
import { RouterLink } from 'vue-router';
const year = new Date().getFullYear();
</script>

<template>
  <hr class="my-16" />
  <footer
    class="mx-auto grid max-w-7xl grid-cols-2 gap-3 gap-y-10 px-6 text-sm sm:px-10 md:grid-cols-4 lg:justify-items-center lg:text-lg"
  >
    <div class="flex flex-col gap-3">
      <h5 class="mb-3 font-semibold">Navigation</h5>
      <div class="flex flex-col items-start gap-1 lg:text-base">
        <router-link class="hover:text-accent-dark" to="/">Home</router-link>
        <router-link class="hover:text-accent-dark" to="/menu">Menu</router-link>
        <router-link class="hover:text-accent-dark" to="/blog">Blog</router-link>
        <router-link class="hover:text-accent-dark" to="/contact">Contact</router-link>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h5 class="mb-3 font-semibold">Information</h5>
      <div class="flex flex-col items-start gap-1 lg:text-base">
        <p
          class="cursor-pointer transition-all hover:font-semibold"
          @click.prevent="$_andariego_copyPhone"
        >
          949-806-0123
        </p>
        <router-link class="hover:text-accent-dark" to="/contact">Careers</router-link>
        <router-link class="hover:text-accent-dark" to="/contact">Catering</router-link>
      </div>
    </div>
    <div class="flex flex-col gap-3 md:order-first">
      <h5 class="mb-3 font-semibold">El Andariego</h5>
      <div class="flex gap-4 text-base lg:text-lg">
        <a href="https://www.facebook.com/profile.php?id=100082710796984" target="_blank">
          <i class="fa-brands fa-facebook fa-md"></i>
        </a>
        <a href="https://instagram.com/el_andariegotruck" target="_blank">
          <i class="fa-brands fa-instagram fa-md"></i>
        </a>
        <a href="https://g.page/r/CY53oo_JlDb8EAI/review" target="_blank">
          <i class="fa-brands fa-google fa-sm"></i>
        </a>
      </div>
      <!-- Had to do it this way not sure why -->
      <div class="flex grow items-end text-xs sm:w-4/5">
        <p>
          Copyright © <span>{{ year }}</span> by El Andariego. All rights reserved.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-3 md:order-first">
      <h5 class="mb-3 font-semibold">Business Hours</h5>
      <p class="sm:w-4/5 lg:text-base">
        31345 Los Rios St, San Juan Capistrano, CA 92675
      </p>
      <div class="lg:text-base">
        <p>Monday: Closed</p>
        <p>Tuesday &middot; Sunday: Open</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
a {
  transition: all 150ms linear;
}

a:hover {
  color: #71706a;
}
</style>
