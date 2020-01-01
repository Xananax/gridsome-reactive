import '~/config/style'
import '~/config/fontAwesome'

import autoLoad from '~/config/autoLoadComponents'
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  Vue.component("Layout", DefaultLayout);
  autoLoad(Vue) 
}