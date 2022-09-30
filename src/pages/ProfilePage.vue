<template>
  <div class="profile-page" v-if="profile">
    <ProfileDetail />
  </div>
  <div v-else>
    Loading...
  </div>
</template>


<script>
import { useRoute } from 'vue-router';
import ProfileDetail from '../components/ProfileDetail.vue';

export default {
  setup() {
    const route = useRoute();
    // TODO get Profile
    // get posts
    return {};
  },
  components: { ProfileDetail }
}
</script>


<style lang="scss" scoped>

</style>