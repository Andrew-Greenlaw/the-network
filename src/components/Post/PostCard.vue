<template>
  <div class="post-card col-12 px-3 mt-3">
    <div class="card elevation-1">
      <div class="card-header d-flex justify-content-between align-items-center">
        <PostCreator :creator="post.creator" :post="post" />

        <div class="text-end">
          <i class="mdi mdi-close selectable rounded" @click.stop="$emit('deletePost')"
            v-if="account.id == post.creatorId" title="Delete"></i>
          <div class="d-flex align-items-center selectable rounded" v-if="user.isAuthenticated">
            <i class="mdi mdi-heart fs-5" @click="toggleLike(post.id)" v-if="post.likeIds.includes(account.id)"></i>
            <i class="mdi mdi-heart-outline fs-5" @click="toggleLike(post.id)" v-else></i>
            <p id="likes"> {{post.likeIds.length}}</p>
          </div>
          <div class="d-flex align-items-center selectable rounded" v-else="!user.isAuthenticated">
            <i class="mdi mdi-heart-outline fs-5" @click="notify()"></i>
            <p id="likes"> {{post.likeIds.length}}</p>
          </div>
        </div>
      </div>
      <div class="img bg-dark text-center" v-if="post.imgUrl">
        <img class="img-fluid" :src="post.imgUrl" alt="post img">
      </div>
      <div class="card-footer">
        <div class="p-3">
          <p class="m-0">{{post.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../../AppState.js';
import { Post } from '../../models/Post.js';
import { postsService } from '../../services/PostsService.js';
import Pop from '../../utils/Pop.js';
import PostCreator from './PostCreator.vue';

export default {
  props: {
    post: {
      type: Post,
      required: true
    }
  },
  setup({ emit }) {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      deletePost() {
        emit('deletePost')
      },
      async toggleLike(id) {
        try {
          await postsService.toggleLike(id)
        } catch (error) {
          Pop.error('[addLike]')
        }
      },
      notify() {
        Pop.error('You Need to Login')
      }
    };
  },
  components: { PostCreator }
}
</script>


<style lang="scss" scoped>
.post-card {

  .heart {
    color: red;
  }

  img {
    max-height: 450px;
    object-fit: cover;
    object-position: center;
  }

  .text-shadow {
    color: aliceblue;
    text-shadow: 1px 1px black, 0px 0px 5px rgb(83, 83, 83);
    font-weight: bold;
    letter-spacing: 0.08rem
  }

  .card-footer {
    border-top: none;
  }

  .card-header {
    border-bottom: none;

    p {
      margin: unset;
    }
  }
}
</style>