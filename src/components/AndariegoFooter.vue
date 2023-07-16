<script setup>
import { copyPhone } from '@/assets/js/utility';
import { useI18n } from 'vue-i18n';
import SmartLinks from '@/components/smart/SmartLinks.vue';

const year = new Date().getFullYear();
const { t } = useI18n({ useScope: 'global' });
</script>

<template>
  <hr class="my-16" />
  <footer
    class="mx-auto mb-20 grid max-w-7xl grid-cols-2 gap-3 gap-y-10 px-6 text-sm sm:px-10 md:grid-cols-4 lg:justify-items-center lg:text-lg"
  >
    <div class="flex flex-col gap-3">
      <h5 class="mb-3 font-semibold">{{ t('footer.navigation') }}</h5>
      <div class="flex flex-col items-start gap-1 lg:text-base">
        <SmartLinks />
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h5 class="mb-3 font-semibold">{{ t('footer.information') }}</h5>
      <div class="flex flex-col items-start gap-1 lg:text-base">
        <p
          class="cursor-pointer transition-all hover:font-semibold"
          @click.prevent="copyPhone"
        >
          (949) 806-0123
        </p>
        <RouterLink to="/contact">
          {{ t('footer.careers') }}
        </RouterLink>
        <RouterLink to="/contact">Catering</RouterLink>
      </div>
    </div>
    <div class="flex flex-col gap-3 md:order-first">
      <h5 class="mb-3 font-semibold">El Andariego</h5>
      <div class="flex gap-4 text-base lg:text-lg">
        <a href="https://www.facebook.com/profile.php?id=100082710796984" target="_blank">
          <i class="fa-brands fa-facebook fa-md"></i>
        </a>
        <a href="https://instagram.com/el_andariegotruck" target="_blank">
          <i class="fa-brands fa-instagram fa-md"></i>
        </a>
        <a href="https://g.page/r/CY53oo_JlDb8EAI/review" target="_blank">
          <i class="fa-brands fa-google fa-sm"></i>
        </a>
      </div>
      <!-- Had to do it this way not sure why -->
      <div class="flex grow items-end text-xs sm:w-4/5">
        <p>
          Copyright ©
          <span>{{ year }}</span>
          by El Andariego. All rights reserved.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-3 md:order-first">
      <h5 class="mb-3 font-semibold">{{ t('footer.business_hours') }}</h5>
      <p class="sm:w-4/5 lg:text-base">
        31345 Los Rios St, San Juan Capistrano, CA 92675
      </p>
      <div class="lg:text-base">
        <p>{{ t('footer.schedule.closed') }}</p>
        <p>{{ t('footer.schedule.open') }}</p>
      </div>
    </div>
  </footer>
</template>
