<script>
import { useHead } from '@vueuse/head';
import SmartImg from '@/components/smart/smart-img.vue';
import { RouterLink } from 'vue-router';

export default {
  components: {
    SmartImg,
    RouterLink,
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
  <div class="my-3 flex flex-col gap-10 px-3 lg:px-12">
    <router-link v-for="(post, i) in posts" :key="post._id" :to="`/blog/${post._id}`">
      <smart-img :src="post.image" alt="post" class="hover:opacity-75" />
      <div class="flex flex-col items-start gap-3" :class="{ 'order-lg-1': i % 2 === 0 }">
        <div class="mt-3 flex gap-2">
          <p>{{ post.type }}</p>
          &middot;
          <p>{{ post.date }}</p>
        </div>
        <h1 class="text-lg font-semibold hover:text-accent-dark">{{ post.title }}</h1>
        <p class="cursor-pointer text-main underline hover:text-main-light">Read More</p>
      </div>
    </router-link>
  </div>
</template>
