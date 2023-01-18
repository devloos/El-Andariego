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
          </div>
          <p class="home-text mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam
            aliquam esse ipsam sapiente similique dolor at unde magnam enim.
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
import Days from '@/utility/constants/weekdays';

export default {
  data() {
    return {
      schedule: 'Opening at 4:30 PM',
    };
  },
  mounted() {
    this.setTextSchedule();
  },
  methods: {
    setTextSchedule() {
      const day = new Date().getDay();
      switch (day) {
        case Days.Monday:
        case Days.Tuesday: {
          this.schedule = 'Closed, Opening Wednesday at 4:30 PM';
          return;
        }
        default: {
          break;
        }
      }

      if (this.inWorkSchedule()) {
        this.schedule = 'Open today until 11:30 PM';
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
  background-color: #006847;
  border-color: #006847;
}

.btn:hover {
  opacity: 0.6;
}

.home-text {
  max-width: 400px;
}
</style>
