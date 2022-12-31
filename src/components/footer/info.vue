<template>
  <div class="container-fluid ms-1 ms-sm-2 ms-md-3 ms-lg-3 ms-xl-3">
    <div class="col mt-5 text-start">
      <label for="contact-us" class="col-12 mb-1 fw-bold">Contact Us</label>
      <p class="m-0 ms-1">
        <i class="fa-solid fa-truck fa-lg me-1"></i>
        31345 Los Rios St,
      </p>
      <p class="mb-1 ms-1">San Juan Capistrano, CA 92675</p>
      <p class="ms-1">
        <i class="fa-solid fa-phone fa-shake fa-lg me-1"></i>
        <span @click="copyPhone" class="phone-number"> (949) 806 - 0123 </span>
      </p>
    </div>
    <div class="col mt-2 text-start">
      <label for="hours" class="mb-1 fw-bold">Business Hours</label>
      <table class="table table-sm table-borderless mb-1" id="hours">
        <tr>
          <td>Mon - Tue - Sat: Closed</td>
        </tr>
        <tr>
          <td>Wed - Thu - Fri - Sun: 4:00 - 11:30 PM</td>
        </tr>
      </table>
    </div>
    <div class="d-flex justify-content-start">
      <a
        href="https://www.facebook.com/profile.php?id=100082710796984"
        class="me-2"
        target="_blank"
      >
        <i class="fa-brands fa-facebook fa-lg"></i>
      </a>
      <a href="https://instagram.com/el_andariegotruck" class="me-2" target="_blank">
        <i class="fa-brands fa-instagram fa-lg"></i>
      </a>
      <a href="https://g.page/r/CY53oo_JlDb8EAI/review" class="me-2" target="_blank">
        <i class="fa-brands fa-google fa-md"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info-V',
  methods: {
    async copyPhone() {
      try {
        await navigator.clipboard.writeText('949-806-0123');
      } catch (err) {
        alert('Could not copy');
      }
    },
  },
};
</script>

<style scoped>
p {
  font-size: 14px;
}

td {
  font-size: 14px;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
}

i {
  --fa-animation-delay: 3s;
  --fa-animation-iteration-count: 2;
}

.phone-number:hover {
  cursor: pointer;
  font-weight: bold;
}
</style>
