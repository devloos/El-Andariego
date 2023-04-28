<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  created() {
    window.addEventListener('resize', this.toggleNavBurger);
  },
  watch: {
    $route() {
      this.isActive = false;
    },
  },
  methods: {
    toggleNavBurger() {
      if (window.innerWidth > 800) {
        this.isActive = false;
      }
    },
  },
};
</script>

<template>
  <div class="nav-header container-fluid">
    <a class="nav-title fs-4 fw-bold mt-2" href="#" @click.prevent="$router.push('/')">
      El Andariego
    </a>
    <button
      class="hamburger hamburger--squeeze"
      :class="{ 'is-active': isActive }"
      @click="$emit('toggle-nav'), (isActive = !isActive)"
      type="button"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div class="nav-expanded">
      <a class="nav-expanded-item" href="#" @click.prevent="$router.push('/')">Home</a>
      <a class="nav-expanded-item" href="#" @click.prevent="$router.push('/menu')">
        Menu
      </a>
      <a class="nav-expanded-item" href="#" @click.prevent="$router.push('/blog')"
        >Blog</a
      >
      <a class="nav-expanded-item" href="#" @click.prevent="$router.push('/contact')"
        >Contact</a
      >
      <a
        href="https://www.facebook.com/profile.php?id=100082710796984"
        class="nav-expanded-item"
        target="_blank"
      >
        <i class="fa-brands fa-facebook fa-lg"></i>
      </a>
      <a
        href="https://instagram.com/el_andariegotruck"
        class="nav-expanded-item"
        target="_blank"
      >
        <i class="fa-brands fa-instagram fa-lg"></i>
      </a>
      <a
        href="https://g.page/r/CY53oo_JlDb8EAI/review"
        class="nav-expanded-item"
        target="_blank"
      >
        <i class="fa-brands fa-google fa-md"></i>
      </a>
      <button
        class="btn rounded-4 btn-dark ms-3 px-5 py-3"
        @click="$_andariego_copyPhone"
        type="button"
      >
        Call Us
      </button>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/hamburgers.css';

.nav-header {
  padding: 28px 35px 28px 35px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
}

.nav-title {
  font-family: 'Merriweather', serif;
  color: #1a532e;
}

.nav-title:hover {
  color: #1a532e;
  opacity: 0.6;
}

@media (max-width: 999px) {
  .hamburger {
    display: block;
    visibility: visible;
    float: right;
  }

  .nav-expanded {
    display: none;
    visibility: hidden;
  }
}

@media (min-width: 1000px) {
  .hamburger {
    display: none;
    visibility: hidden;
  }

  .nav-expanded {
    display: inline;
    vertical-align: middle;
  }

  .nav-expanded-item {
    margin-right: 15px;
  }
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.btn {
  background-color: #1a532e;
  border-color: #1a532e;
}

.btn:hover {
  background-color: #1a532e;
  border-color: #1a532e;
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
