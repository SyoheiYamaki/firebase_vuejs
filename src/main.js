import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSignOutAlt,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faSignOutAlt,
  faEllipsisV
)

import { firestorePlugin } from 'vuefire'          
import firebase from 'firebase'     
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({                
  apiKey: "AIzaSyAkqTI_GDHIa3LDnfa0t8DdjxwAm-4JWxA",
  authDomain: "techpit-test-33357.firebaseapp.com",
  databaseURL: "https://techpit-test-33357.firebaseio.com",
  projectId: "techpit-test-33357",
  storageBucket: "techpit-test-33357.appspot.com",
  messagingSenderId: "633418890211",
  appId: "1:633418890211:web:9ef1b1843f07c19ce5bed6"
})

export const db = firebase.firestore()
export const auth = firebase.auth()


Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
