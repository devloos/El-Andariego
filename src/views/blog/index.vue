<template>
  <div class="container-fluid py-3 px-sm-5">
    <div
      v-for="(blog, i) in blogs"
      :key="blog._id"
      class="row justify-content-between gap-3 gap-lg-0 my-4"
    >
      <div
        class="clickable col-lg-6"
        :class="{ 'order-lg-2': i % 2 === 0 }"
        @click="$router.push(`/blog/${blog._id}`)"
      >
        <!-- Change Image -->
        <img src="/blogs/blog.jpg" class="img-fluid" alt="" />
      </div>
      <div
        class="d-flex flex-column justify-content-center gap-4 col-lg-6 px-4 order-1"
        :class="{ 'order-lg-1': i % 2 === 0 }"
      >
        <div class="clickable d-flex gap-2" @click="$router.push(`/blog/${blog._id}`)">
          <p>{{ blog.type }}</p>
          &middot;
          <p>{{ blog.date }}</p>
        </div>
        <div class="clickable" @click="$router.push(`/blog/${blog._id}`)">
          <h1>{{ blog.title }}</h1>
        </div>
        <div>
          <a href="#" @click.prevent="$router.push(`/blog/${blog._id}`)">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  name: 'blog-index',
  setup() {
    useHead({
      title: 'Blog | El Andariego',
      meta: [
        {
          name: 'description',
          content: 'Anything new in the life of El Andariego',
        },
      ],
    });
  },
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    this.useSetup();
  },
  methods: {
    async useSetup() {
      try {
        const response = await this.$_andariego_axios({
          url: '/api/blog',
        });

        this.blogs = response.data;
        this.blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.$_mongo_dateToString(this.blogs);
      } catch (e) {
        // todo toast
        console.log(e);
      }
    },
  },
};
</script>

<style scoped>
a {
  color: #006847;
  transition: opacity 0.15s;
}

a:hover {
  color: #006847;
  opacity: 0.6;
}

.clickable {
  cursor: pointer;
  transition: opacity 0.15s;
}

.clickable:hover {
  opacity: 0.7;
}
</style>
