<template>
  <nav class="navbar bg-light p-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click.prevent="$router.push('/')">
        <img
          src="/El-Andariego-Logo.jpeg"
          class="border rounded-circle"
          alt="Logo"
          width="40"
          height="40"
        />
      </a>
      <button
        class="navbar-toggler border p-1 m-1"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <img
            src="/El-Andariego-Logo.jpeg"
            class="offcanvas-title border rounded-circle"
            alt="Logo"
            width="40"
            height="40"
          />
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item ms-1">
              <a
                class="nav-link"
                href="#"
                @click.prevent="$router.push('/')"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                >Home</a
              >
            </li>
            <hr class="p-0 m-0" />
            <li class="nav-item ms-1">
              <a
                class="nav-link"
                href="#"
                @click.prevent="$router.push('/menu')"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                >Menu</a
              >
            </li>
            <hr class="p-0 m-0" />
            <li class="nav-item ms-1">
              <a
                class="nav-link"
                href="#"
                @click.prevent="$router.push('/catering')"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                Catering
              </a>
            </li>
            <hr class="p-0 m-0" />
            <li class="nav-item dropdown ms-1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                @click="contactToggled = !contactToggled"
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
            <hr v-show="!contactToggled" class="p-0 m-0 mb-2" />
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav-V',
  data() {
    return {
      contactToggled: false,
    };
  },
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
