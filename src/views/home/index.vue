<template>
  <div class="container-fluid">
    <hero-section />
    <platillos-slider />

    <div id="img-slider" class="carousel slide px-2 my-5" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#img-slider" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#img-slider" data-bs-slide-to="1"></li>
        <li data-bs-target="#img-slider" data-bs-slide-to="2"></li>
        <li data-bs-target="#img-slider" data-bs-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/home/carousel/logo.jpg" class="img-fluid" alt="slider-img" />
        </div>
        <div v-for="(image, i) in sliderImages" :key="i" class="carousel-item">
          <img :src="image" class="img-fluid" alt="slider-img" />
        </div>
      </div>
    </div>

    <category-selector />

    <div class="row px-2 my-5">
      <div class="col-12">
        <hr class="mx-auto m-2 border border-dark border-1" style="width: 5rem" />
        <p class="text-center text-muted">Find El Andariego</p>
      </div>
      <div class="col-12 col-lg-10 col-xl-8 mx-auto">
        <img
          src="/home/Location.png"
          class="img-fluid"
          alt="La Zanja San Juan Capistrano, CA 92675 US"
        />
      </div>
    </div>
  </div>
</template>

<script>
import heroSection from '@/views/home/hero-section.vue';
import platillosSlider from '@/views/home/platillos-slider.vue';
import categorySelector from '@/views/home/category-selector.vue';

export default {
  name: 'home-index',
  components: {
    heroSection,
    platillosSlider,
    categorySelector,
  },
  data() {
    return {
      sliderImages: [
        '/home/carousel/card.jpg',
        '/home/carousel/sopes.jpg',
        '/home/carousel/truck.jpg',
      ],
    };
  },
};
</script>

<style scoped>
.btn {
  transition: opacity 0.15s;
}

.btn-success {
  background-color: #1a532e;
  border-color: #1a532e;
}

.btn:hover {
  opacity: 0.6;
}
</style>
