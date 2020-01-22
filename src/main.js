import Buefy from 'buefy'
import '~/config/style'
import * as IconsList from '~/config/iconsList'

import autoLoad from '~/config/autoLoadComponents'
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
  Object.keys(IconsList).forEach(name=>{
    Vue.component(name, IconsList[name]);
  })
  Vue.use(Buefy)
  autoLoad(Vue) 
}