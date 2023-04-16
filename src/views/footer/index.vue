<template>
  <footer
    class="container-fluid d-flex flex-wrap justify-content-center justify-content-lg-around gap-4 px-3 px-md-4 py-5 mt-4"
  >
    <div
      class="info flex-grow-1 flex-lg-grow-0 d-flex justify-content-evenly justify-content-lg-start gap-4"
    >
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
          <span @click="$_andariego_copyPhone" class="phone-number">
            (949) 806 - 0123
          </span>
        </p>
      </div>
      <div>
        <h5 class="mb-4">Business Hours</h5>
        <div>
          <p class="mb-1">Monday &middot; Tuesday: Closed</p>
          <p>Wednesday &middot; Sunday: Open</p>
          <!-- <p class="mb-1 text-uppercase">Temporalmente cerrado</p> -->
          <!-- <p>TEMPORARILY CLOSED</p> -->
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
          <smart-img :src="'/icons/email.png'" :width="'70'" />
        </div>
        <div class="d-flex flex-column align-items-center py-2">
          <p class="fw-bold my-0">Check Your Inbox!</p>
          <p class="my-0">You've been subscribed to emails</p>
        </div>
      </div>
      <div v-else>
        <p>Sign up with your email address to receive news and updates.</p>
        <form class="d-flex justify-content-center gap-1" @submit.prevent="signup">
          <input
            type="email"
            v-model="email"
            class="form-control form-control-lg fs-6 w-75"
            placeholder="Email Address"
            required
          />
          <button type="submit" class="btn btn-success btn-sm">Sign up</button>
        </form>
      </div>
    </div>
  </footer>
  <p class="text-center py-4 my-0">© 2023 El Andariego</p>
</template>

<script>
import smartImg from '@/components/smart-img.vue';

export default {
  name: 'Footer-V',
  components: {
    smartImg,
  },
  data() {
    return {
      email: '',
      submitted: false,
    };
  },
  methods: {
    signup() {
      if (!this.email) {
        return;
      }

      this.$_andariego_axios({
        url: '/sendgrid/subscribe',
        method: 'POST',
        data: {
          email: this.email,
        },
      });

      this.submitted = true;
    },
  },
};
</script>

<style scoped>
.info p {
  font-size: 13px;
}

p {
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
  transition: opacity 0.15s;
}

.btn-success {
  background-color: #1a532e;
  border-color: #1a532e;
}

.btn:hover {
  opacity: 0.6;
}

i {
  --fa-animation-delay: 3s;
  --fa-animation-iteration-count: 2;
}

.phone-number {
  transition: font-weight 0.15s;
  cursor: pointer;
}

.phone-number:hover {
  font-weight: bold;
}
</style>
