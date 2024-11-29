<script setup>
import SmartImg from '@/components/smart/SmartImg.vue';

const REVIEWS = [
  {
    image: '/andariego/home/testimonials/julie-perez.png',
    quote: 'Excelente comida, linda gente y la mejor salsa verde!',
    name: 'Julie Perez',
  },
  {
    image: '/andariego/home/testimonials/francisco-serrano.png',
    quote: 'Aqui puedes disfrutar unos sabrosos tacos🌮 .de diferantes carnes.',
    name: 'Francisco Serrano',
  },
  {
    image: '/andariego/home/testimonials/delfino-martinez.png',
    quote: 'Muy rica la comida excelente atención de la jovencita que atiende 👍👍👍',
    name: 'Delfino Martinez',
  },
  {
    image: '/andariego/home/testimonials/lorenzo-diaz.png',
    quote: 'Food: 5, Service: 5, Atmosphere: 5',
    name: 'Lorenzo Diaz',
  },
  {
    image: '/andariego/home/testimonials/karen-ortiz.png',
    quote: 'Todo muy rico, recomiendo el alambre hawaiano no se arrepentirán.',
    name: 'Karen Joselyn Ortiz Ortega',
  },
  {
    image: '/andariego/home/testimonials/ethan-sh.png',
    quote:
      'We spent 10 minutes trying to find them and when we finally did it was well worth it...',
    name: 'Ethan Scheer',
  },
];
</script>

<template>
  <div>
    <div
      class="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:items-center"
    >
      <figure v-for="(review, idx) in REVIEWS" :key="idx" class="w-full max-w-sm">
        <div class="flex items-start gap-3 pb-3">
          <SmartImg
            :src="review.image"
            class="max-w-[50px]"
            :alt="review.name"
            :is-transparent="true"
            width="120"
            height="120"
          />
          <blockquote class="font-medium">
            {{ review.quote }}
          </blockquote>
        </div>
        <p class="text-sm text-primary">- {{ review.name }}</p>
      </figure>
    </div>
  </div>
</template>
