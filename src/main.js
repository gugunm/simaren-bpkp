import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import CoreuiVue from '@coreui/vue'
import CIcon from '@coreui/icons-vue'
import { iconsSet as icons } from '@/assets/icons'
import DocsCallout from '@/components/DocsCallout'
import DocsExample from '@/components/DocsExample'
import { func } from './globalFunctions'

import VueGoodTablePlugin from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'

import { API_URL } from './api.js'

import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

import './assets/tailwind.css'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import excel from 'vue-excel-export'

const app = createApp(App)

app.config.globalProperties.$apiAddress = API_URL
app.config.globalProperties.$func = func

app.use(store)
app.use(router)
app.use(CoreuiVue)
app.use(VueGoodTablePlugin)
app.use(VueToast, {
  position: 'top',
})
app.use(excel)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.component('DocsCallout', DocsCallout)
app.component('DocsExample', DocsExample)

app.mount('#app')
