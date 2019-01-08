<template>
  <div id="app">
    <img
      id='logo'
      src="./assets/logo.png"
      alt='Harvard Art Museum Logo'
    >
    <Gallery/>
  </div>
</template>

<script>
import Gallery from './components/Gallery'

export default {
  name: 'App',
  components: {
    Gallery
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}

#logo {
  margin-top: -120px;
  width:400px;
}
</style>
