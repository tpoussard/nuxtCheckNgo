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
                :allItems="itemList.data"
                :singleCategory="categoryName"
                :itemsChecked="checkedList"
              ></DisplayCount>
            </v-list-item>

            <Items
              :allItems="itemList.data"
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
import { mapState } from 'vuex'
import ItemsList from './Items.vue'
import ItemsCounter from './ItemsCounter.vue'

export default {
  name: 'Category',

  components: {
    Items: ItemsList,
    DisplayCount: ItemsCounter
  },

  data: function() {
    return {
      checkedList: []
    }
  },

  computed: {
    filteredCategories: function() {
      // return [...new Set(this.items.map(category => category.category_name))]
      return [...new Set(this.itemList.data.map((category) => category.key))]
    },
    ...mapState(['itemList'])
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
