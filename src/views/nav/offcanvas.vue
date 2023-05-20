<script setup></script>

<template>
  <div class="absolute bottom-0 left-0 top-20 z-50 w-full overflow-scroll bg-white">
    <div
      class="mt-14 flex flex-col items-center gap-9 text-center text-3xl font-semibold"
    >
      <router-link class="hover:text-accent-dark" to="/">Home</router-link>
      <router-link class="hover:text-accent-dark" to="/menu">Menu</router-link>
      <router-link class="hover:text-accent-dark" to="/blog">Blog</router-link>
      <router-link class="hover:text-accent-dark" to="/contact">Contact</router-link>
      <div class="my-3 flex justify-center gap-4">
        <a href="https://www.facebook.com/profile.php?id=100082710796984" target="_blank">
          <i class="fa-brands fa-facebook fa-sm"></i>
        </a>
        <a href="https://instagram.com/el_andariegotruck" target="_blank">
          <i class="fa-brands fa-instagram fa-sm"></i>
        </a>
        <a href="https://g.page/r/CY53oo_JlDb8EAI/review" target="_blank">
          <i class="fa-brands fa-google fa-xs"></i>
        </a>
      </div>
      <button
        class="rounded-md bg-main px-6 py-3 text-xl text-white hover:bg-main-light"
        type="button"
        @click="$_andariego_copyPhone"
      >
        GIVE US A CALL
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a:hover {
  color: #71706a;
}
</style>
