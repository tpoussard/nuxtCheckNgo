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
// import axios from 'axios'
import ItemsList from './Items.vue'
import ItemsCounter from './ItemsCounter.vue'
const jsonData = require('../static/fr.json')

export default {
  name: 'Category',

  components: {
    Items: ItemsList,
    DisplayCount: ItemsCounter
  },

  data: () => {
    return {
      items: [],
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
    // If no localstorage, fetch data with axios, create a localstorage, and store data
    if (!localStorage.getItem('item-storage')) {
      this.items = jsonData.categories
      /*
     axios
       .get('http://checkngo.ighilr.fr/api/items/')
       .then(res => (this.items = res.data))
       .then(itemData => localStorage.setItem('item-storage', JSON.stringify(itemData)))
    */
      localStorage.setItem('item-storage', JSON.stringify(this.items))
      localStorage.setItem(
        'checkedItem-storage',
        JSON.stringify(this.checkedList)
      )
    } else {
      // If a localStorage exist, fetch data directly in this Storage
      this.items = JSON.parse(localStorage.getItem('item-storage') || '[]')
      this.checkedList = JSON.parse(
        localStorage.getItem('checkedItem-storage') || '[]'
      )
    }
  }
}
</script>

<style></style>
