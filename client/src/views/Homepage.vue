<script setup>
import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import CallToAction from '@/views/CallToAction.vue';
import StyledDivider from '@/components/StyledDivider.vue';
import SmartImg from '@/components/smart/SmartImg.vue';
import LocaleSelector from '@/components/LocaleSelector.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import Gallery from '@/views/Gallery.vue';
import Menu from '@/views/Menu.vue';
import Reviews from './Reviews.vue';
import Contact from './Contact.vue';

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

    <!-- TODO: have desktop images -->
    <div class="sm:invisible sm:hidden">
      <StyledDivider :name="t('dividers.gallery')" />
      <Gallery class="mx-auto max-w-6xl px-2" />
    </div>

    <div id="menu">
      <StyledDivider :name="t('dividers.menu')" />
      <Menu class="container" />
    </div>

    <div id="reviews" class="pb-9 pt-14">
      <StyledDivider :name="t('dividers.reviews')" class="mt-8" />
      <Reviews class="container px-2" />
    </div>

    <div id="contact">
      <StyledDivider :name="t('dividers.contact')" />
      <Contact class="container" />
    </div>

    <StyledDivider :name="t('dividers.cta')" />
    <CallToAction />
  </div>
</template>
