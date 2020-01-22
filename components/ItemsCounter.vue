<template>
  <div class="ItemsCounter">{{ counter }} / {{ liste.length }}</div>
</template>

<script>
export default {
  name: 'Count',

  props: {
    allItems: {
      default: () => [],
      type: Array
    },
    singleCategory: {
      default: 'Waiting',
      type: String
    },
    itemsChecked: {
      default: () => [],
      type: Array
    }
  },

  computed: {
    liste() {
      return this.allItems
        .filter(
          (i) => i.key === this.singleCategory
          // (i) => i.category_name === this.singleCategory
          // écrire un test ici
        )
        .map((obj) => obj.data)[0]
    },
    counter() {
      let countChecked = 0
      for (let it = 0; it < this.liste.length; it++) {
        // if (this.itemsChecked.includes(liste[it].name)) {
        if (this.itemsChecked.includes(this.liste[it].key)) {
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
