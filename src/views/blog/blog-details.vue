<template>
  <div v-if="blog" class="container">
    <h2 class="success text-center my-3 mb-5 fw-bold">{{ blog.title }}</h2>
    <div class="row justify-content-center">
      <div class="small d-flex gap-2 text-muted col-xl-8">
        <p>{{ blog.type }}</p>
        &middot;
        <p>{{ blog.date }}</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <!-- Change Image -->
      <smart-img :src="'/blogs/blog.jpg'" :class="'col-xl-8 img-fluid'" />
    </div>
    <p class="text-center mx-auto my-4" style="max-width: 40rem">
      {{ blog.description }}
    </p>
  </div>
</template>

<script>
import smartImg from '@/components/smart-img.vue';

export default {
  components: {
    smartImg,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      blog: null,
    };
  },
  mounted() {
    this.useSetup();
  },
  methods: {
    async useSetup() {
      try {
        const response = await this.$_andariego_axios({
          url: `/api/blog/${this.id}`,
        });

        this.blog = response.data[0];
        this.blog.date = new Date(this.blog.date).toLocaleString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      } catch (e) {
        this.$_andariego_toast('Failed to fetch blog details.', { type: 'error' });
      }
    },
  },
};
</script>

<style scoped>
.success {
  color: #1a532e;
}
</style>
