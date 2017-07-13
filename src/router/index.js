/**
 * Created by ZLL on 2017/7/12.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home.vue'
import server from '../components/server/server.vue'
import serverL from '../components/server-list/server-list.vue'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/server',
      component: server
    },
    {
      path: '/serverL',
      component: serverL
    }
  ]
})


