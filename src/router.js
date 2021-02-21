/**
 * @Date:   2021-02-21T12:53:07+00:00
 * @Last modified time: 2021-02-21T12:55:53+00:00
 */

import Vue from 'Vue'
import Router from 'vue-router'

import Home from './views/Home'

vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
  ]
});
