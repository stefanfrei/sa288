import { createApp } from 'vue'
import App from '/src/App.vue'
import getCompState from '/src/store/compstate'

const app = createApp(App)
const vm = app.mount('div.root')

const state  = getCompState()

const ignoredTags = [
    'INPUT'
]

const handleKeyup = (evt) => {
    const keyCode = evt.keyCode
    if (keyCode == 27) {
        state.comps.value.search.display = false
        return false
    } else {
        if (ignoredTags.includes(evt.target.tagName)) return false
        if (keyCode == 83) {
            state.comps.value.search.display = true
            vm.$nextTick(function() {
                document.getElementById("search").focus();
            })
            return false
        }
    }
}

window.addEventListener('keyup', handleKeyup)

const observer = new MutationObserver(list => {
    console.log(list)
})
observer.observe(document.body, {attributes: true, childList: true, subtree: true})
