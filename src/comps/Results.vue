<template>
    <div v-if="error">{{ error }}</div>
    <div v-else v-for="result in results" :key="result.id">
        {{ result.name }}
    </div>
</template>


<script>
export default {
    name: 'Results',
    props: [
        'query'
    ],
    data() {
        return {
            error: '',
            results: []
        }
    },
    watch: {
        async query(query) {
            this.getData(query)
        }
    },
    methods: {
        async getData(query) {
            if (!query.length) {
                this.results = []
                return
            }

            try {
                const res = await fetch(`http://localhost:4220/api/data/o/q/${query}`)
                this.results = await res.json()
            } catch (e) {
                this.error = e;
            }
        }
    }
}
</script>
