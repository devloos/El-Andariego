<template>
  <div v-if="platillo">
    <div class="row justify-content-center">
      <div class="platillo-img col-12 col-lg-10 col-xl-8">
        <!-- Change Image -->
        <img src="/platillos/heros/platillo.jpg" class="img-fluid" alt="" />
        <div class="like-platillo input-group">
          <button class="btn border-end" :class="checkLiked" @click="setUserLiked">
            <i class="fa-solid fa-heart"></i>
          </button>
          <div class="input-group-text border border-0 px-3">{{ likes }}</div>
        </div>
      </div>
    </div>
    <div class="d-sm-flex gap-3 my-5 px-3 mx-auto" style="max-width: 50rem">
      <div class="d-flex flex-column align-items-center text-center">
        <h3>{{ platillo.name }}</h3>
        <p class="text-muted">{{ platillo.content }}</p>
        <p>{{ platillo.description }}</p>
      </div>
      <div class="text-center align-self-center">
        <!-- Change Image -->
        <img :src="platillo.thumbnail_image" class="rounded-3" width="220" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'platillos-index',
  data() {
    return {
      platillo: null,
      likedPlatillos: [],
      userLiked: false,
      likes: 0,
    };
  },
  async mounted() {
    await this.getPlatillo();
    this.getPlatillosLiked();
  },
  computed: {
    checkLiked() {
      if (this.userLiked) {
        return 'btn-success';
      }

      return 'btn-light';
    },
  },
  methods: {
    async getPlatillo() {
      try {
        const response = await this.$_andariego_axios({
          url: `/api/menu/platillos/${this.$route.params.name}`,
        });

        this.platillo = response.data[0];
        this.likes = this.platillo.likes;
      } catch (e) {
        // todo toast
        console.log(e);
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
        // todo toast
        console.log(e);
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
        // todo toast
        console.log(e);
      }
    },
  },
};
</script>

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
</style>
