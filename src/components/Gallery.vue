<template>
  <div id="galleryInfo">
    <ul class='nav'>
      <button
        class='nav-btn'
        v-on:click="filterRecords('Photographs')"
      >Photographs
      </button>

      <button
        class='nav-btn'
        v-on:click="filterRecords('Sculpture')"
        >Sculptures
      </button>

      <button
        class='nav-btn'
        v-on:click="filterRecords('Medals and Medallions')"
        >Medals and Medallions
      </button>

      <button
        class='nav-btn'
        v-on:click="filterRecords('Prints')"
        >Prints
      </button>

      <button
        class='nav-btn'
        v-on:click="filterRecords('Paintings')"
        >Paintings
      </button>

      <button
        class='nav-btn'
        v-on:click="filterRecords('Coins')"
        >Coins
      </button>

      <button
        class='nav-btn'
        v-on:click="filterRecords('Manuscripts')"
        >Manuscripts
      </button>

      <button
        class='nav-btn'
        v-on:click="filterRecords('Books')"
        >Books
      </button>

      <button
        class='nav-btn'
        v-on:click="filterRecords('Drawings')"
        >Drawings
      </button>
    </ul>

    <section class='record-container'>
      <div
        v-if='filtered'
        v-for='record in filteredInfo'
        :key='record.id'
      >
        <img
          class='galleryItem'
          :src='record.primaryimageurl'
        />
      </div>
      <div
        v-if='!filtered'
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
      galleryInfo: [],
      filteredInfo: [],
      filtered: false
    }
  },
  methods: {
    filterRecords: function (filter) {
      const filteredRecords = this.galleryInfo.filter(record => record.classification === filter)
      this.filteredInfo = filteredRecords
      this.filtered = true
    }
  },
  mounted () {
    for (let i = 1; i < 20; i++) {
      axios
        .get(`https://api.harvardartmuseums.org/object?size=100&page=${i}&apikey=0b7812a0-12e5-11e9-b96e-b96134bf93ea`)
        .then(response => {
          const recordsWithPic = response.data.records.filter(record => record.primaryimageurl)
          this.galleryInfo.push(...recordsWithPic)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  margin-top: -80px;
  padding: 0;
}

.nav-btn {
  font-size: 1.1rem;
  margin: 0 5px;
  border: none;
  padding: 10px;
  border-bottom: 2px solid white;

}

.nav-btn:hover {
  cursor: pointer;
  border-bottom: 2px solid maroon;
}

.nav-btn:focus {
  outline: none;
  background: maroon;
  color: white;
}

.record-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px auto 0;
  width: 90%;
}

.galleryItem {
  height: 200px;
  margin: 5px;
}
</style>
