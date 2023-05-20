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
  <div class="px-2 px-lg-5">
    <div class="row justify-content-evenly">
      <div
        v-for="category in categories"
        :key="category.name"
        class="category-card col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2"
        @click="$router.push(`/menu/${category.name}`)"
      >
        <div>
          <smart-img :src="category.thumbnail_image" classes="img-fluid rounded-top-3" />
        </div>
        <div
          class="py-2 mb-2 bg-light text-center rounded-bottom-3 border border-bottom-3"
        >
          <p class="mb-0">{{ category.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-card {
  cursor: pointer;
}
</style>
