<template>
  <div class="profile-detail">
    <div class="profile-card card elevation-1">
      <div class="profile-img d-flex justify-content-between align-items-center p-3"
        :style="{backgroundImage: `url(${profile.coverImg})`}">
        <img :src="profile.picture" :alt="profile.name" :title="profile.name">
      </div>

      <div class="card-body">
        <div class="p-1 d-flex justify-content-end">
          <a v-if="profile.github" :href="profile.github" target="_blank">
            <i class="mdi mdi-deviantart selectable"></i>
          </a>
        </div>
        <div class="p-1 mt-4">
          <p>{{profile.graduated}}</p>
          <h4>{{profile.name}}</h4>
          <p>{{profile.bio}}</p>
          <p>{{profile.class}}</p>
          <!-- <p>{{profile.gitgub}}</p> -->
          <!-- <p>{{profile.linkedin}}</p>
          <p>{{profile.resume}}</p> -->
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
  //   background-size: cover;
  //   background-position: center;
  // }
  .profile-img {
    background-position: center;
    background-size: cover;
    height: 150px;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
  }

  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    transform: translateY(4rem);
  }
}
</style>