/**
 * @Date:   2021-02-21T12:53:07+00:00
 * @Last modified time: 2021-03-16T09:53:01+00:00
 */

import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import CoursesIndex from './views/courses/Index'
import CoursesCreate from './views/courses/Create'
import CoursesShow from './views/courses/Show'
import CoursesEdit from './views/courses/Edit'

import LecturersIndex from './views/lecturers/Index'
import LecturersCreate from './views/lecturers/Create'
import LecturersShow from './views/lecturers/Show'
// import LecturersEdit from './views/lecturers/Edit'

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
      path: '/courses/create',
      name: 'courses_create',
      component:CoursesCreate
    },
    {
      path: '/courses',
      name: 'courses_index',
      component:CoursesIndex
    },
    {
      path: '/courses/show',
      name: 'courses_show',
      component:CoursesShow
    },
    {
      path: '/courses/edit',
      name: 'courses_edit',
      component:CoursesEdit
    },

    {
      path: '/lecturers/create',
      name: 'lecturers_create',
      component:LecturersCreate
    },
    {
      path: '/lecturers',
      name: 'lecturers_index',
      component:LecturersIndex
    },
    {
      path: '/lecturers/show',
      name: 'lecturers_show',
      component:LecturersShow
    },
    // {
    //   path: '/lecturers/edit',
    //   name: 'lecturers_edit',
    //   component:LecturersShow
    // },
  ]
});
