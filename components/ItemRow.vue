<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ singleItem }}</v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-checkbox
        :id="singleItem"
        v-model="selected"
        @change="checkingStatus(singleItem, itemsChecked)"
      ></v-checkbox>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: 'Itemrow',
  props: {
    singleItem: {
      default: 'Waiting',
      type: String
    },
    itemsChecked: {
      default: () => [],
      type: Array
    }
  },

  data: () => {
    return {
      selected: null
    }
  },

  // Loading checked items stored in localStorage
  mounted() {
    if (this.itemsChecked.includes(this.singleItem)) {
      this.selected = true
    }
  },

  methods: {
    // ADDing items in localstorage if checked, and removing them if unchecked
    checkingStatus: function(itemName, listOfItemsChecked) {
      if (listOfItemsChecked.includes(itemName)) {
        const index = listOfItemsChecked.indexOf(itemName)
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
