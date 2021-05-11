<template>
<pre>{{ state.comps.value.search.display }}</pre>
  <section v-if="state.comps.value.search.display" class="searchbar">
      <input id="search" @input="updateQuery" type="text" v-model="query" placeholder="search">
  </section>
  <Suspense>
    <template #default>
      <Results :query="query"/>
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script>
import getCompState from '/src/store/compstate'
import Results from '/src/comps/Results.vue'

export default {
  name: 'Search',
  components: {
      Results,
  },
  data() {
      return {
          query: ''
      }
  },
  setup() {
    const state = getCompState()
    return { state }
  },
  methods: {
    updateQuery(evt) {
      this.query = evt.target.value;
    },
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}

.searchbar {
    padding: 2rem;
    text-align: left;
}

.searchbar > input {
    background-color: rgb(26, 26, 26);
    border-color: rgb(12, 12, 12);
    box-shadow: none;
    color: silver;
    display: block;
    font-size: 2rem;
    height: 3rem;
    margin: 0 auto;
    padding: 1rem;
    width: 80%;
}
</style>
