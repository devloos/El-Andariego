<script>
import { useHead } from '@vueuse/head';
import smartImg from '@/components/smart-img.vue';

export default {
  components: {
    smartImg,
  },
  setup() {
    useHead({
      title: 'Contact | El Andariego',
      meta: [
        {
          name: 'description',
          content: 'Contact El Andariego',
        },
      ],
    });
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: '',
      eventType: '',
      date: '',
    };
  },
  methods: {
    async emailForm() {
      try {
        await this.$_andariego_axios({
          url: '/api/sendgrid/save',
          method: 'POST',
          data: {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            phone: this.phone,
            description: this.description,
            event_type: this.eventType,
            date: this.date,
          },
        });
      } catch (e) {
        this.$_andariego_toast('Failed to send information try again.', {
          type: 'error',
        });
      }

      // TODO show that save was complete
      window.location.reload();
    },
    setDate(e) {
      this.date = e.target.value;
    },
  },
};
</script>

<template>
  <div class="container">
    <h4 class="success text-center fw-bold my-4">Contact El Andariego</h4>
    <div class="row">
      <div class="col-lg-6">
        <div class="row justify-content-start">
          <div class="my-3">
            <!-- Change Image -->
            <smart-img :src="'/contact/contact.jpg'" />
          </div>
          <div class="my-3">
            <div class="row justify-content-between">
              <div class="col-6 info">
                <h5>El Andariego</h5>
                <p class="my-2">31345 Los Rios St, San Juan Capistrano, CA 92675</p>
                <p>
                  <span @click="$_andariego_copyPhone" class="phone-number">
                    (949) 806 - 0123
                  </span>
                </p>
              </div>
              <div class="col-6 info">
                <h5>Business Hours</h5>
                <p class="my-0">Mon · Tue: Closed</p>
                <p class="mb-1">Wed · Sun: 4:00 - 11:30 PM</p>
                <div class="d-flex justify-content-start">
                  <a
                    href="https://www.facebook.com/profile.php?id=100082710796984"
                    class="me-2"
                    target="_blank"
                  >
                    <i class="fa-brands fa-facebook fa-md"></i>
                  </a>
                  <a
                    href="https://instagram.com/el_andariegotruck"
                    class="me-2"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram fa-md"></i>
                  </a>
                  <a
                    href="https://g.page/r/CY53oo_JlDb8EAI/review"
                    class="me-2"
                    target="_blank"
                  >
                    <i class="fa-brands fa-google fa-sm"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 pt-2">
        <form @submit.prevent="emailForm">
          <div class="row my-2">
            <div class="col-6 pe-1">
              <div class="form-floating">
                <input
                  type="text"
                  v-model="firstName"
                  class="form-control"
                  id="firstName"
                  placeholder="First Name"
                  required
                />
                <label for="firstName" class="form-label">First Name</label>
              </div>
            </div>
            <div class="col-6 ps-1">
              <div class="form-floating">
                <input
                  type="text"
                  v-model="lastName"
                  class="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  required
                />
                <label for="lastName" class="form-label">Last Name</label>
              </div>
            </div>
          </div>
          <div class="row my-2">
            <div class="col-6 pe-1">
              <div class="form-floating">
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  required
                />
                <label for="email" class="form-label">Email</label>
              </div>
            </div>
            <div class="col-6 ps-1">
              <div class="form-floating">
                <input
                  type="tel"
                  v-model="phone"
                  class="form-control"
                  id="phone"
                  placeholder="Phone"
                  required
                />
                <label for="phone" class="form-label">Phone #</label>
              </div>
            </div>
          </div>
          <div>
            <div class="form-floating">
              <textarea
                type="text"
                class="form-control"
                id="description"
                v-model="description"
                placeholder="Descriptive Message"
                style="height: 100px"
                required
              />
              <label for="description" class="form-label">Message</label>
            </div>
          </div>
          <div class="row my-2">
            <div class="col-6">
              <label for="type" class="form-label">Interested In</label>
              <select v-model="eventType" class="form-select" id="type" required>
                <option disabled value="">Please Select</option>
                <option>Order</option>
                <option>Catering</option>
                <option>Job Opportunity</option>
                <option>Other</option>
              </select>
            </div>
            <div class="col-6">
              <label for="date" class="form-label">Date</label>
              <input
                type="date"
                :value="new Date().toISOString().substr(0, 10)"
                class="form-control"
                id="date"
                @input="setDate"
                required
              />
            </div>
          </div>
          <div class="text-center my-4">
            <button type="submit" class="btn btn-success px-4">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info p {
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

.success {
  color: #1a532e;
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

.phone-number {
  transition: font-weight 0.15s;
  cursor: pointer;
}

.phone-number:hover {
  font-weight: bold;
}
</style>
