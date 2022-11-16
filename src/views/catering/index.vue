<template>
  <div class="container mb-5 pb-5 pt-3">
    <div class="row text-center">
      <p class="text-uppercase fs-3 fw-bold">Catering Info</p>
    </div>
    <div class="row d-flex flex-column align-items-center text-center">
      <p class="col-12 col-md-8 col-lg-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis ipsa
        iusto consectetur deleniti quasi voluptatem ratione qui id cum, molestiae dicta
        accusantium voluptate nam harum quae pariatur provident culpa?
      </p>
      <p class="col-12 col-md-8 col-lg-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis ipsa
        iusto consectetur deleniti quasi voluptatem ratione qui id cum, molestiae dicta
        accusantium voluptate nam harum quae pariatur provident culpa?
      </p>
    </div>
    <form @submit="sendgridSave">
      <div class="row d-flex justify-content-center text-start mb-2">
        <div class="col-6 col-md-4 col-lg-3">
          <label for="firstName" class="form-label">First Name</label>
          <input
            type="text"
            v-model="firstName"
            class="form-control"
            id="firstName"
            required
          />
        </div>
        <div class="col-6 col-md-4 col-lg-3">
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
      <div class="row d-flex justify-content-center text-start mb-2">
        <div class="col-7 col-md-5 col-lg-4">
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model="email" class="form-control" id="email" required />
        </div>
        <div class="col-5 col-md-3 col-lg-2">
          <label for="phone" class="form-label">Phone #</label>
          <input type="tel" v-model="phone" class="form-control" id="phone" required />
        </div>
      </div>
      <div class="row d-flex justify-content-center text-start mb-2">
        <div class="col-12 col-md-8 col-lg-6">
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
      <div class="row d-flex justify-content-center text-start mb-2">
        <div class="col-6 col-md-3 col-lg-2">
          <label for="type" class="form-label">Event Type</label>
          <select v-model="eventType" class="form-select" id="type" required>
            <option disabled value="">Please Select</option>
            <option>Party</option>
            <option>School</option>
            <option>Soccer</option>
            <option>Other</option>
          </select>
        </div>
        <div class="col-6 col-md-3 col-lg-2">
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
      <div class="row justify-content-center mt-4">
        <button type="submit" class="col-4 col-md-2 col-lg-2 btn btn-outline-success">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import SendGrid from '@/api/send-grid';

export default {
  name: 'Catering-V',
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
      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        phone: this.phone,
        description: this.description,
        event_type: this.eventType,
        date: this.date,
      };
      await SendGrid.save(data);
      // TODO show that save was complete
      window.location.reload();
    },
    HandleDate(dateInput) {
      this.date = dateInput;
    },
  },
};
</script>
