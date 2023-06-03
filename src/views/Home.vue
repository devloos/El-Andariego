<script setup>
import PlatilloSection from '@/components/home/PlatilloSection.vue';
import CategorySection from '@/components/home/CategorySection.vue';
import CallToAction from '@/components/home/CallToAction.vue';
import SmartDivider from '@/components/smart/SmartDivider.vue';
import SmartImg from '@/components/smart/SmartImg.vue';
import testimonials from '@/assets/constants/testimonials.js';

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
</script>

<template>
  <div>
    <div class="pt-10 xl:px-10">
      <div class="grid grid-cols-1 items-center gap-2 lg:grid-cols-2">
        <div class="px-4 pt-6 text-center">
          <div class="flex flex-col items-center gap-2">
            <h4
              class="text-4xl font-bold sm:w-10/12 md:w-2/3 lg:w-11/12 lg:text-5xl xl:w-4/5"
            >
              Real Mexican flavors on wheels. Tortas, tacos, burritos, and more.
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
        <SmartImg
          src="/andariego/home/hero.webp"
          alt="hero"
          width="1200"
          height="1200"
          :is-transparent="true"
        />
      </div>
    </div>

    <SmartDivider name="Our Specialty Platillos" />
    <PlatilloSection />

    <div class="mt-14 bg-light pb-4 pt-2 xl:px-10">
      <SmartDivider name="Testimonials" class="mt-8" />
      <div class="flex flex-col justify-center lg:flex-row xl:gap-10">
        <div
          class="my-3 grid grid-cols-1 justify-items-center gap-8 px-5 sm:grid-cols-2 lg:items-center"
        >
          <figure
            v-for="review in testimonials"
            :key="review"
            class="flex w-full max-w-sm flex-col gap-3"
          >
            <SmartImg
              :src="review.image"
              class="max-w-[60px]"
              :alt="review.name"
              :is-transparent="true"
              width="120"
              height="120"
            />
            <blockquote class="font-medium">
              {{ review.quote }}
            </blockquote>
            <p class="text-sm text-main">- {{ review.name }}</p>
          </figure>
        </div>
        <div
          class="my-5 grid grid-cols-3 gap-2 rounded px-3 lg:grid-cols-2 xl:grid-cols-3"
        >
          <SmartImg
            v-for="index in 6"
            :key="index"
            class="w-full max-w-[350px] rounded"
            :src="`/andariego/home/gallery/gallery-${index}.jpg`"
            alt="Gallery Image"
            width="800"
            height="800"
          />
        </div>
      </div>
    </div>

    <SmartDivider name="Top Categories" />
    <CategorySection />

    <SmartDivider name="What are you waiting for?" />
    <CallToAction />
  </div>
</template>

<style lang="scss" scoped>
a {
  transition: all 150ms linear;
}

a:hover {
  color: #71706a;
}
</style>
