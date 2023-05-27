<script>
import SmartImg from '@/components/smart/SmartImg.vue';
import { prettyContent } from '@/assets/js/mixins';

export default {
  components: {
    SmartImg,
  },
  data() {
    return {
      platillo: null,
      likedPlatillos: [],
      userLiked: false,
      likes: 0,
    };
  },
  computed: {
    isLiked() {
      return this.userLiked ? 'btn-success' : 'btn-light';
    },
  },
  async mounted() {
    await this.getPlatillo();
    this.getPlatillosLiked();
  },
  methods: {
    async getPlatillo() {
      try {
        const response = await this.$_andariego_axios({
          url: `/api/menu/platillos/${this.$route.params.name}`,
        });

        this.platillo = response.data[0];
        this.platillo.content = prettyContent(this.platillo.content);
        this.likes = this.platillo.likes;
      } catch (e) {
        this.$_andariego_toast('Failed to fetch platillo.', { type: 'error' });
      }
    },
    getPlatillosLiked() {
      const response = localStorage.getItem('liked-platillos');
      if (!response) {
        return;
      }

      this.likedPlatillos = JSON.parse(response);
      if (this.likedPlatillos.includes(this.platillo.name)) {
        this.userLiked = true;
      }
    },
    async toggleLiked() {
      this.userLiked = !this.userLiked;

      this.userLiked ? await this.addLiked() : await this.removeLiked();
    },
    async removeLiked() {
      this.likedPlatillos = this.likedPlatillos.filter(
        (name) => name != this.platillo.name
      );

      localStorage.setItem('liked-platillos', JSON.stringify(this.likedPlatillos));

      try {
        await this.$_andariego_axios({
          url: `/api/menu/platillos/${this.platillo.name}`,
          method: 'POST',
          data: {
            likes: --this.likes,
          },
        });
      } catch (e) {
        this.$_andariego_toast('Failed to update platillo.', { type: 'error' });
      }
    },
    async addLiked() {
      this.likedPlatillos.push(this.platillo.name);
      localStorage.setItem('liked-platillos', JSON.stringify(this.likedPlatillos));

      try {
        await this.$_andariego_axios({
          url: `/api/menu/platillos/${this.platillo.name}`,
          method: 'POST',
          data: {
            likes: ++this.likes,
          },
        });
      } catch (e) {
        this.$_andariego_toast('Failed to update platillo.', { type: 'error' });
      }
    },
  },
};
</script>

<template>
  <div v-if="platillo" class="container mt-8 flex flex-col justify-center">
    <div class="relative mx-auto max-w-5xl">
      <SmartImg src="/andariego/platillos/heros/platillo.jpg" />
      <div class="like-btn flex items-center justify-center rounded shadow-lg">
        <button
          class="rounded-l bg-white px-4 py-2 hover:bg-light"
          type="button"
          @click="toggleLiked"
        >
          <i
            class="fa-solid fa-heart"
            :class="userLiked ? 'text-minor' : 'text-black'"
          ></i>
        </button>
        <div class="rounded-r bg-light px-6 py-2 font-semibold">{{ likes }}</div>
      </div>
    </div>
    <div class="mt-6 text-center">
      <h3 class="my-4 text-2xl font-bold text-main">{{ platillo.name }}</h3>
      <p class="mx-auto max-w-sm text-xl font-semibold">{{ platillo.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.like-btn {
  position: absolute;
  right: 30px;
  bottom: -15px;
}
</style>
