<template>
  <div style="padding: 0px 60px 0px 60px;">
    <div v-for="item in categoryItems" :key="item.key">
      <Itemrow :single-item="item.key"></Itemrow>
    </div>
  </div>
</template>

<script>
import itemrow from './ItemRow'

export default {
  name: 'Items',
  components: {
    Itemrow: itemrow
  },
  props: {
    categoryItems: {
      default: () => [],
      type: Array
    }
  }
}
</script>

<style></style>
