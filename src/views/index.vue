<template>
  <div class="container pt-5">
    <div class="row d-grid">
      <header class="col">
        <h1 class="text-center text-success fw-bold">El Andariego Truck</h1>
      </header>
      <div class="col mb-2 text-center">
        <p class="m-0">Authentic Mexican Food</p>
        <p class="m-0" v-text="schedule"></p>
      </div>
      <!-- TEMPORARY -->
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
      <!-- TEMPORARY -->
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
  <Info />
</template>

<script>
import Info from '@/components/footer/info.vue';
import Days from '@/utility/constants/weekdays';

export default {
  name: 'Home-V',
  data() {
    return {
      sliderImages: ['/home/slider/Tacos.jpeg', '/home/slider/Cubana.png'],
      schedule: 'Opening at 4:30 PM',
    };
  },
  components: {
    Info,
  },
  watch: {
    schedule: {
      immediate: true,
      handler() {
        this.setSchedule();
      },
    },
  },
  methods: {
    setSchedule() {
      const day = new Date().getDay();
      switch (day) {
        case Days.Monday:
        case Days.Tuesday: {
          this.schedule = 'Closed, Opening Wednesday at 4:30 PM';
          return;
        }
        default: {
          break;
        }
      }

      if (this.isWorkSchedule()) {
        this.schedule = 'Open today until 11:30 PM';
      }
    },
    isWorkSchedule() {
      const time = new Date().getHours() + new Date().getMinutes();
      const FOUR_THIRTY_PM = 46;
      const ELEVEN_THIRTY_PM = 53;
      if (time >= FOUR_THIRTY_PM && time <= ELEVEN_THIRTY_PM) {
        return true;
      }
      return false;
    },
  },
};
</script>
