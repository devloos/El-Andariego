<script setup>
import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import PlatilloSection from '@/views/homepage/-PlatilloSection.vue';
import CategorySection from '@/views/homepage/-CategorySection.vue';
import CallToAction from '@/views/homepage/-CallToAction.vue';
import StyledDivider from '@/components/StyledDivider.vue';
import SmartImg from '@/components/smart/SmartImg.vue';
import testimonials from '@/assets/constants/testimonials.js';
import gallery from '@/assets/constants/gallery';
import LocaleSelector from '@/components/LocaleSelector.vue';
import SocialLinks from '@/components/SocialLinks.vue';

useHead({
  title: 'El Andariego',
  meta: [
    {
      name: 'description',
      content: 'Authentic Mexican Food Truck',
    },
  ],
});

const { t } = useI18n({ useScope: 'global' });

function inWorkSchedule() {
  const now = new Date().getHours() * 60 + new Date().getMinutes();
  const start = 15 * 60;
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
          <a
            class="btn btn-primary px-8 uppercase"
            href="https://order.elandariegotruck.com/"
          >
            {{ t('home.order_now') }}
          </a>
          <SocialLinks class="my-7 flex justify-center gap-6 text-2xl" />
          <LocaleSelector class="-ms-1 mb-10" />
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

    <div class="mt-14 pb-4 pt-2 xl:px-10">
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
