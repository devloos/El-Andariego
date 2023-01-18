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
          <a href="#" @click.prevent="$router.push('/Blog')">Blog</a>
        </li>
        <li class="text-center my-4">
          <a href="#" @click.prevent="$router.push('/contact')">Contact</a>
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
              class="btn rounded-pill btn-success fs-4 px-5 py-3"
              @click="$_andariego_copyPhone"
              type="button"
            >
              Call Us
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <main :class="{ 'non-active': !predicate }">
    <router-view />
  </main>
  <div class="footer" :class="{ 'non-active': !predicate }">
    <footer-index />
  </div>
</template>

<script>
import { useHead } from '@vueuse/head';
import Navbar from '@/views/nav/index.vue';
import FooterIndex from '@/views/footer/index.vue';

export default {
  name: 'App',
  setup() {
    useHead({
      title: 'El Andariego',
      meta: [
        {
          name: 'description',
          content: 'Authentic Mexican Food Truck',
        },
      ],
    });
  },
  components: {
    Navbar,
    FooterIndex,
  },
  data() {
    return {
      predicate: true,
    };
  },
  created() {
    window.addEventListener('resize', this.closeOffCanvas);
  },
  watch: {
    $route() {
      this.predicate = true;
    },
  },
  methods: {
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
.non-active {
  visibility: hidden;
  opacity: 0;
  height: 0;
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

@media (min-width: 1000px) {
  .nav-offcanvas {
    display: none;
    visibility: hidden;
  }

  main {
    visibility: visible;
    opacity: 1;
    height: auto;
  }

  .footer {
    transition: opacity 0.5s ease;
    visibility: visible;
    opacity: 1;
    height: auto;
  }
}

main {
  transition: opacity 0.5s ease;
  min-height: 100vh;
}

.footer {
  background-color: white;
  transition: opacity 0.5s ease;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.btn {
  transition: opacity 0.15s;
}

.btn-success {
  background-color: #006847;
  border-color: #006847;
}

.btn:hover {
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
