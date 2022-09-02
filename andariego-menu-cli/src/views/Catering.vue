<template>
  <div class="container mb-5 pb-5 pt-3">
    <div class="row">
      <p class="text-uppercase fs-3 fw-bold">Catering Info</p>
    </div>
    <div class="row d-flex flex-column align-items-center">
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
    <form @submit="HandleForm">
      <div class="row d-flex justify-content-center text-start mb-2">
        <div class="col-6 col-md-4 col-lg-3">
          <label for="FirstName" class="form-label">First Name</label>
          <input
            type="text"
            v-model="FirstName"
            class="form-control"
            id="FirstName"
            required
          />
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <label for="LastName" class="form-label">Last Name</label>
          <input
            type="text"
            v-model="LastName"
            class="form-control"
            id="LastName"
            required
          />
        </div>
      </div>
      <div class="row d-flex justify-content-center text-start mb-2">
        <div class="col-7 col-md-5 col-lg-4">
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model="Email" class="form-control" id="email" required />
        </div>
        <div class="col-5 col-md-3 col-lg-2">
          <label for="phone" class="form-label">Phone #</label>
          <input type="text" v-model="Phone" class="form-control" id="phone" required />
        </div>
      </div>
      <div class="row d-flex justify-content-center text-start mb-2">
        <div class="col-12 col-md-8 col-lg-6">
          <label for="description" class="form-label">Brief Description</label>
          <textarea
            type="text"
            class="form-control"
            id="description"
            v-model="Description"
            placeholder="Number of people? Expectation? etc..."
            required
          />
        </div>
      </div>
      <div class="row d-flex justify-content-center text-start mb-2">
        <div class="col-6 col-md-3 col-lg-2">
          <label for="type" class="form-label">Event Type</label>
          <select v-model="EventType" class="form-select" id="type" required>
            <option disabled value="">Please Select</option>
            <option>Party</option>
            <option>School</option>
            <option>Soccer</option>
            <option>Other</option>
          </select>
        </div>
        <div class="col-6 col-md-3 col-lg-2">
          <label for="date" class="form-label">Date</label>
          <input type="date" v-model="Date" class="form-control" id="date" required />
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
import SendGrid from '../api/sendGrid';

export default {
  name: 'Catering-V',
  data() {
    return {
      FirstName: '',
      LastName: '',
      Email: '',
      Phone: '',
      Description: '',
      EventType: '',
      Date: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
    async HandleForm() {
      await SendGrid.FormReq({
        first_name: this.FirstName,
        last_name: this.LastName,
        email: this.Email,
        phone: this.Phone,
        description: this.Description,
        event_type: this.EventType,
        date: this.Date,
      });
      window.location.reload();
    },
  },
};
</script>
