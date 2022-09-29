<template>
  <div class="d-flex gap-3">
    <img :src="creator.picture" :alt="creator.name" :title="creator.name">
    <h4>{{creator.name}}</h4>
  </div>
</template>


<script>
import { Account } from '../../models/Account.js';

export default {
  props: {
    creator: {
      type: Account,
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
</style>