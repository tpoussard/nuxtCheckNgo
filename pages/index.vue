<template>
  <div class="Home">
    <Category></Category>
  </div>
</template>

<script>
// import axios from 'axios'
import Category from '@/components/Category.vue'

export default {
  name: 'Home',
  components: {
    Category
  }

  /* asyncData() {
    return axios
      .get(
        'https://jolly-poitras-86a932.netlify.com/.netlify/functions/server/another/'
      )
      .then((res) => {
        return { data: res.data }
      })
  } */
}
</script>
