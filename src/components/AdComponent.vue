<template>
  <div class="ad-component p-2 ">
    <img class="img-fluid elevation-1" :src="product.tall" :alt="product.title">
  </div>
</template>
<script>
import { Product } from '../models/Product.js';

export default {
  props: {
    product: {
      type: Product,
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