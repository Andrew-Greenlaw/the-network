<template>
  <div class="post-form">
    <form @submit.prevent="handleSubmit">
      <!-- TODO i need to make a body as a textarea and picture input if the so choose and a submit button -->
      <div class="d-flex">
        <div class="pe-3">
          <router-link :to="{name: 'Profile',params: {id: creator.id}}">
            <img :src="creator.picture" :alt="creator.name">
          </router-link>
        </div>
        <div class="flex-grow-1">
          <textarea class="form-control mb-3" id="body" v-model="editable.body" rows="3"
            placeholder="Share whats happening" required maxlength="300"></textarea>
          <div class="d-flex justify-content-between">
            <div class="flex-grow-1">
              <input type="url" class="form-control" id="imgUrl" v-model="editable.imgUrl"
                placeholder="Add a photo link!">
            </div>
            <div class="d-flex justify-content-end ps-2">
              <button type="submit" class="btn selectable"><i class="mdi mdi-send text-success"></i> Post</button>
            </div>
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
          const formData = editable.value
          await postsService.createPost(formData)
          editable.value = {}
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