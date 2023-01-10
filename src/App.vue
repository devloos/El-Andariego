<template>
  <Navbar @toggle-nav="predicate = !predicate" />
  <div class="nav-offcanvas" :class="{ 'nav-offcanvas--active': !predicate }">
    <ul class="justify-content-end flex-grow-1 pe-3">
      <li class="mt-1 mb-1 ms-3 fw-bold">
        <a href="#" @click.prevent="$router.push('/')">Home</a>
      </li>
      <li class="mt-1 mb-1 ms-3 fw-bold">
        <a href="#" @click.prevent="$router.push('/menu')">Menu</a>
      </li>
      <li class="mt-1 mb-1 ms-3 fw-bold">
        <a href="#" @click.prevent="$router.push('/news')"> News </a>
      </li>
      <li class="mt-1 mb-1 ms-3 fw-bold">
        <a href="#" @click.prevent="$router.push('/contact')"> Contact </a>
      </li>
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
          <a href="#" @click.prevent="$router.push(`/menu/items/${item.category}`)">
            <h6 v-text="item.name"></h6>
            <p class="searchPrice mb-1" v-text="'$' + item.price"></p>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <main :class="{ 'non-active': !predicate }">
    <router-view />
  </main>
  <Footer :class="{ 'non-active': !predicate }" />
</template>

<script>
import Navbar from '@/views/nav/index.vue';
import Footer from '@/views/footer/index.vue';
import { getSearchResults } from '@/api/el-andariego/search';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      itemSearch: '',
      searchResult: [],
      predicate: true,
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
    $route() {
      this.predicate = true;
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

<style>
#app {
  font-family: 'Libre Baskerville', Helvetica, Arial;
  padding-top: 116.5px;
  /* Needed for white space on the right */
  /* Messes with sticky-top */
  overflow-x: hidden;
}

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
  top: 120px;
  bottom: 0px;
  z-index: 2;
  overflow: scroll;

  visibility: hidden;
  opacity: 0;
  height: 0;
  transition: opacity 0.9s ease;
}

.nav-offcanvas--active {
  visibility: visible;
  opacity: 1;
  height: auto;
}
</style>

<style scoped>
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

a {
  color: black;
  text-decoration: none;
}

a:hover {
  color: black;
  opacity: 0.6;
}
</style>
