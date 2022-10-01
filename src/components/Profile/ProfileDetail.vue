<template>
  <div class="profile-detail">
    <div class="profile-card card elevation-1">
      <div class="d-flex justify-content-between p-3">
        <img :src="profile.picture" :alt="profile.name" :title="profile.name">
      </div>

      <div class="card-body">
        <div class="p-1">
          <h4>{{profile.name}}</h4>
          <p>{{profile.bio}}</p>
          <p>{{profile.class}}</p>
          <!-- <p>{{profile.gitgub}}</p> -->
          <!-- <p>{{profile.linkedin}}</p>
          <p>{{profile.resume}}</p> -->
          <!-- <p>{{profile.graduated}}</p> -->
          <!-- <p>{{profile.coverImg}}</p> -->
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { Account } from '../../models/Account.js';



export default {
  props: {
    profile: {
      type: Account,
      required: true
    }
  },
  setup() {
    return {
      // coverImg: computed(() => `url(${props.profile.coverImg})`),
    }
  }
}
</script>


<style lang="scss" scoped>
.profile-detail {
  // .profile-card {
  //   background-image: v-bind(coverImg);
  // }

  img {
    height: 64px;
    width: 64px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }
}
</style>