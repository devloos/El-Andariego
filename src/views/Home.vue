<template>
  <div class="container pt-5">
    <div class="row d-grid">
      <header class="col">
        <h1 class="text-success fw-bold">El Andariego Truck</h1>
      </header>
      <div class="col mb-4">
        <p class="m-0">Authentic Mexican Food</p>
        <p class="m-0" v-text="ScheduleText"></p>
      </div>
      <div class="col mb-5">
        <button
          class="col-4 col-md-3 col-lg-2 btn btn-outline-success"
          @click="$router.push('/menu')"
        >
          View Menu
        </button>
      </div>
      <div
        id="Controls"
        class="col-12 col-lg-10 col-xl-8 carousel carousel-dark slide mx-auto d-block mb-5"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/home/slider/Logo.jpeg" class="img-fluid" alt="..." />
          </div>
          <div v-for="(image, i) in ImageSlider" :key="i" class="carousel-item">
            <img :src="image" class="img-fluid" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#Controls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#Controls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      <div class="col">
        <hr class="col-1 mx-auto d-block m-2 border border-dark border-1" />
        <p class="text-muted fs-6">Find El Andariego</p>
      </div>
      <div class="col-12 col-lg-10 col-xl-8 mx-auto d-block">
        <img
          src="/home/Location.png"
          class="img-fluid"
          alt="La Zanja San Juan Capistrano, CA 92675 US"
        />
      </div>
      <div class="col mt-5 text-start">
        <label for="hours" class="mb-1 fw-bold">Business Hours</label>
        <table class="table table-sm table-borderless" id="hours">
          <tr>
            <td>Mon: Closed</td>
          </tr>
          <tr>
            <td>Tue: Closed</td>
          </tr>
          <tr>
            <td>Wed: 5:00 - 10:00 PM</td>
          </tr>
          <tr>
            <td>Thu: 5:00 - 10:00 PM</td>
          </tr>
          <tr>
            <td>Fri: 5:00 - 11:00 PM</td>
          </tr>
          <tr>
            <td>Sat: 5:00 - 11:00 PM</td>
          </tr>
          <tr>
            <td>Sun: 11:00 AM - 9:00 PM</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-V',
  data() {
    return {
      ImageSlider: ['/home/slider/Platillos.jpeg', '/home/slider/Tacos.jpeg'],
      ScheduleText: '',
    };
  },
  mounted() {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 17) {
      this.ScheduleText = 'Open today until 11:00 PM';
      return;
    }
    this.ScheduleText = 'Opening at 5:00 PM';
  },
};
</script>
