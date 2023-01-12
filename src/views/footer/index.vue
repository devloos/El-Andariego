<template>
  <footer
    class="container-fluid d-flex flex-wrap justify-content-center justify-content-lg-around gap-4 px-3 px-md-4 py-5 mt-4"
  >
    <div class="info d-flex gap-4">
      <div>
        <h5 class="mb-4">El Andariego</h5>
        <div>
          <p class="mb-1 ms-1">
            <i class="fa-solid fa-truck fa-lg me-1"></i>
            31345 Los Rios St,
          </p>
          <p class="ms-1">San Juan Capistrano, CA 92675</p>
        </div>
        <p class="ms-1">
          <i class="fa-solid fa-phone fa-shake fa-lg me-1"></i>
          <span @click="copyPhone" class="phone-number"> (949) 806 - 0123 </span>
        </p>
      </div>
      <div>
        <h5 class="mb-4">Business Hours</h5>
        <div>
          <p class="mb-1">Mon - Tue - Sat: Closed</p>
          <p>Wed - Thu - Fri - Sun: 4:00 - 11:30 PM</p>
        </div>
        <div class="d-flex justify-content-start">
          <a
            href="https://www.facebook.com/profile.php?id=100082710796984"
            class="me-2"
            target="_blank"
          >
            <i class="fa-brands fa-facebook fa-md"></i>
          </a>
          <a href="https://instagram.com/el_andariegotruck" class="me-2" target="_blank">
            <i class="fa-brands fa-instagram fa-md"></i>
          </a>
          <a href="https://g.page/r/CY53oo_JlDb8EAI/review" class="me-2" target="_blank">
            <i class="fa-brands fa-google fa-sm"></i>
          </a>
        </div>
      </div>
    </div>
    <div>
      <div v-if="submitted" class="d-flex gap-3">
        <div>
          <img src="email-icon.webp" alt="email-icon" />
        </div>
        <div class="d-flex flex-column align-items-center py-2">
          <p class="fw-bold my-0">Check Your Inbox!</p>
          <p class="my-0">You've been subscribed to emails</p>
        </div>
      </div>
      <div v-else>
        <p>Sign up with your email address to receive news and updates.</p>
        <form class="d-flex justify-content-center gap-1" @submit="signup">
          <input
            type="email"
            v-model="email"
            class="form-control form-control-lg fs-6 w-75"
            placeholder="Email Address"
            required
          />
          <button type="submit" class="btn btn-dark btn-sm">Sign up</button>
        </form>
      </div>
    </div>
  </footer>
  <p class="text-center py-4 my-0">© 2023 El Andariego</p>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Footer-V',
  data() {
    return {
      email: '',
      submitted: false,
    };
  },
  methods: {
    async copyPhone() {
      try {
        await navigator.clipboard.writeText('949-806-0123');
      } catch (err) {
        alert('Could not copy');
      }
    },
    async signup() {
      if (this.email === '') {
        return;
      }

      axios.post('/sendgrid/subscribe', {
        email: this.email,
      });

      this.submitted = true;
    },
  },
};
</script>

<style scoped>
.info p {
  font-size: 12px;
}

.info h5 {
  font-size: 18px;
}

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

.btn {
  background-color: #006847;
  border-color: #006847;
}

.btn:hover {
  background-color: #006847;
  border-color: #006847;
  opacity: 0.6;
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
