<template>
  <div class="post-card col-12 px-3 mt-3">
    <div class="card elevation-1">
      <div class="card-header d-flex justify-content-between align-items-center">
        <PostCreator :creator="post.creator" />
        <div>
          <i class="mdi mdi-delete selectable rounded" @click.stop="$emit('deletePost')"
            v-if="account.id == post.creatorId"></i>
          <p class="selectable rounded" id="likes"> <i class="mdi mdi-heart"></i>{{post.likeIds.length}}</p>
        </div>
      </div>
      <div class="img bg-dark text-center" v-if="post.imgUrl">
        <img class="img-fluid" :src="post.imgUrl" alt="unable to show picture">
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
      deletePost() {
        emit('deletePost')
      }
    };
  },
  components: { PostCreator }
}
</script>


<style lang="scss" scoped>
.post-card {

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