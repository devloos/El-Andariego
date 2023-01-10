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
      <a class="nav-expanded-item" href="#" @click.prevent="$router.push('/news')"
        >News</a
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
      <button class="btn rounded-pill btn-dark ms-3 px-5 py-3" type="button">
        Call Us
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav-V',
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
@import '@/assets/hamburgers.css';

.nav-header {
  padding: 35px 35px 45px 35px;
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
  color: #006847;
}

.nav-title:hover {
  color: #006847;
  opacity: 0.6;
}

@media (max-width: 799px) {
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

@media (min-width: 800px) {
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
