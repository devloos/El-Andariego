<template>
  <div class="row justify-content-center gap-4 gap-md-3 py-4 px-2">
    <div class="col">
      <div class="row gap-4 gap-md-0" style="height: 100%">
        <div class="mb-3">
          <!-- Change Image -->
          <img src="/home/hero-section/familia.jpg" class="img-fluid" alt="" />
        </div>
        <div class="text-center">
          <div>
            <h4>Authentic Mexican Food</h4>
            <p class="text-muted my-2" v-text="schedule"></p>
            <!-- <p class="text-muted my-2 text-uppercase">Temporalmente cerrado</p> -->
          </div>
          <p class="home-text mx-auto">
            El Andariego is a new gastronomic proposal in the area of San Juan Capistrano,
            California. Sharing the Mexican flavors with an authentic tastings. Through
            tortas, tacos, burritos and quesadillas, El Andariego offers a variety of
            products that, together with dishes such as Alambre, Fortachon or Que Me
            Notas, seeks to satisfy the palates of southern California and position itself
            as one of the favorite options in the area.
          </p>
          <button class="btn btn-success px-4" @click="$router.push('/menu')">
            View Menu
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-5 text-center align-items-center">
      <!-- Change Image -->
      <img src="/home/hero-section/pastor.jpg" class="img-fluid" alt="" />
    </div>
  </div>
</template>

<script>
import DAY from '@/utility/constants/weekdays';

export default {
  data() {
    return {
      schedule: null,
    };
  },
  mounted() {
    this.schedule = this.getSchedule();
  },
  methods: {
    getSchedule() {
      const day = new Date().getDay();
      if (day == DAY.Monday || day == DAY.Tuesday) {
        return 'Closed, Opening Wednesday at 4:30 PM';
      }

      if (!this.inWorkSchedule()) {
        return 'Opening at 4:30 PM';
      }

      if (day == DAY.Wednesday) {
        return `Open in Laguna Hills until 10:30 PM`;
      } else if (day == DAY.Thursday) {
        return `Open in Lake Forest until 10:30 PM`;
      } else if (day == DAY.Saturday) {
        return `Open in San Juan Village until 10:30 PM`;
      } else {
        return `Open in San Juan Capistrano until 11:30 PM`;
      }
    },
    inWorkSchedule() {
      const now = new Date().getHours() * 60 + new Date().getMinutes();
      const start = 16 * 60 + 30;
      const end = 23 * 60 + 30;
      return start <= now && now <= end;
    },
  },
};
</script>

<style scoped>
.btn {
  transition: opacity 0.15s;
}

.btn-success {
  background-color: #1a532e;
  border-color: #1a532e;
}

.btn:hover {
  opacity: 0.6;
}

.home-text {
  max-width: 600px;
}
</style>
