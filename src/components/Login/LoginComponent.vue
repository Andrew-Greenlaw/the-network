<template>
  <div class="login-component">
    <div class="card">
      <button class="btn">Create Post</button>
      <div class="card-body">
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
// .login-component {}
</style>