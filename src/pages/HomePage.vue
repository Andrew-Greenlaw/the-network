<template>
  <div>
    <button class="btn" :disabled="!previousPage" @click="changePage(previousPage)">Previous</button>
    <button class="btn" :disabled="!nextPage" @click="changePage(nextPage)">Next</button>
  </div>
  <PostForm />
  <PostCard v-for="p in posts" :post="p" :key="p.id" />
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
      previousPage: computed(() => AppState.previousPage)
    };
  },
  components: { PostCard }
}
</script>

<style scoped lang="scss">
.img {
  height: 200px;
  max-width: 200px;
  width: 100%;
  object-fit: contain;
  object-position: center;
}
</style>
