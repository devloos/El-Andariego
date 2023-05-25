<script>
import SmartImg from '@/components/smart/smart-img.vue';

export default {
  components: {
    SmartImg,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      post: null,
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

        this.post = response.data[0];
        this.post.date = new Date(this.post.date).toLocaleString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      } catch (e) {
        this.$_andariego_toast('Failed to fetch post details.', { type: 'error' });
      }
    },
  },
};
</script>

<template>
  <div v-if="post" class="container flex flex-col items-center px-3">
    <h2 class="my-5 text-center text-2xl font-bold text-main">
      {{ post.title }}
    </h2>
    <div>
      <div class="mb-3 flex gap-2 text-sm text-gray-500">
        <p>{{ post.type }}</p>
        &middot;
        <p>{{ post.date }}</p>
      </div>
      <smart-img :src="post.image" />
    </div>
    <p class="my-5 max-w-2xl text-center lg:text-xl">
      {{ post.description }}
    </p>
  </div>
</template>
