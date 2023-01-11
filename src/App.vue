<template>
  <navbar @toggle-nav="predicate = !predicate" />
  <div class="nav-offcanvas pt-2" :class="{ 'nav-offcanvas--active': !predicate }">
    <div class="position-relative h-75">
      <ul class="mx-4 mt-5 fs-1 fw-light">
        <li class="text-center my-4">
          <a href="#" @click.prevent="$router.push('/')">Home</a>
        </li>
        <li class="text-center my-4">
          <a href="#" @click.prevent="$router.push('/menu')">Menu</a>
        </li>
        <li class="text-center my-4">
          <a href="#" @click.prevent="$router.push('/news')"> News </a>
        </li>
        <li class="text-center my-4">
          <a href="#" @click.prevent="$router.push('/contact')"> Contact </a>
        </li>
        <li class="d-flex flex-column justify-content-center my-5">
          <div class="d-flex justify-content-center mt-5 gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100082710796984"
              target="_blank"
            >
              <i class="fa-brands fa-facebook fa-sm"></i>
            </a>
            <a href="https://instagram.com/el_andariegotruck" target="_blank">
              <i class="fa-brands fa-instagram fa-sm"></i>
            </a>
            <a href="https://g.page/r/CY53oo_JlDb8EAI/review" target="_blank">
              <i class="fa-brands fa-google fa-xs"></i>
            </a>
          </div>
          <div class="d-flex justify-content-center my-5">
            <button
              class="btn rounded-pill btn-dark fs-4 px-5 py-3"
              @click="copyPhone"
              type="button"
            >
              Call Us
            </button>
          </div>
        </li>
      </ul>
    </div>
    <!-- <form class="d-flex mt-1 ms-3 me-3" role="search">
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
          <a href="#" @click.prevent="$router.push(`/menu/items/${item.category}`)">
            <h6 v-text="item.name"></h6>
            <p class="searchPrice mb-1" v-text="'$' + item.price"></p>
          </a>
        </li>
      </ul>
    </div> -->
  </div>
  <main :class="{ 'non-active': !predicate }">
    <router-view />
  </main>
  <div :class="{ 'non-active': !predicate }">
    <footer-index />
  </div>
</template>

<script>
import Navbar from '@/views/nav/index.vue';
import FooterIndex from '@/views/footer/index.vue';
import { getSearchResults } from '@/api/el-andariego/search';

export default {
  name: 'App',
  components: {
    Navbar,
    FooterIndex,
  },
  data() {
    return {
      itemSearch: '',
      searchResult: [],
      predicate: true,
    };
  },
  created() {
    window.addEventListener('resize', this.closeOffCanvas);
  },
  watch: {
    async itemSearch() {
      this.searchResult = [];
      if (this.itemSearch) {
        const res = await getSearchResults(this.itemSearch);
        this.searchResult = res;
      }
    },
    $route() {
      this.predicate = true;
    },
  },
  methods: {
    async copyPhone() {
      try {
        await navigator.clipboard.writeText('949-806-0123');
      } catch (err) {
        alert('Could not copy');
      }
    },
    closeOffCanvas() {
      if (window.innerWidth > 800) {
        this.predicate = true;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: 'Libre Baskerville', Helvetica, Arial;
  padding-top: 116.5px;
  /* Needed for white space on the right */
  /* Messes with sticky-top */
  overflow-x: hidden;
}
</style>

<style scoped>
.searchPrice {
  font-size: 14px;
}

.non-active {
  visibility: hidden;
  display: none;
}

.nav-offcanvas {
  background-color: white;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 116.5px;
  bottom: 0px;
  z-index: 2;
  overflow: scroll;

  visibility: hidden;
  opacity: 0;
  height: 0;
  transition: opacity 0.5s ease;
}

.nav-offcanvas--active {
  visibility: visible;
  opacity: 1;
  height: auto;
}

@media (min-width: 800px) {
  .nav-offcanvas {
    display: none;
    visibility: hidden;
  }

  main {
    display: block;
    visibility: visible;
  }

  .footer {
    display: block;
    visibility: visible;
  }
}

main {
  min-height: 100vh;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.btn {
  background-color: #006847;
  border-color: #006847;
}

.btn:hover {
  background-color: #006847;
  border-color: #006847;
  opacity: 0.6;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: black;
  opacity: 0.6;
}
</style>
