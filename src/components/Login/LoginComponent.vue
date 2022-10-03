<template>
  <div class="login-component col-md-3 bg-white d-flex align-items-center justify-content-center">
    <div class="login-card">
      <div class="login-body flex-column">
        <Login />
        <div class="d-flex flex-grow-1 justify-content-end">
          <a v-if="account.linkedin" :href="account.linkedin" target="_blank">
            <i class="mdi mdi-linkedin selectable fs-3"></i>
          </a>
          <a v-if="account.github" :href="account.github" target="_blank">
            <i class="mdi mdi-github selectable fs-3"></i>
          </a>
          <a v-if="account.resume" :href="account.resume" target="_blank">
            <i class="mdi mdi-file-document selectable fs-3"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../../AppState.js';
import Login from '../Login.vue';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { Login }
}
</script>


<style lang="scss" scoped>
.login-component {
  height: 100vh;

  .login-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>