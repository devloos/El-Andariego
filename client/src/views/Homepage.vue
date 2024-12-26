<script setup>
import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import StyledDivider from '@/components/StyledDivider.vue';
import SmartImg from '@/components/smart/SmartImg.vue';
import LocaleSelector from '@/components/LocaleSelector.vue';
import Menu from '@/views/Menu.vue';
import Contact from './Contact.vue';
import SmartSvg from '@/components/smart/SmartSvg.vue';

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
    <div class="flex h-[250px] w-full items-stretch justify-center overflow-hidden">
      <SmartImg
        src="/andariego/misc/demo.mp4"
        class="w-full object-cover object-center"
        width=""
        height=""
        loading="eager"
        type="video"
        alt="hero"
        muted
        autoplay
        loop
        playsinline
      />
    </div>

    <div class="relative">
      <SmartImg
        src="/andariego/tr:w-100,h-100/misc/andriego.jpg"
        class="logo-position rounded-xl border border-accent shadow-xl"
        width="100"
        height="100"
        loading="eager"
        alt="logo"
      />

      <div class="pt-[70px]">
        <div class="pb-5 text-center">
          <h2 class="pb-1 text-2xl font-bold uppercase tracking-wide">El Andariego</h2>
          <p>Mexican, Food Truck</p>
        </div>

        <div class="flex justify-center pb-5">
          <select class="select select-bordered w-full max-w-xs">
            <option>Capistrano Villas</option>
            <option>San Juan Village</option>
          </select>
        </div>

        <!-- Dynamic -->
        <div class="flex justify-center gap-3 pb-5 text-center">
          <div class="rating rating-half">
            <input
              type="radio"
              name="rating-10"
              class="mask mask-half-1 mask-star-2 bg-primary"
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              class="mask mask-half-2 mask-star-2 bg-primary"
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              class="mask mask-half-1 mask-star-2 bg-primary"
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              class="mask mask-half-2 mask-star-2 bg-primary"
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              class="mask mask-half-1 mask-star-2 bg-primary"
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              class="mask mask-half-2 mask-star-2 bg-primary"
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              class="mask mask-half-1 mask-star-2 bg-primary"
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              class="mask mask-half-2 mask-star-2 bg-primary"
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              class="mask mask-half-1 mask-star-2 bg-primary"
              checked="checked"
              disabled
            />
            <input
              type="radio"
              name="rating-10"
              class="mask mask-half-2 mask-star-2 bg-primary"
              disabled
            />
          </div>

          <p class="underline">View 19 Ratings</p>
        </div>

        <p class="pb-5 text-center">Capistrano Villas, San Juan Capistrano, CA 92675</p>

        <!-- Dynamic -->
        <div class="flex justify-center gap-1 pb-5">
          <span class="text-primary-400">Open today</span>
          <span>3:00 PM - 11:30 PM</span>
        </div>

        <!-- Dynamic -->
        <div class="flex items-center justify-center gap-2 pb-5">
          <SmartSvg name="InfoIcon" class="h-5 w-5" />
          <p>(949) 806-0123</p>
        </div>

        <LocaleSelector class="pb-5 text-sm" />

        <div class="mx-4 rounded-lg bg-primary-100 px-8 py-4 text-center">
          <p class="pb-2 font-bold">Get 10% OFF*</p>
          <p class="pb-4">For the first 15 people to order online.</p>
          <a
            href="https://order.elandariegotruck.com/?cc=first-online-15"
            class="btn btn-primary btn-sm"
          >
            Order Now!
          </a>
        </div>

        <Menu class="container mt-5" />

        <div id="contact">
          <StyledDivider :name="t('dividers.contact')" />
          <Contact class="container" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo-position {
  position: absolute;
  top: -50px;
  left: calc(50vw - 50px);
}
</style>
