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
            v-for="category in itemList.data"
            :key="category.key"
            no-action
          >
            <v-list-item slot="activator">
              <v-list-item-content>
                <v-list-item-title class="categoryTitle">{{
                  category.key
                }}</v-list-item-title>
              </v-list-item-content>

              <div class="ItemsCounter">
                {{ counter(category.data) }} / {{ category.data.length }}
              </div>
            </v-list-item>

            <Items
              :categoryItems="category.data"
              :itemsChecked="itemsChecked"
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

export default {
  name: 'Category',

  components: {
    Items: ItemsList
  },

  data: function() {
    return {
      itemsChecked: []
    }
  },

  computed: {
    ...mapState(['itemList'])
  },

  mounted() {
    if (localStorage.getItem('checkedItem-storage')) {
      this.itemsChecked = JSON.parse(
        localStorage.getItem('checkedItem-storage') || '[]'
      )
    }
  },

  methods: {
    counter(categoryData) {
      let countChecked = 0
      for (const item of categoryData) {
        if (this.itemsChecked.includes(item.key)) {
          countChecked += 1
        }
      }
      return countChecked
    }
  }
}
</script>

<style>
.ItemsCounter {
  color: gray;
}
</style>
