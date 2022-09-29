<template>
  <PostCard v-for="p in posts" :post="p" :key="p.id" />
  <div>
    <button class="btn" :disabled="page == 1" @click="go(-1)">Previous</button>
    <button class="btn" :disabled="page == lastPage" @click="go(1)">Next</button>
  </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js'
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { computed } from '@vue/reactivity';
import PostCard from '../components/Post/PostCard.vue';

export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts();
      }
      catch (error) {
        Pop.error(error, "[GETTING POSTS]");
      }
    }
    onMounted(() => {
      getPosts();
    });
    return {
      async go(n) {
        try {
          if (AppState.page) { throw new Error('you have reached the end') }
          await postsService.getPosts(AppState.page + n)
        } catch (error) {
          Pop.error(error, '[GET NEXT OR PREVIOUS PAGE]')
        }
      },
      posts: computed(() => AppState.posts)
    };
  },
  components: { PostCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
