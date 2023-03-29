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

    <smart-divider :divider_name="'Find El Andariego'" />
    <div class="row gap-1 px-2 justify-content-evenly text-lg-center">
      <div class="col-12 col-sm-5">
        <p class="fw-bold text-decoration-underline m-1">San Juan Capistrano</p>
        <p class="m-1">
          <i class="fa-solid fa-location-dot"></i> 31345 Los Rios St, San Juan Capistrano,
          CA 92675
        </p>
        <div>
          <p><i class="fa-solid fa-clock"></i> Friday & Sunday: 4:00 - 11:30 PM</p>
        </div>
      </div>
      <div class="col-12 col-sm-5">
        <p class="fw-bold text-decoration-underline m-1">San Juan Village</p>
        <p class="m-1">
          <i class="fa-solid fa-location-dot"></i> 26392 Shadybrook Rd, San Juan
          Capistrano, CA 92675
        </p>
        <div>
          <p><i class="fa-solid fa-clock"></i> Saturday: 4:00 - 10:30 PM</p>
        </div>
      </div>
      <div class="col-12 col-sm-5">
        <p class="fw-bold text-decoration-underline m-1">Lake Forest</p>
        <p class="m-1">
          <i class="fa-solid fa-location-dot"></i> Raton Dr, Lake Forest, CA 92630
        </p>
        <div>
          <p><i class="fa-solid fa-clock"></i> Thursday: 4:00 - 10:30 PM</p>
        </div>
      </div>
      <div class="col-12 col-sm-5">
        <p class="fw-bold text-decoration-underline m-1">Laguna Hills</p>
        <p class="m-1">
          <i class="fa-solid fa-location-dot"></i> 25705 Via Lomas, Laguna Hills, CA 92653
        </p>
        <div>
          <p><i class="fa-solid fa-clock"></i> Wednesday: 4:00 - 10:30 PM</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heroSection from '@/views/home/hero-section.vue';
import platillosSlider from '@/views/home/platillos-slider.vue';
import categorySelector from '@/views/home/category-selector.vue';
import smartDivider from '@/components/smart-divider.vue';

export default {
  name: 'home-index',
  components: {
    heroSection,
    platillosSlider,
    categorySelector,
    smartDivider,
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
p {
  font-size: 15px;
}
</style>
