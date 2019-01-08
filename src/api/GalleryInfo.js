const axios = require('axios');

export default {
  data() {
    return {
      galleryInfo: null
    }
  },
  mounted() {
    axios
      .get('https://api.harvardartmuseums.org/object?apikey=0b7812a0-12e5-11e9-b96e-b96134bf93ea')
      .then(response => {
        const galleryInfoPromises = response.data.records.map(record => {
          return axios.get(`/object/${record.objectid}?apikey=0b7812a0-12e5-11e9-b96e-b96134bf93ea`)
        })
        .then(response => {
          return response;
        })
      return Promise.all(galleryInfoPromises)
      })
      .then(response => this.galleryInfo = response)
  }
}