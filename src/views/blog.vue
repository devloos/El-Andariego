<script>
import { useHead } from '@vueuse/head';
import SmartImg from '@/components/smart/smart-img.vue';

export default {
  components: {
    SmartImg,
  },
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
      posts: [],
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

        this.posts = response.data;
        this.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
        this.$_mongo_dateToString(this.posts);
      } catch (e) {
        this.$_andariego_toast('Failed to fetch posts.', { type: 'error' });
      }
    },
  },
};
</script>

<template>
  <div class="container-fluid px-sm-5 py-3">
    <div
      v-for="(post, i) in posts"
      :key="post._id"
      class="row justify-content-between gap-lg-0 my-4 gap-3"
    >
      <div
        class="clickable col-lg-6"
        :class="{ 'order-lg-2': i % 2 === 0 }"
        @click="$router.push(`/blog/${post._id}`)"
      >
        <!-- Change Image -->
        <smart-img :src="post.image" />
      </div>
      <div
        class="d-flex flex-column justify-content-center col-lg-6 order-1 gap-4 px-4"
        :class="{ 'order-lg-1': i % 2 === 0 }"
      >
        <div class="clickable d-flex gap-2" @click="$router.push(`/blog/${post._id}`)">
          <p>{{ post.type }}</p>
          &middot;
          <p>{{ post.date }}</p>
        </div>
        <div class="clickable" @click="$router.push(`/blog/${post._id}`)">
          <h1>{{ post.title }}</h1>
        </div>
        <div>
          <a href="#" @click.prevent="$router.push(`/blog/${post._id}`)">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  color: #1a532e;
  transition: opacity 0.15s;

  &:hover {
    color: #1a532e;
    opacity: 0.6;
  }
}

.clickable {
  cursor: pointer;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.7;
  }
}
</style>
