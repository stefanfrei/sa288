import { createApp } from 'vue'
import App from '/src/App.vue'
import { enableGlobalHandlers } from '/src/api/helpers/globalhandlers'
import { enableMutationObserver } from '/src/api/helpers/mutobs'

const settings = {
    globHandlers: true,
    mutObs: false
}
const app = createApp(App)
const vm = app.mount('div.root')

if (settings.globHandlers === true) enableGlobalHandlers(vm)
if (settings.mutObs === true) enableMutationObserver()
