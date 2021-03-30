/**
 * @Date:   2021-02-21T12:53:07+00:00
 * @Last modified time: 2021-03-30T18:38:26+01:00
 */

import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Dashboard from './views/Dashboard'
import CoursesIndex from './views/courses/Index'
import CoursesCreate from './views/courses/Create'
import CoursesShow from './views/courses/Show'
import CoursesEdit from './views/courses/Edit'

import LecturersIndex from './views/lecturers/Index'
import LecturersCreate from './views/lecturers/Create'
import LecturersShow from './views/lecturers/Show'
import LecturersEdit from './views/lecturers/Edit'

import EnrolmentsIndex from './views/enrolments/Index'
import EnrolmentsCreate from './views/enrolments/Create'
import EnrolmentsShow from './views/enrolments/Show'
import EnrolmentsEdit from './views/enrolments/Edit'

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
      path: '/',
      name: 'dashboard',
      component:Dashboard
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
    {
      path: '/lecturers/edit',
      name: 'lecturers_edit',
      component:LecturersEdit
    },

    {
      path: '/enrolments/create',
      name: 'enrolments_create',
      component:EnrolmentsCreate
    },
    {
      path: '/enrolments',
      name: 'enrolments_index',
      component:EnrolmentsIndex
    },
    {
      path: '/enrolments/show',
      name: 'enrolments_show',
      component:EnrolmentsShow
    },
    {
      path: '/enrolments/edit',
      name: 'enrolments_edit',
      component:EnrolmentsEdit
    },
  ]
});
