<script setup></script>

<template>
  <div class="nav-offcanvas pt-2">
    <div class="position-relative h-75">
      <ul class="mx-4 mt-5 fs-1 fw-light">
        <li class="text-center my-4">
          <a href="#" @click.prevent="$router.push('/')">Home</a>
        </li>
        <li class="text-center my-4">
          <a href="#" @click.prevent="$router.push('/menu')">Menu</a>
        </li>
        <li class="text-center my-4">
          <a href="#" @click.prevent="$router.push('/blog')">Blog</a>
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
              type="button"
              @click="$_andariego_copyPhone"
            >
              Call Us
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-offcanvas {
  background-color: white;
  position: absolute;
  left: 0px;
  top: 116.5px;
  bottom: 0px;
  z-index: 1000;
  width: 100vw;
  overflow: scroll;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.btn {
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.6;
  }
}

.btn-success {
  background-color: #1a532e;
  border-color: #1a532e;
}

a {
  color: black;
  text-decoration: none;

  &:hover {
    color: black;
    opacity: 0.6;
  }
}
</style>
