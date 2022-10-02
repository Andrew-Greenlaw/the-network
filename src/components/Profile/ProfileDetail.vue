<template>
  <div class="profile-detail">
    <div class="profile-card card elevation-1">
      <div class="profile-img d-flex align-items-center p-3" :style="{backgroundImage: `url(${profile.coverImg})`}">
        <img class="img" :src="profile.picture" :alt="profile.name" :title="profile.name">
      </div>
      <div class="card-body">
        <div class="p-1 d-flex justify-content-between">
          <p class="links fs-2" v-if="profile.graduated"><i class="mdi mdi-school"></i></p>
          <div>
            <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank">
              <i class="mdi mdi-deviantart selectable fs-3"></i>
            </a>
            <a v-if="profile.github" :href="profile.github" target="_blank">
              <i class="mdi mdi-deviantart selectable fs-3"></i>
            </a>
          </div>
        </div>
        <div class="p-1">
          <!-- <p>{{profile.graduated}}</p> -->
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
  .links {
    padding-left: 30%;
  }

  .profile-img {
    background-position: center;
    background-size: cover;
    height: 150px;
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem;
  }

  img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    transform: translateY(4rem);
  }

  @media screen and (max-width:700px) {
    .profile-img {
      background-position: center;
      background-size: cover;
      height: 150px;
      border-top-left-radius: .3rem;
      border-top-right-radius: .3rem;
      justify-content: center;
    }

    .links {
      padding-left: unset;
    }
  }
}
</style>