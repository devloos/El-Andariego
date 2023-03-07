<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <h5 class="text-center fw-bold">SORRY, Page Not Found!</h5>
      <p class="text-muted text-center">
        If you typed the URL directly, please make sure the spelling is correct.
      </p>
      <div class="text-center">
        <span>
          <a href="#">
            <span class="fw-bold"> Back To Homepage </span>
          </a>
        </span>
        <span>
          <i class="fa-solid fa-arrow-left fa-beat ms-1"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  setup() {
    useHead({
      title: 'Page Not Found | El Andariego',
      meta: [
        {
          name: 'description',
          content: 'Page Not Found El Andariego',
        },
      ],
    });
  },
};
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: #006847;
  text-decoration: none;
}
</style>
