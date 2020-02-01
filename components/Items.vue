<template>
  <div style="padding: 0px 60px 0px 60px;">
    <div v-for="item in categoryItems" :key="item.key">
      <Itemrow
        :singleItem="item.key"
        :itemsChecked="checkedItem.data"
      ></Itemrow>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
  },

  computed: {
    ...mapState(['checkedItem'])
  }
}
</script>

<style></style>
