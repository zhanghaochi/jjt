import Vue from 'vue'
import svgicon from '@/components/svgicon'// svg组件

// register globally
Vue.component('svg-icon', svgicon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
