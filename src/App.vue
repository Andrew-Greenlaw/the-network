<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <LoginComponent />
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-12">
            <Navbar />
          </div>
          <div class="col-md-9">
            <router-view />
          </div>
          <div class="col-md-3">
            <AdComponent />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Login from './components/Login.vue'
import AdComponent from './components/AdComponent.vue'
import LoginComponent from './components/Login/LoginComponent.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, Login, AdComponent, LoginComponent }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
