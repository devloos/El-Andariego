<template>
  <nav class="navbar bg-light p-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click.prevent="$router.push('/')">
        <img
          src="/logo/El-Andariego-Logo.jpeg"
          class="border rounded-circle"
          alt="Logo"
          width="40"
          height="40"
        />
      </a>
      <button
        id="navBurger"
        class="btn fa-bounce border border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <i class="fa-solid fa-bars fa-lg"></i>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header bg-light pt-1 pb-1">
          <img
            src="/logo/El-Andariego-Logo.jpeg"
            class="offcanvas-title border rounded-circle"
            alt="Logo"
            width="40"
            height="40"
          />
          <button
            class="btn border border-0"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="fa-solid fa-xmark fa-lg"></i>
          </button>
        </div>
        <div class="offcanvas-body pt-1 pe-0 ps-0 ms-0 me-0">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item mt-1 mb-1 ms-3 fw-bold">
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
            <li class="nav-item mt-1 mb-1 ms-3 fw-bold">
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
            <li class="nav-item mt-1 mb-1 ms-3 fw-bold">
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
            <li class="nav-item dropdown mt-1 mb-1 ms-3 fw-bold">
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
                    target="_blank"
                    >Facebook</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://instagram.com/el_andariegotruck"
                    target="_blank"
                    >Instagram</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="https://g.page/r/CY53oo_JlDb8EAI/review"
                    target="_blank"
                    >Leave a review!</a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <button class="dropdown-item" @click="CopyPhone">949-806-0123</button>
                </li>
              </ul>
            </li>
            <hr class="p-0 m-0 mb-2" />
          </ul>
          <form class="d-flex mt-1 ms-3 me-3" role="search">
            <input
              class="form-control me-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              v-model="itemSearch"
            />
          </form>
          <div v-if="itemSearch" class="mt-3">
            <ul>
              <li v-for="item in searchResult" :key="item" class="pt-2 ps-3 border">
                <a
                  href="#"
                  @click.prevent="$router.push(`/menu/items/${item.category}`)"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <h6 v-text="item.name"></h6>
                  <p id="searchPrice" class="mb-1" v-text="'$' + item.price"></p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { getSearchResults } from '@/api/el-andariego/search';

export default {
  name: 'Nav-V',
  data() {
    return {
      itemSearch: '',
      searchResult: [],
    };
  },
  watch: {
    async itemSearch() {
      this.searchResult = [];
      if (this.itemSearch) {
        const res = await getSearchResults(this.itemSearch);
        this.searchResult = res;
      }
    },
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

<style scoped>
#navBurger {
  --fa-animation-iteration-count: 3;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
#searchPrice {
  font-size: 14px;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: green;
  text-decoration: none;
}
</style>
