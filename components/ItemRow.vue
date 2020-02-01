<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{ singleItem }}</v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-checkbox
        :id="singleItem"
        v-model="selected"
        @change="handleChange"
      ></v-checkbox>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Itemrow',
  props: {
    singleItem: {
      default: 'Waiting',
      type: String
    }
  },

  data: () => {
    return {
      selected: null
    }
  },

  // Loading checked items stored in localStorage
  mounted() {
    const includeChecked = this.$store.getters['checkedItem/includeChecked']
    this.selected = includeChecked(this.singleItem)
  },

  methods: {
    ...mapActions({
      addChecked: 'checkedItem/addChecked',
      removeChecked: 'checkedItem/removeChecked'
    }),
    toStorage: function() {
      const checkedData = [...this.$store.getters['checkedItem/getState']]
      localStorage.setItem('checkedItem-storage', JSON.stringify(checkedData))
    },
    handleChange: function() {
      const includeChecked = this.$store.getters['checkedItem/includeChecked']
      if (!includeChecked(this.singleItem)) {
        this.addChecked(this.singleItem)
      } else {
        this.removeChecked(this.singleItem)
      }
      this.toStorage()
    }
  }
}
</script>

<style></style>
