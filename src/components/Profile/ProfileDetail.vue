<template>
  <div class="profile-detail" v-if="profile.id">
    <div class="profile-card card elevation-1">
      <div class="profile-img d-flex align-items-center p-3" :style="{backgroundImage: `url(${profile.coverImg})`}">
        <img class="img" :src="profile.picture" :alt="profile.name" :title="profile.name">
      </div>
      <div class="card-body">
        <div class="p-1 d-flex justify-content-between">
          <p class="links fs-2" v-if="profile.graduated"><i class="mdi mdi-school"></i></p>
          <div class="d-flex flex-grow-1 justify-content-end">
            <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank">
              <i class="mdi mdi-linkedin selectable fs-3"></i>
            </a>
            <a v-if="profile.github" :href="profile.github" target="_blank">
              <i class="mdi mdi-github selectable fs-3"></i>
            </a>
            <a v-if="profile.resume" :href="profile.resume" target="_blank">
              <i class="mdi mdi-file-document selectable fs-3"></i>
            </a>
          </div>
        </div>
        <div class="p-1 mt-5">
          <div class="d-flex gap 3 align-items-center justify-content-between details">
            <div>
              <h4>{{profile.name}}</h4>
            </div>
            <div class="px-4">
              <p>{{profile.class}}</p>
            </div>
          </div>
          <p>{{profile.bio}}</p>

        </div>
        <div class="d-flex justify-content-end">
          <router-link :to="{ name: 'Account' }" v-if="account.id == profile.id">
            <button type="button" class="btn text-info" data-bs-toggle="modal" data-bs-target="#accountEdit">
              Edit
            </button>
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { AppState } from '../../AppState.js';
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
      account: computed(() => AppState.account)
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

  .details {
    p {
      margin: unset;
    }
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
    outline: #98C1D9 solid 2px;
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