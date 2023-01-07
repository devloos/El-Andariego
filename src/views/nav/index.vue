<template>
  <div class="nav-header container-fluid bg-success">
    <a class="nav-title fs-4 fw-bold" href="#" @click.prevent="$router.push('/')">
      El Andariego
    </a>
    <button class="nav-burger btn fa-bounce border border-0" type="button">
      <i class="fa-solid fa-bars fa-lg"></i>
    </button>
  </div>
  <div class="nav-offcanvas bg-danger">
    <ul class="justify-content-end flex-grow-1 pe-3">
      <li class="nav-item mt-1 mb-1 ms-3 fw-bold">
        <a href="#" @click.prevent="$router.push('/')">Home</a>
      </li>
      <li class="mt-1 mb-1 ms-3 fw-bold">
        <a href="#" @click.prevent="$router.push('/menu')">Menu</a>
      </li>
      <li class="mt-1 mb-1 ms-3 fw-bold">
        <a href="#" @click.prevent="$router.push('/catering')"> News </a>
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
            <p id="searchPrice" class="mb-1" v-text="'$' + item.price"></p>
          </a>
        </li>
      </ul>
    </div>
  </div>
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
.nav-header {
  padding-top: 26px;
  padding-bottom: 26px;
  padding-left: 15px;
}

@media (max-width: 800px) {
  .nav-burger {
    display: block;
    visibility: visible;
    float: right;
    --fa-animation-iteration-count: 3;
  }

  .nav-offcanvas {
  }
}

@media (min-width: 800px) {
  .nav-burger {
    display: none;
    visibility: hidden;
  }

  .nav-offcanvas {
    display: none;
    visibility: hidden;
  }
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
  color: black;
  text-decoration: none;
}

a:hover {
  color: black;
}
</style>
