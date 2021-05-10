import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
console.log(app)
console.log(app.config)
const vm = app.mount('div.root')

const ignoredTags = [
    'INPUT'
]

const handleKeyup = (evt) => {
    if (ignoredTags.includes(evt.target.tagName)) return
    console.log(evt);
}

window.addEventListener('keyup', handleKeyup)

const observer = new MutationObserver(list => {
    console.log(list);
});
observer.observe(document.body, {attributes: true, childList: true, subtree: true});
