<template>
  <div class="account-page">
    <ProfileDetail :profile="account" />
    <div class="d-flex justify-content-center py-3">
      <!-- WHAT!!?????? -->
      <router-link :to="{name: 'Profile',params: {id: `${account.id}`}}">
        <button class="btn fs-4">My Posts</button>
      </router-link>
    </div>
  </div>

</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import ProfileDetail from '../components/Profile/ProfileDetail.vue';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { ProfileDetail }
}
</script>

<style scoped>
.account-page {
  padding: 1rem;
}

img {
  max-width: 100px;
}
</style>
