<template>
  <Search />
</template>

<script>
import Search from '/src/comps/Search.vue'
import getCompState from '/src/store/compstate'


export default {
  name: 'App',
  components: {
    Search,
  },
  setup() {
    const state = getCompState()

    return {
      state
    }
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
