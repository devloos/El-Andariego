<template>
  <form class="container" @submit="HandleForm">
    <div class="row d-flex justify-content-center text-start mb-2">
      <div class="col-6 col-md-3 col-lg-3">
        <label for="FirstName" class="form-label">First Name</label>
        <input type="text" v-model="FirstName" class="form-control" id="FirstName" />
      </div>
      <div class="col-6 col-md-3 col-lg-3">
        <label for="LastName" class="form-label">Last Name</label>
        <input type="text" v-model="LastName" class="form-control" id="LastName" />
      </div>
    </div>
    <div class="row d-flex justify-content-center text-start mb-2">
      <div class="col-7 col-md-4 col-lg-4">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="Email" class="form-control" id="email" />
      </div>
      <div class="col-5 col-md-2 col-lg-2">
        <label for="phone" class="form-label">Phone #</label>
        <input type="text" v-model="PhoneNumber" class="form-control" id="phone" />
      </div>
    </div>
    <div class="row d-flex justify-content-center text-start mb-2">
      <div class="col-12 col-md-6 col-lg-6">
        <label for="description" class="form-label">Brief Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="Description"
          placeholder="Number of People? Expectation? etc..."
        />
      </div>
    </div>
    <div class="row d-flex justify-content-center text-start mb-2">
      <div class="col-6 col-md-2 col-lg-2">
        <label for="type" class="form-label">Event Type</label>
        <select type="text" v-model="EventType" class="form-select" id="type">
          <option selected>Choose...</option>
          <option>Party</option>
          <option>School</option>
          <option>Soccer</option>
          <option>Other</option>
        </select>
      </div>
      <div class="col-6 col-md-2 col-lg-2">
        <label for="date" class="form-label">Date</label>
        <input type="date" v-model="Date" class="form-control" id="date" />
      </div>
    </div>
    <div class="row justify-content-center mt-4">
      <button type="submit" class="col-2 btn btn-outline-success">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Catering-V',
  data() {
    return {
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumber: '',
      Description: '',
      EventType: '',
      Date: '',
    };
  },
  methods: {
    HandleForm() {
      console.log(
        this.FirstName,
        this.LastName,
        this.Email,
        this.PhoneNumber,
        this.Description,
        this.EventType,
        this.Date
      );
    },
  },
};
</script>
