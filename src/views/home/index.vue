<template>
  <div class="container-fluid">
    <hero-section />
    <platillos-slider />
    <div class="row d-grid">
      <div class="col-lg-9 col-xl-7 my-3 mx-auto">
        <div class="card text-center">
          <div class="card-header fw-bold">NEW SATURDAY LOCATION</div>
          <div class="card-body">
            <h5 class="card-title">Village San Juan Capistrano</h5>
            <p class="card-text">
              El Andariego is coming to Village San Juan Capistrano, we will be stationed
              at:
              <br />
              26295 Marina Rd, San Juan Capistrano, CA 92675
            </p>
          </div>
          <div class="my-3">
            <button
              class="col-5 col-sm-3 btn btn-success mx-auto d-block"
              @click="$router.push('/menu')"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>
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
      <div class="col">
        <hr class="col-1 mx-auto d-block m-2 border border-dark border-1" />
        <p class="text-center text-muted fs-6">Find El Andariego</p>
      </div>
      <div class="col-12 col-lg-10 col-xl-8 mx-auto d-block">
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

export default {
  name: 'home-index',
  components: {
    heroSection,
    platillosSlider,
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
