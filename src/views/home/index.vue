<script>
import PlatillosSection from '@/views/home/platillos-section.vue';
import CategorySection from '@/views/home/category-section.vue';
import SmartDivider from '@/components/smart-divider.vue';
import SmartImg from '@/components/smart-img.vue';
import DAY from '@/utility/constants/weekdays';

export default {
  components: {
    PlatillosSection,
    CategorySection,
    SmartDivider,
    SmartImg,
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
  <div class="mx-auto lg:container">
    <div class="row justify-content-center gap-md-3 gap-4 px-2 py-4">
      <div class="col">
        <div class="row gap-md-0 gap-4" style="height: 100%">
          <div class="mb-3">
            <smart-img src="/andariego/home/familia.jpg" />
          </div>
          <div class="text-center">
            <div>
              <h4>Authentic Mexican Food</h4>
              <p class="text-muted my-2" v-text="schedule"></p>
            </div>
            <p class="home-text mx-auto">
              El Andariego is a Mexican food truck in San Juan Capistrano, California. We
              serve authentic tortas, tacos, burritos, and quesadillas, along with special
              dishes like Alambre, Fortachon, and Que Me Notas. Our goal is to become a
              favorite dining option in the area.
            </p>
            <button class="btn btn-success px-4" @click="$router.push('/menu')">
              View Menu
            </button>
          </div>
        </div>
      </div>
      <div class="col-md-5 align-items-center text-center">
        <smart-img src="/andariego/home/pastor.jpg" />
      </div>
    </div>
  </div>

  <smart-divider divider-name="Our Specialty Platillos" />
  <platillos-section />

  <!-- <div id="img-slider" class="carousel slide px-2 my-5" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#img-slider" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#img-slider" data-bs-slide-to="1"></li>
        <li data-bs-target="#img-slider" data-bs-slide-to="2"></li>
        <li data-bs-target="#img-slider" data-bs-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <smart-img src="/andariego/home/carousel/logo.jpg" />
        </div>
        <div v-for="(image, i) in sliderImages" :key="i" class="carousel-item">
          <smart-img :src="image" />
        </div>
      </div>
    </div> -->

  <smart-divider divider-name="Top Categories" />
  <category-section />

  <!-- <smart-divider :divider_name="'Find El Andariego'" /> -->
  <!-- <find-us-section /> -->
</template>

<style lang="scss" scoped>
.btn {
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.6;
  }
}

.btn-success {
  background-color: #1a532e;
  border-color: #1a532e;
}

.home-text {
  max-width: 600px;
}
</style>
