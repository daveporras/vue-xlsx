import Vue from 'vue'
import Router from 'vue-router'
import XLSXComponent from '@/components/XLSX'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xlsx-component',
      component: XLSXComponent
    }
  ]
})
