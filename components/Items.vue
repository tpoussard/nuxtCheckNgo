<template>
  <div style="padding: 0px 60px 0px 60px;">
    <div v-for="item in filteredItems" :key="item">
      <Itemrow :singleItem="item" :itemsChecked="itemsChecked"></Itemrow>
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
    singleCategory: {
      default: 'Waiting...',
      type: String
    },
    allItems: {
      default: () => [],
      type: Array
    },
    itemsChecked: {
      default: () => [],
      type: Array
    }
  },

  computed: {
    filteredItems: function() {
      const singleCategory = this.singleCategory
      const testItems = this.allItems.filter(
        (item) => item.key === singleCategory
        // return (item.category_name === singleCategory)
      )
      return testItems[0].data.map((obj) => obj.key)
    }
  }
}
</script>

<style></style>
