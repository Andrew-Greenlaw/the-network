<template>
  <div class="login-component col-md-3 bg-white">
    <div class="login-card">
      <div class="login-body">
        <Login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from '../Login.vue';
export default {
  setup() {
    return {};
  },
  components: { Login }
}
</script>


<style lang="scss" scoped>
.login-component {
  height: 100vh;

}
</style>