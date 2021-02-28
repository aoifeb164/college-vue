/**
 * @Date:   2021-02-21T12:53:07+00:00
 * @Last modified time: 2021-02-28T19:54:01+00:00
 */

import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import CoursesIndex from './views/courses/Index'
// import CoursesShow from './views/courses/Show'
import LecturersIndex from './views/lecturers/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/courses',
      name: 'courses_index',
      component:CoursesIndex
    },
    // {
    //   path: '/courses/show',
    //   name: 'courses_show',
    //   component:CoursesShow
    // },
    {
      path: '/lecturers',
      name: 'lecturers_index',
      component:LecturersIndex
    },
  ]
});
