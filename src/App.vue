<template>
  <Search />
</template>

<script>
import Search from './comps/Search.vue'

import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    Search,
  }
}
</script>

<style>
body {
  background-color:#2c3e50;
  margin: 0;
  padding: 0;
}

.root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b10099;
}
</style>
