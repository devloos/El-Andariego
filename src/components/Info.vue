<template>
  <div class="container">
    <div class="col mt-5 text-start">
      <label for="contact-us" class="col-12 mb-1 fw-bold">Contact Us</label>
      <p class="m-0 ms-1">
        <img src="/icons/food-truck.png" alt="truck" />
        31345 Los Rios St,
      </p>
      <p class="mb-1 ms-1">San Juan Capistrano, CA 92675</p>
      <p class="ms-1">
        <img src="/icons/phone.png" class="me-1" width="24" height="24" alt="phone#" />
        (949) 806 - 0123
      </p>
    </div>
    <div class="col mt-2 text-start">
      <label for="hours" class="mb-1 fw-bold">Business Hours</label>
      <table class="table table-sm table-borderless" id="hours">
        <tr>
          <td>Mon - Tue - Sat: Closed</td>
        </tr>
        <tr>
          <td>Wed - Thu - Fri - Sun: 4:00 - 11:30 PM</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info-V',
};
</script>
