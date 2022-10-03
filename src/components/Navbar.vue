<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/cw-logo.png" height="45" />
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>
      LOGIN COMPONENT HERE
    </div>
  </nav> -->
  <div class="navbar p-2">
    <router-link :to="{ name: 'Home' }">
      <h2 @click="getPosts()" class="text-light text-shadow "><span class="network">Network</span></h2>
    </router-link>
    <!-- TODO searchpage -->
    <!-- <router-link :to="{name: 'Search'}">
    </router-link> -->
    <SearchForm />
  </div>
</template>

<script>
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop.js';
import Login from './Login.vue'
export default {
  setup() {
    return {
      async getPosts() {
        try {
          await postsService.getPosts()
        } catch (error) {
          Pop.error('[GetPosts]', error)
        }
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.text-shadow {
  color: aliceblue;
  text-shadow: 1px 1px rgb(49, 49, 49), 0px 0px 5px rgb(162, 162, 162);
  letter-spacing: 0.08rem
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.navbar {
  height: 10vh;
  display: flex;
  justify-content: space-between;
}

.network {
  font-family: 'Righteous', cursive;
}

a {
  color: rgb(12, 12, 12);
}
</style>
