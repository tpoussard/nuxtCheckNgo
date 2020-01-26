<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="blue" dark>
          <v-toolbar-title>Check&Go</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-list>
          <v-list-group
            v-for="categoryName in filteredCategories"
            :key="categoryName"
            no-action
          >
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title class="categoryTitle">{{
                  categoryName
                }}</v-list-item-title>
              </v-list-item-content>

              <DisplayCount
                :allItems="items"
                :singleCategory="categoryName"
                :itemsChecked="checkedList"
              ></DisplayCount>
            </v-list-item>

            <Items
              :allItems="items"
              :singleCategory="categoryName"
              :itemsChecked="checkedList"
            ></Items>
          </v-list-group>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import ItemsList from './Items.vue'
import ItemsCounter from './ItemsCounter.vue'

export default {
  name: 'Category',

  components: {
    Items: ItemsList,
    DisplayCount: ItemsCounter
  },

  props: {
    data: {
      default: () => {},
      type: Object
    }
  },

  data: function() {
    return {
      items: this.data.data,
      checkedList: []
    }
  },

  computed: {
    filteredCategories: function() {
      // return [...new Set(this.items.map(category => category.category_name))]
      return [...new Set(this.items.map((category) => category.key))]
    }
  },
  mounted() {
    if (localStorage.getItem('checkedItem-storage')) {
      this.checkedList = JSON.parse(
        localStorage.getItem('checkedItem-storage') || '[]'
      )
    }
  }
}
</script>

<style></style>
