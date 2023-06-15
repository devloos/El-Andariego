<script setup>
import { useI18n } from 'vue-i18n';
import { computed, ref } from 'vue';
import { useStorage } from '@vueuse/core';
import PlatilloSection from '@/components/home/PlatilloSection.vue';
import CategorySection from '@/components/home/CategorySection.vue';
import CallToAction from '@/components/home/CallToAction.vue';
import SmartDivider from '@/components/smart/SmartDivider.vue';
import SmartImg from '@/components/smart/SmartImg.vue';
import testimonials from '@/assets/constants/testimonials.js';

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

  if (day === MONDAY) {
    return t('hours.closed');
  }

  if (inWorkSchedule()) {
    return t('hours.open');
  } else {
    return t('hours.opening');
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
          <button
            class="rounded-md bg-main px-7 py-3 font-semibold text-gray-50 transition-all duration-300 hover:bg-main-light lg:text-lg"
            @click="$router.push('/menu')"
          >
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
              class="mx-3 flex h-9 w-[68px] items-center rounded-full bg-coal px-1"
              @click="switchLocale"
            >
              <img
                :src="isEsLocale ? '/mexico.png' : '/usa.png'"
                class="h-7 w-7 transform rounded-full bg-white uppercase shadow-md transition-all"
                :class="{ 'translate-x-8': isEsLocale }"
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

    <SmartDivider :name="t('dividers.platillo')" />
    <PlatilloSection v-motion-slide-visible-once-bottom />

    <div class="testimonials mt-14 pb-4 pt-2 xl:px-10">
      <SmartDivider :name="t('dividers.testimonial')" class="mt-8" />
      <div class="flex flex-col justify-center lg:flex-row xl:gap-10">
        <div
          class="my-3 grid grid-cols-1 justify-items-center gap-8 px-5 sm:grid-cols-2 lg:items-center"
        >
          <figure
            v-for="review in testimonials"
            :key="review"
            v-motion-slide-visible-once-bottom
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

    <SmartDivider :name="t('dividers.categories')" />
    <CategorySection />

    <SmartDivider :name="t('dividers.cta')" />
    <CallToAction v-motion-slide-visible-once-bottom />
  </div>
</template>

<style lang="scss" scoped>
.testimonials {
  background: rgb(118, 7, 10);
  background: linear-gradient(
    332deg,
    rgba(118, 7, 10, 1) 0%,
    rgba(212, 182, 182, 1) 0%,
    rgba(242, 238, 237, 1) 30%,
    rgba(246, 245, 244, 1) 40%,
    rgba(247, 247, 246, 1) 45%,
    rgba(248, 248, 247, 1) 50%,
    rgba(246, 247, 245, 1) 55%,
    rgba(245, 246, 244, 1) 60%,
    rgba(242, 244, 242, 1) 70%,
    rgba(195, 208, 199, 1) 100%,
    rgba(26, 83, 46, 1) 100%
  );
}
</style>
