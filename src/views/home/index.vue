<script>
import platillosSection from '@/views/home/platillos-section.vue';
import categorySection from '@/views/home/category-section.vue';
import smartDivider from '@/components/smart-divider.vue';
import smartImg from '@/components/smart-img.vue';
import DAY from '@/utility/constants/weekdays';

export default {
  components: {
    platillosSection,
    categorySection,
    smartDivider,
    smartImg,
  },
  setup() {
    function inWorkSchedule() {
      const now = new Date().getHours() * 60 + new Date().getMinutes();
      const start = 16 * 60 + 30;
      const end = 23 * 60 + 30;
      return start <= now && now <= end;
    }

    function getSchedule(day) {
      if (day == DAY.Monday) {
        return 'Closed, Opening Wednesday at 4:30 PM';
      }

      if (inWorkSchedule()) {
        return 'Open in San Juan Capistrano until 11:30 PM';
      } else {
        return `Opening in San Juan Capistrano at 4:30 PM`;
      }
    }

    const day = new Date().getDay();
    const schedule = getSchedule(day);

    return {
      schedule,
      sliderImages: [
        '/andariego/home/carousel/card.jpg',
        '/andariego/home/carousel/sopes.jpg',
        '/andariego/home/carousel/truck.jpg',
      ],
    };
  },
};
</script>

<template>
  <div class="container-fluid px-lg-5">
    <div class="row justify-content-center gap-4 gap-md-3 py-4 px-2">
      <div class="col">
        <div class="row gap-4 gap-md-0" style="height: 100%">
          <div class="mb-3">
            <smart-img :src="'/home/familia.jpg'" />
          </div>
          <div class="text-center">
            <div>
              <h4>Authentic Mexican Food</h4>
              <p class="text-muted my-2" v-text="schedule"></p>
            </div>
            <p class="home-text mx-auto">
              El Andariego is a new gastronomic proposal in the area of San Juan
              Capistrano, California. Sharing the Mexican flavors with an authentic
              tastings. Through tortas, tacos, burritos and quesadillas, El Andariego
              offers a variety of products that, together with dishes such as Alambre,
              Fortachon or Que Me Notas, seeks to satisfy the palates of southern
              California and position itself as one of the favorite options in the area.
            </p>
            <button class="btn btn-success px-4" @click="$router.push('/menu')">
              View Menu
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-5 text-center align-items-center">
        <smart-img :src="'/home/pastor.jpg'" />
      </div>
    </div>

    <smart-divider :divider_name="'Our Specialty Platillos'" />
    <platillos-section />

    <div id="img-slider" class="carousel slide px-2 my-5" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#img-slider" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#img-slider" data-bs-slide-to="1"></li>
        <li data-bs-target="#img-slider" data-bs-slide-to="2"></li>
        <li data-bs-target="#img-slider" data-bs-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <smart-img src="/home/carousel/logo.jpg" />
        </div>
        <div v-for="(image, i) in sliderImages" :key="i" class="carousel-item">
          <smart-img :src="image" />
        </div>
      </div>
    </div>

    <smart-divider :divider_name="'Top Categories'" />
    <category-section />

    <!-- <smart-divider :divider_name="'Find El Andariego'" /> -->
    <!-- <find-us-section /> -->
  </div>
</template>

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

.home-text {
  max-width: 600px;
}
</style>
