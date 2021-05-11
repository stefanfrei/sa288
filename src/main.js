import { createApp } from 'vue'
import App from '/src/App.vue'
import { initGlobalHandlers } from '/src/api/helpers/globalhandlers'
import { initMutationObserver } from '/src/api/helpers/mutobs'
import { initWsClient } from '/src/api/helpers/wsclient'

const settings = {
  globHandlers: true,
  mutObs: false,
  wsClient: true,
}

const app = createApp(App)
const vm = app.mount('div.root')

if (settings.globHandlers === true) initGlobalHandlers(vm)
if (settings.mutObs === true) initMutationObserver()
if (settings.wsClient === true) initWsClient()
