<template>
    <div v-if="error">{{ error }}</div>
    <div v-else v-for="test in tests" :key="test.id">
        {{ test.name }}
    </div>
</template>


<script>
export default {
    name: 'Test',
    props: [
        'query'
    ],
    data() {
        return {
            error: '',
            tests: []
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
                this.tests = []
                return
            }

            try {
                const testsResponse = await fetch(`http://localhost:4220/api/data/o/q/${query}`)
                this.tests = await testsResponse.json()
            } catch (e) {
                this.error = e;
            }
        }
    }
}
</script>
