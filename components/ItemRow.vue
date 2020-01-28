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
    handleChange: function() {
      this.$emit('checkingStatus', this.singleItem)
    }
  }
}
</script>

<style></style>
