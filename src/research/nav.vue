<template>
  <nav class="navbar navbar-expand-md py-1 pb-0 bg-light mb-4">
    <div class="container-fluid">
      <div class="d-md-none d-lg-none d-xl-none d-md-block d-lg-block d-xl-block">
        <a href="#" @click.prevent="$router.push('/')">
          <img
            src="/El-Andariego-Logo.jpeg"
            class="border border-secondary border-1 rounded-circle"
            alt="Logo"
            width="36"
            height="36"
          />
        </a>
      </div>
      <div class="border mx-md-auto mx-lg-auto mx-xl-auto">
        <button
          class="navbar-toggler border p-1 m-1"
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
              <a class="nav-link" href="#" @click.prevent="$router.push('/')">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="$router.push('/menu')">Menu</a>
            </li>
            <li class="d-sm-none d-sm-block ms-4 me-4">
              <a href="#" @click.prevent="$router.push('/')">
                <img
                  src="/El-Andariego-Logo.jpeg"
                  class="border border-secondary border-1 rounded-circle"
                  alt="Logo"
                  width="36"
                  height="36"
                />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="$router.push('/catering')">
                Catering
              </a>
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
                <li>
                  <button class="dropdown-item" @click="CopyPhone">949-806-0123</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- <a href="#" id="searchIcon" @click.prevent="$router.push('/')">
        <img src="/icons/search.png" alt="search" width="24" height="24" />
      </a> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav-V',
  methods: {
    async CopyPhone() {
      try {
        await navigator.clipboard.writeText('949-806-0123');
      } catch (err) {
        alert('Could not copy');
      }
    },
  },
};
</script>

<style>
#searchIcon {
  margin-top: -10px;
}
</style>
