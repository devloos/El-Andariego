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
    <div class="grid grid-cols-1 gap-2">
      <div class="px-4 pt-6 text-center">
        <h4 class="text-4xl font-bold">
          Delight in authentic Mexican flavors that satisfy your taste buds.
        </h4>
        <p class="my-2 font-semibold" v-text="schedule"></p>
        <p class="mb-8">
          El Andariego is a Mexican food truck in San Juan Capistrano, California. We
          serve authentic tortas, tacos, burritos, and quesadillas, along with special
          dishes like Alambre, Fortachon, and Que Me Notas. Our goal is to become a
          favorite dining option in the area.
        </p>
        <button
          class="rounded-md bg-main px-7 py-3 font-semibold text-gray-50 hover:bg-main-light"
          @click="$router.push('/menu')"
        >
          View Menu
        </button>
        <div class="my-2 flex justify-center gap-4 text-2xl">
          <a
            href="https://www.facebook.com/profile.php?id=100082710796984"
            target="_blank"
          >
            <i class="fa-brands fa-facebook fa-sm"></i>
          </a>
          <a href="https://instagram.com/el_andariegotruck" target="_blank">
            <i class="fa-brands fa-instagram fa-sm"></i>
          </a>
          <a href="https://g.page/r/CY53oo_JlDb8EAI/review" target="_blank">
            <i class="fa-brands fa-google fa-xs"></i>
          </a>
        </div>
      </div>
      <smart-img src="/andariego/home/hero.webp" />
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
