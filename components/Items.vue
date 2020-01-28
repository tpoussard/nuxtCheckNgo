<template>
  <div style="padding: 0px 60px 0px 60px;">
    <div v-for="item in categoryItems" :key="item.key">
      <Itemrow
        :singleItem="item.key"
        :itemsChecked="itemsChecked"
        @checkingStatus="checkingStatus"
      ></Itemrow>
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
    },
    itemsChecked: {
      default: () => [],
      type: Array
    }
  },

  methods: {
    // ADDing items in localstorage if checked, and removing them if unchecked
    checkingStatus: function(itemName) {
      if (this.itemsChecked.includes(itemName)) {
        const index = this.itemsChecked.indexOf(itemName)
        this.itemsChecked.splice(index, 1) // delete 1 item on index 'index'
      } else {
        this.itemsChecked.push(itemName)
      }
      localStorage.setItem(
        'checkedItem-storage',
        JSON.stringify(this.itemsChecked)
      )
    }
  }
}
</script>

<style></style>
