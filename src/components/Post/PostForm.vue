<template>
  <div class="post-form">
    <form @submit.prevent="handleSubmit">
      <!-- TODO i need to make a body as a textarea and picture input if the so choose and a submit button -->
      <div class="d-flex">
        <div class="pe-3"><img :src="creator.picture" :alt="creator.name"></div>
        <div class="mb-3 flex-grow-1">
          <textarea class="form-control mb-3" id="imgUrl" v-model="editable.imgUrl" rows="3"
            placeholder="Share whats happening"></textarea>
          <div>
            <input type="url" class="form-control" id="body" v-model="editable.body" placeholder="Add a photo link!">
          </div>
          <div class="">
            <button class="btn"><i class="mdi mdi-send text-success"></i> Post</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { ref } from 'vue';
import { Account } from '../../models/Account.js';
import { postsService } from '../../services/PostsService.js';
import Pop from '../../utils/Pop.js';

export default {
  props: {
    creator: {
      type: Account,
      required: true
    }
  },
  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        try {
          await postsService.createPost(editable)
        } catch (error) {
          Pop.error(error, '[PostForm]')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.post-form {
  img {
    height: 64px;
    width: 64px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }
}
</style>