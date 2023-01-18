<template>
  <div class="container">
    <div class="row justify-content-start">
      <div class="my-3">
        <img src="contact.png" class="img-fluid" alt="" />
      </div>
      <div class="my-3">
        <div class="row justify-content-between">
          <div class="col-6 info">
            <h5>El Andariego</h5>
            <p class="my-2">31345 Los Rios St, San Juan Capistrano, CA 92675</p>
            <p>(949) 806 - 0123</p>
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
    <form @submit.prevent="sendgridSave">
      <div>
        <div>
          <label for="firstName" class="form-label">First Name</label>
          <input
            type="text"
            v-model="firstName"
            class="form-control"
            id="firstName"
            required
          />
        </div>
        <div>
          <label for="lastName" class="form-label">Last Name</label>
          <input
            type="text"
            v-model="lastName"
            class="form-control"
            id="lastName"
            required
          />
        </div>
      </div>
      <div>
        <div>
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model="email" class="form-control" id="email" required />
        </div>
        <div>
          <label for="phone" class="form-label">Phone #</label>
          <input type="tel" v-model="phone" class="form-control" id="phone" required />
        </div>
      </div>
      <div>
        <div>
          <label for="description" class="form-label">Brief description</label>
          <textarea
            type="text"
            class="form-control"
            id="description"
            v-model="description"
            placeholder="Number of people? Expectation? etc..."
            required
          />
        </div>
      </div>
      <div>
        <div>
          <label for="type" class="form-label">Event Type</label>
          <select v-model="eventType" class="form-select" id="type" required>
            <option disabled value="">Please Select</option>
            <option>Party</option>
            <option>School</option>
            <option>Soccer</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label for="date" class="form-label">Date</label>
          <input
            type="date"
            :value="new Date().toISOString().substr(0, 10)"
            class="form-control"
            id="date"
            @input="HandleDate($event.target.value)"
            required
          />
        </div>
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';

export default {
  name: 'Catering-V',
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
    async sendgridSave() {
      try {
        const response = await this.$_andariego_axios({
          url: '/sendgrid/save',
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
        console.log(response);
      } catch (e) {
        // todo toast
        console.log(e);
      }

      // TODO show that save was complete
      window.location.reload();
    },
    HandleDate(dateInput) {
      this.date = dateInput;
    },
  },
};
</script>

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
</style>
