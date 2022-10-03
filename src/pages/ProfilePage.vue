<template>
  <div class="profile-page" v-if="profile">
    <div class="profile-details">
      <ProfileDetail :profile="profile" />
    </div>
    <PostCard v-for="p in posts" :post="p" :key="p.id" />
    <div class="d-flex justify-content-between px-5 py-3">
      <button class="btn" :disabled="!previousPage" @click="changePage(previousPage)">Previous</button>
      <button class="btn" :disabled="!nextPage" @click="changePage(nextPage)">Next</button>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import ProfileDetail from '../components/Profile/ProfileDetail.vue';
import { postsService } from '../services/PostsService.js';
import { profilesService } from '../services/ProfileService.js';
import Pop from '../utils/Pop.js';
import PostCard from '../components/Post/PostCard.vue';

export default {
  setup() {
    const route = useRoute();
    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.id);
      }
      catch (error) {
        Pop.error(error, "[GetProfileById]");
      }
    }
    async function getPostsByCreatorId() {
      try {
        await postsService.getPostsByCreatorId(route.params.id);
      }
      catch (error) {
        Pop.error(error, "[GetPostsByCreatorId]");
      }
    }
    onMounted(() => {
      getPostsByCreatorId();
      getProfileById();
    });
    return {
      async changePage(pageUrl) {
        try {
          await postsService.changePage(pageUrl)
        } catch (error) {
          Pop.error(error, '[Change Page]')
        }
      },
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage)

    };
  },
  components: { ProfileDetail, PostCard }
}
</script>


<style lang="scss" scoped>
.profile-page {
  padding: 1rem;
}
</style>