<template>
  <nav class="navbar navbar-expand-lg bg-light mb-4">
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
            <a class="nav-link" href="#" @click.prevent="$router.push('/')">Menu</a>
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
