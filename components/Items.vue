<template>
  <div>
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
  props: ['singleCategory', 'allItems', 'itemsChecked'],

  computed: {
    filteredItems: function() {
      const singleCategory = this.singleCategory
      const testItems = this.allItems.filter(function(item) {
        return item.key === singleCategory
        // return (item.category_name === singleCategory)
      })
      return testItems[0].data.map((obj) => obj.key)
    }
  }
}
</script>

<style></style>
