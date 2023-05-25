<script>
import SmartImg from '@/components/smart-img.vue';

export default {
  components: {
    SmartImg,
  },
  data() {
    return {
      categories: [],
      top_categories: [
        'Platillos',
        'Burritos',
        'Tacos',
        'Tortas',
        'Sopes',
        'Quesadillas',
      ],
    };
  },
  async mounted() {
    const res = await this.$_andariego_axios({
      url: '/api/menu/categories',
    });

    this.categories = res.data.filter((category) =>
      this.top_categories.includes(category.name)
    );

    this.categories.sort((a, b) => a.priority - b.priority);
  },
};
</script>

<template>
  <div class="container flex snap-x snap-mandatory gap-3 overflow-x-scroll rounded-t p-3">
    <div
      v-for="category in categories"
      :key="category.name"
      class="min-h-fit min-w-fit cursor-pointer snap-center rounded-b rounded-t hover:scale-[1.01]"
      @click="$router.push(`/menu/${category.name}`)"
    >
      <smart-img :src="category.thumbnail_image" />
      <p class="rounded-b bg-light p-5 text-center font-bold">{{ category.name }}</p>
    </div>
  </div>
</template>
