import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/scss/materialdesignicons.scss'
import '~/config/style'
import '~/config/icons'

import autoLoad from '~/config/autoLoadComponents'
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
  Vue.use(Buefy)
  autoLoad(Vue) 
}