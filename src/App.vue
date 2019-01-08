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
  align-items: center;
}

#logo {
  margin-top: -100px;
  width: 400px;
}

</style>
