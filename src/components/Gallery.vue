<template>
  <div id="galleryInfo">
    <section class='record-container'>
      <div 
        v-for='record in galleryInfo' 
        :key='record.id'
      >
        <img
          class='galleryItem'
          :src='record.primaryimageurl'
        />
      </div>
    </section>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Gallery',
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
        const recordsWithPic = response.data.records.filter(record => record.primaryimageurl !== null)
        this.galleryInfo = recordsWithPic;
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style scoped>

.record-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: -80px;
}

.galleryItem {
  height: 400px;
  margin: 10px;
}

</style>
