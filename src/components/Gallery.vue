<template>
  <div class="header">
    <div id="galleryInfo">
      <section>
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
.galleryItem {
  width: 300px;
}
</style>
