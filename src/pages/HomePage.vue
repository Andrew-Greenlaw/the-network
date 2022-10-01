<template>
  <div class="row route-view">
    <div>
      <button class="btn" :disabled="!previousPage" @click="changePage(previousPage)">Previous</button>
      <button class="btn" :disabled="!nextPage" @click="changePage(nextPage)">Next</button>
    </div>
    <div class="post-form col-12 p-3" v-if="account.id">
      <div class="card elevation-1">
        <div class="card-body">
          <PostForm :creator="account" />
        </div>
      </div>
    </div>
    <PostCard v-for="p in posts" :post="p" :key="p.id" />
  </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import { postsService } from '../services/PostsService.js'
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { computed } from '@vue/reactivity';
import PostCard from '../components/Post/PostCard.vue';
import PostForm from '../components/Post/PostForm.vue';
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
      // async go(n) {
      //   try {
      //     if (AppState.page == 1 && n == -1) { throw new Error('you have reached the end') }
      //     await postsService.getPosts(AppState.page + n)
      //   } catch (error) {
      //     Pop.error(error, '[GET NEXT OR PREVIOUS PAGE]')
      //   }
      // },
      async changePage(pageUrl) {
        try {
          if (!AppState.term) {
            await postsService.changePage(pageUrl)
          } else {
            await postsService.getPostsBySearchTerm(AppState.term, pageUrl)
          }
        } catch (error) {
          Pop.error(error, '[Change Page]')
        }
      },
      posts: computed(() => AppState.posts),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      account: computed(() => AppState.account)
    };
  },
  components: { PostCard, PostForm }
}
</script>

<style scoped lang="scss">
.route-view {
  .img {
    height: 200px;
    max-width: 200px;
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
}
</style>
