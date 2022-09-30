<template>
  <div class="profile-detail">
    <div class="card elevation-1">
      <div class="card-body">
        <div class="p-3">
          <!-- ANCHOR continue to make a profileCard -->
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { Account } from '../models/Account.js';

export default {
  props: {
    profile: {
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

</style>