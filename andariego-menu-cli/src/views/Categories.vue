<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <div class="col-1">
        <img
          src="/El-Andariego-Logo.jpeg"
          class="border border-secondary border-1 rounded-circle"
          alt="Logo"
          width="50"
          height="50"
        />
      </div>
      <button
        class="navbar-toggler border"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="https://elandariegotruck.com/"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Catering Info</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Contact
            </a>
            <ul class="dropdown-menu text-center">
              <li>
                <a
                  class="dropdown-item"
                  href="https://www.facebook.com/profile.php?id=100082710796984"
                  >Facebook</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="https://instagram.com/el_andariegotruck"
                  >Instagram</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="https://g.page/r/CY53oo_JlDb8EAI/review"
                  >Leave a review!</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li><button class="dropdown-item">949-806-0123</button></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="row justify-content-between mb-3 mt-2"></div>
  <div class="container">
    <div class="row">
      <div>
        <h2 class="fw-bold">Menu</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-9 col-md-6 col-lg-5">
        <img
          :src="platillos.image"
          class="img-thumbnail p-1 border border-0 rounded-3"
          :alt="platillos.name"
          width="1080"
          height="720"
        />
        <br />
        <button
          class="btn btn-outline-success m-2 p-1 ps-3 pe-3 fw-bold"
          type="button"
          v-text="platillos.name"
          @click="$router.push(`/${platillos.name}`)"
        ></button>
        <p v-text="platillos.description"></p>
      </div>
    </div>
    <div class="row justify-content-evenly">
      <div
        v-for="category in categories"
        :key="category.name"
        class="col-6 col-lg-3 me-lg-1 col-md-4 mb-3 p-1"
      >
        <img
          :src="category.image"
          class="img-thumbnail rounded-3 border border-0"
          :alt="category.name"
          width="320"
          height="320"
        />
        <br />
        <button
          class="btn btn-outline-success m-2 p-1 ps-3 pe-3 fw-bold"
          type="button"
          v-text="category.name"
          @click="$router.push(`/${category.name}`)"
        ></button>
        <p v-text="category.description"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from '../categories';

export default {
  name: 'HomeView',
  data() {
    return {
      categories: [],
      platillos: {},
    };
  },
  async mounted() {
    this.categories = await Categories.GetCategories();

    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].name === 'Platillos') {
        this.platillos = this.categories[i];
        this.categories.splice(i, 1);
        break;
      }
    }
  },
};
</script>
