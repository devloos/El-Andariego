<template>
  <div class="container-fluid">
    <hero-section />
    <platillos-slider />
    <div class="row px-2 mt-5">
      <div
        id="Home-Slider"
        class="col-12 col-lg-10 col-xl-8 carousel carousel-dark slide mx-auto d-block mb-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/home/slider/Logo.jpeg" class="img-fluid" alt="..." />
          </div>
          <div v-for="(image, i) in sliderImages" :key="i" class="carousel-item">
            <img :src="image" class="img-fluid" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#Home-Slider"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#Home-Slider"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>

    <category-selector />

    <div class="row px-2">
      <div class="col-12">
        <hr class="mx-auto m-2 border border-dark border-1" style="width: 5rem" />
        <p class="text-center text-muted fs-6">Find El Andariego</p>
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
      sliderImages: ['/home/slider/Tacos.jpeg', '/home/slider/Cubana.png'],
    };
  },
};
</script>

<style scoped>
.btn {
  transition: opacity 0.15s;
}

.btn-success {
  background-color: #006847;
  border-color: #006847;
}

.btn:hover {
  opacity: 0.6;
}
</style>
