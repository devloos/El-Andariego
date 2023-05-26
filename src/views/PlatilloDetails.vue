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
    checkLiked() {
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
    async setUserLiked() {
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
  <div v-if="platillo">
    <div class="row justify-content-center">
      <div class="platillo-img col-12 col-lg-10 col-xl-8">
        <!-- Change Image -->
        <SmartImg src="/andariego/platillos/heros/platillo.jpg" />
        <div class="like-platillo input-group">
          <button class="btn border-end" :class="checkLiked" @click="setUserLiked">
            <i class="fa-solid fa-heart"></i>
          </button>
          <div class="input-group-text border-0 px-3">{{ likes }}</div>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column flex-sm-row align-items-center justify-content-center my-5 gap-4 px-3"
    >
      <div class="d-flex flex-column text-center">
        <h3 class="fw-bold">{{ platillo.name }}</h3>
        <p style="max-width: 250px">{{ platillo.content }}</p>
      </div>
      <div>
        <!-- Change Image -->
        <SmartImg :src="platillo.thumbnail_image" :classes="'rounded-3'" :width="'220'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.platillo-img {
  position: relative;
}

.like-platillo {
  position: absolute;
  right: 30px;
  bottom: -15px;
  width: auto;
}

.btn-success {
  background-color: #1a532e;
  border-color: #1a532e;
}

h3 {
  color: #76070a;
}
</style>
