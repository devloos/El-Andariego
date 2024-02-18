<script setup>
import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import { useStorage } from '@vueuse/core';
import PlatilloSection from '@/views/homepage/-PlatilloSection.vue';
import CategorySection from '@/views/homepage/-CategorySection.vue';
import CallToAction from '@/views/homepage/-CallToAction.vue';
import StyledDivider from '@/components/StyledDivider.vue';
import SmartImg from '@/components/smart/SmartImg.vue';
import testimonials from '@/assets/constants/testimonials.js';
import gallery from '@/assets/constants/gallery';

useHead({
  title: 'El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Authentic Mexican Food Truck',
    },
  ],
});

const { t, locale } = useI18n({ useScope: 'global' });
const localePreference = useStorage('locale', 'en');
const isEsLocale = ref(localePreference.value === 'es');

function inWorkSchedule() {
  const now = new Date().getHours() * 60 + new Date().getMinutes();
  const start = 16 * 60 + 30;
  const end = 23 * 60 + 30;
  return start <= now && now <= end;
}

const schedule = computed(() => {
  const day = new Date().getDay();
  const MONDAY = 1;
  const SATURDAY = 6;

  if (day === MONDAY) {
    return t('hours.closed');
  }

  const location = day === SATURDAY ? 'Village' : 'Capistrano';

  if (inWorkSchedule()) {
    return t('hours.open', { location });
  } else {
    return t('hours.opening', { location });
  }
});

function switchLocale() {
  isEsLocale.value = !isEsLocale.value;
  const preference = isEsLocale.value ? 'es' : 'en';
  locale.value = preference;
  localePreference.value = preference;
}
</script>

<template>
  <div>
    <div class="pt-6 xl:px-10">
      <div class="grid grid-cols-1 items-center gap-2 lg:grid-cols-2">
        <div class="mb-2 px-4 pt-6 text-center">
          <div class="flex flex-col items-center gap-2">
            <h4
              class="text-4xl font-bold sm:w-10/12 md:w-2/3 lg:w-11/12 lg:text-5xl xl:w-4/5"
            >
              {{ t('home.hook') }}
            </h4>
            <p class="my-2 font-semibold xl:text-lg">{{ schedule }}</p>
            <p class="mb-8 w-auto sm:w-10/12 md:w-3/4 lg:w-11/12 xl:w-4/5 xl:text-lg">
              {{ t('home.intro') }}
            </p>
          </div>
          <button class="btn btn-primary px-8" @click="$router.push('/menu')">
            {{ t('home.view_menu') }}
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
          <div class="flex flex-col items-center justify-center">
            <button
              class="mx-3 flex h-9 w-[68px] items-center rounded-full bg-coal-100 px-1"
              @click="switchLocale"
            >
              <img
                :src="isEsLocale ? '/mexico.png' : '/usa.png'"
                class="h-7 w-7 transform rounded-full bg-white uppercase shadow-md transition-all"
                :class="{ 'translate-x-8': isEsLocale }"
                width="256"
                height="256"
              />
            </button>
          </div>
        </div>
        <SmartImg
          src="/andariego/home/hero.webp"
          alt="hero"
          width="1200"
          height="1200"
          loading="eager"
          is-transparent
        />
      </div>
    </div>

    <StyledDivider :name="t('dividers.platillo')" />
    <PlatilloSection />

    <div class="mex-gradient mt-14 pb-4 pt-2 xl:px-10">
      <StyledDivider :name="t('dividers.testimonial')" class="mt-8" />
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
            <p class="text-sm text-primary">- {{ review.name }}</p>
          </figure>
        </div>
        <div
          class="my-5 grid grid-cols-2 gap-2 rounded px-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
        >
          <div v-for="src in gallery" :key="src" class="overflow-hidden">
            <SmartImg
              class="w-full max-w-[350px] rounded transition-all hover:scale-125"
              :src="src"
              alt="Gallery Image"
              width="800"
              height="800"
            />
          </div>
        </div>
      </div>
    </div>

    <StyledDivider :name="t('dividers.categories')" />
    <CategorySection />

    <StyledDivider :name="t('dividers.cta')" />
    <CallToAction />
  </div>
</template>