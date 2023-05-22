<script setup>
import PlatillosSection from '@/views/home/platillos-section.vue';
import CategorySection from '@/views/home/category-section.vue';
import SmartDivider from '@/components/smart-divider.vue';
import SmartImg from '@/components/smart-img.vue';

function inWorkSchedule() {
  const now = new Date().getHours() * 60 + new Date().getMinutes();
  const start = 16 * 60 + 30;
  const end = 23 * 60 + 30;
  return start <= now && now <= end;
}

function getSchedule(day) {
  const MONDAY = 1;

  if (day == MONDAY) {
    return 'Closed, Opening Tuesday at 4:30 PM';
  }

  if (inWorkSchedule()) {
    return 'Open in San Juan Capistrano until 11:30 PM';
  } else {
    return `Opening in San Juan Capistrano at 4:30 PM`;
  }
}

const day = new Date().getDay();
const schedule = getSchedule(day);

// const sliderImages = [
//   '/andariego/home/carousel/card.jpg',
//   '/andariego/home/carousel/sopes.jpg',
//   '/andariego/home/carousel/truck.jpg',
// ];
</script>

<template>
  <div class="pt-10 xl:px-10">
    <div class="grid grid-cols-1 items-center gap-2 lg:grid-cols-2">
      <div class="px-4 pt-6 text-center">
        <div class="flex flex-col items-center gap-2">
          <h4
            class="text-4xl font-bold sm:w-10/12 md:w-2/3 lg:w-11/12 lg:text-5xl xl:w-4/5"
          >
            Delight in authentic Mexican flavors that satisfy your taste buds.
          </h4>
          <p class="my-2 font-semibold xl:text-lg" v-text="schedule" />
          <p class="mb-8 w-auto sm:w-10/12 md:w-3/4 lg:w-11/12 xl:w-4/5 xl:text-lg">
            El Andariego is a Mexican food truck in San Juan Capistrano, California. We
            serve authentic tortas, tacos, burritos, and quesadillas, along with special
            dishes like Alambre, Fortachon, and Que Me Notas. Our goal is to become a
            favorite dining option in the area.
          </p>
        </div>
        <button
          class="rounded-md bg-main px-7 py-3 font-semibold text-gray-50 transition-all duration-300 hover:bg-main-light lg:text-lg"
          @click="$router.push('/menu')"
        >
          View Menu
        </button>
        <div class="my-2 flex justify-center gap-4 text-2xl lg:my-4">
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
      <smart-img src="/andariego/home/hero.webp" alt="hero" />
    </div>
  </div>

  <smart-divider name="Our Specialty Platillos" />
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

  <smart-divider name="Top Categories" />
  <category-section />
</template>

<style lang="scss" scoped>
a {
  transition: all 150ms linear;
}

a:hover {
  color: #71706a;
}
</style>
