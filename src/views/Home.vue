<template>
  <div class="container pt-5">
    <div class="row d-grid">
      <header class="col">
        <h1 class="text-success fw-bold">El Andariego Truck</h1>
      </header>
      <div class="col mb-4">
        <p class="m-0">Authentic Mexican Food</p>
        <p class="m-0" v-text="scheduleText"></p>
      </div>
      <div class="col mb-5">
        <button
          class="col-4 col-md-3 col-lg-2 btn btn-outline-success"
          @click="$router.push('/menu')"
        >
          View Menu
        </button>
      </div>
      <div
        id="Controls"
        class="col-12 col-lg-10 col-xl-8 carousel carousel-dark slide mx-auto d-block mb-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/home/slider/Logo.jpeg" class="img-fluid" alt="..." />
          </div>
          <div v-for="(image, i) in imageSlider" :key="i" class="carousel-item">
            <img :src="image" class="img-fluid" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#Controls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#Controls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="col">
        <hr class="col-1 mx-auto d-block m-2 border border-dark border-1" />
        <p class="text-muted fs-6">Find El Andariego</p>
      </div>
      <div class="col-12 col-lg-10 col-xl-8 mx-auto d-block">
        <img
          src="/home/Location.png"
          class="img-fluid"
          alt="La Zanja San Juan Capistrano, CA 92675 US"
        />
      </div>
    </div>
    <Info />
  </div>
</template>

<script>
import Info from '@/components/Info.vue';

export default {
  name: 'Home-V',
  data() {
    return {
      imageSlider: ['/home/slider/Platillos.jpeg', '/home/slider/Tacos.jpeg'],
      scheduleText: 'Opening at 4:00 PM',
    };
  },
  components: {
    Info,
  },
  mounted() {
    const date = new Date();
    const hour = date.getHours();
    if (this.isBetweenSchedule(hour)) {
      this.scheduleText = 'Open today until 11:30 PM';
    }
  },
  methods: {
    isBetweenSchedule(hour) {
      return hour >= 17 && hour <= 23;
    },
  },
};
</script>
