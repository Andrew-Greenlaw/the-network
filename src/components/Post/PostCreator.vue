<template>
  <div class="d-flex gap-3 align-items-center">
    <router-link :to="{name: 'Profile',params: {id: creator.id}}">
      <img :src="creator.picture" :alt="creator.name" :title="creator.name">
    </router-link>
    <div>
      <h5>{{creator.name}}</h5>
      <div class="d-flex">
        <p>{{post.createdAt}}</p>
        <p class="px-3" v-if="creator.graduated == true"><i class="mdi mdi-school"></i></p>
      </div>
    </div>
  </div>
</template>


<script>
import { Account } from '../../models/Account.js';
import { Post } from '../../models/Post.js';

export default {
  props: {
    creator: {
      type: Account,
      required: true
    },
    post: {
      type: Post,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
img {
  height: 64px;
  width: 64px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}

p {
  margin: unset;
}
</style>