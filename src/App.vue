<template>
  <header>
    <div class="head"></div>
  </header>
  <main class="container-fluid">
    <div class="row">
      <LoginComponent />
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-12 network">
            <Navbar />
          </div>
          <div class="col-md-9 scroll">
            <router-view />
          </div>
          <div class="col-md-3 scroll">
            <AdComponent v-for="p in products" :product="p" :key="p.title" />
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="d-flex">
    <div class="foot"></div>
    <div class="modal fade" id="accountEdit" tabindex="-1" aria-labelledby="accountEditLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="accountEditLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <AccountForm />
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import Login from './components/Login.vue'
import AdComponent from './components/AdComponent.vue'
import LoginComponent from './components/Login/LoginComponent.vue'
import Pop from './utils/Pop.js'
import { productsService } from '../src/services/ProductsService.js'
import AccountForm from './components/AccountForm.vue'
export default {
  setup() {
    async function getProducts() {
      try {
        await productsService.getProducts()
      } catch (error) {
        Pop.error('[Get Ads]', error)
      }
    }
    onMounted(() => {
      getProducts()
    })
    return {
      appState: computed(() => AppState),
      products: computed(() => AppState.products)
    }
  },
  components: { Navbar, Login, AdComponent, LoginComponent, AccountForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.scroll {
  height: 90vh;
  overflow-y: auto;
}

.network {
  height: 10vh;
  background-color: #533A7B;
}
</style>
