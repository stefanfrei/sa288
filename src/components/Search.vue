<template>
  <section>
      <label for="search"></label>
      <input @input="update" type="text" v-model="query" placeholder="search">
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
import Results from './Results.vue'

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
  methods: {
    update(evt) {
      this.query = evt.target.value;
    },
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
