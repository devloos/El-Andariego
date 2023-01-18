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
      <img src="/blogs/blog.png" class="col-xl-8 img-fluid" alt="" />
    </div>
    <p class="text-center mx-auto my-4" style="max-width: 40rem">
      {{ blog.description }}
    </p>
  </div>
</template>

<script>
export default {
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
        // todo toast
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
.success {
  color: #006847;
}
</style>
