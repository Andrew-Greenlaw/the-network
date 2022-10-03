<template>
  <span class="">
    <button class="login btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0" @click="login"
      v-if="!user.isAuthenticated">
      Login
    </button>
    <div class="dropdown my-2 my-lg-0" v-else>
      <div class="dropdown-toggle selectable rounded p-3" data-bs-toggle="dropdown" aria-expanded="false"
        id="authDropdown">
        <div v-if="account.picture || user.picture" class=" d-flex flex-wrap justify-content-center">
          <img :src="account.picture || user.picture" alt="account photo" class="user-picture" />
          <span class="mx-3 lighten-30 fs-5">{{ account.name || user.name }}</span>
        </div>

      </div>
      <div class="dropdown-menu p-0 list-group w-100" aria-labelledby="authDropdown">
        <router-link :to="{ name: 'Account' }">
          <div class="list-group-item list-group-item-action hoverable">
            Manage Account
          </div>
        </router-link>
        <div class="list-group-item list-group-item-action hoverable text-danger" @click="logout">
          <i class="mdi mdi-logout"></i>
          logout
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}

.user-picture {
  height: 150px;
  width: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: #98C1D9 solid 1px;
}

.login {
  font-size: 2rem;
}

.dropdown-menu.show {
  transform: scale(1);
}

.hoverable {
  cursor: pointer;
}
</style>
