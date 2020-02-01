<template>
  <div style="padding: 0px 60px 0px 60px;">
    <div v-for="item in categoryItems" :key="item.key">
      <Itemrow
        :singleItem="item.key"
        :itemsChecked="checkedItem.data"
        @checkStatus="checkingStatus"
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
  },

  methods: {
    // ADDing items in localstorage if checked, and removing them if unchecked
    checkingStatus: function(itemName) {
      /* if (this.checkedItem.data.includes(itemName)) {
        this.removeChecked(itemName)
      } else {
        this.addChecked(itemName)
      } */
      localStorage.setItem(
        'checkedItem-storage',
        JSON.stringify(this.checkedItem.data)
      )
    }
  }
}
</script>

<style></style>
