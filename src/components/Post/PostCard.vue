<template>
  <div class="post-card col-12 p-3">
    <div class="card elevation-1">
      <div class="card-body">
        <PostCreator :creator="post.creator" />
        <div class="p-3">
          <p class="m-0">{{post.body}}</p>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { Post } from '../../models/Post.js';
import PostCreator from './PostCreator.vue';

export default {
  props: {
    post: {
      type: Post,
      required: true
    }
  },
  setup() {
    return {};
  },
  components: { PostCreator }
}
</script>


<style lang="scss" scoped>
.post-card {
  .text-shadow {
    color: aliceblue;
    text-shadow: 1px 1px black, 0px 0px 5px rgb(83, 83, 83);
    font-weight: bold;
    letter-spacing: 0.08rem
  }
}
</style>