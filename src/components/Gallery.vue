<template>
  <div class="header">
  <div id="galleryInfo">
    
  </div>
  </div>
</template>

<script>
const axios = require('axios');

new Vue({
  el: '#galleryInfo',
  data () {
    return {
      galleryInfo: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get('https://api.harvardartmuseums.org/object?apikey=0b7812a0-12e5-11e9-b96e-b96134bf93ea')
      .then(response => {
        this.galleryIinfo = response.records
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
})
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
