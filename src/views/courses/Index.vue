<!--
@Date:   2021-02-21T15:48:00+00:00
@Last modified time: 2021-04-02T16:55:32+01:00
-->

<template>
    <div class="container fluid">
    <div class="text-center">
      <b-row>
        <h3 class="view">Courses</h3>
        <b-button class="view" variant="outline">
          <router-link :to="{ name: 'courses_create'}">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
</router-link>
        </b-button>
<div>
      <input type="text" v-model="term" @input="searchCourse()" v-on:keyup.enter="searchCourse()" placeholder="search course" class="search" />
      <b-button variant="outline" @click="searchCourse()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</b-button>
</div>
    </b-row>
  </div>

      <b-table hover id="my-table" :items="filteredCourses" :busy="isBusy" :fields="fields" :per-page="perPage" :current-page="currentPage">

        <template #table-busy>
          <div class="text-center text-danger my-2 loading">
            <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" variant="dark"></b-spinner><br>
            <strong class="loadtext">Loading...</strong>
          </div>
        </template>

        <template #cell(title)="data">
          <router-link :to="{ name: 'courses_show', params: { id: data.item.id }}"  class="courseTitle">{{ data.item.title }}</router-link>
        </template>
        <template #cell(actions)="data">
          <router-link :to="{ name: 'courses_edit', params: { id: data.item.id }}"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square editButton" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg></router-link>


          <b-icon class="modalButton" @click="showDeleteModal(data.item.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg></b-icon>

          <CourseDeleteModal ref="CourseDeleteModal" :courseId="selectedCourse" />
</template>
      </b-table>
      <b-pagination
       v-model="currentPage"
       :total-rows="rows"
       :per-page="perPage"
       aria-controls="my-table"
       align="center"
     ></b-pagination>
  </div>
</template>

<script>
import axios from '@/config/api';
import CourseDeleteModal from '@/components/CourseDeleteModal.vue'

export default {
  name: 'CourseIndex',
  components: {
    CourseDeleteModal,
  },
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      isBusy: false,
      fields: [{
          key: 'title',
          sortable: true,
        },
        'code',
        'points',
        {
          key: 'level',
          sortable: true,
        },
        'actions'
      ],
      courses: [],
      lecturers: [],
      term: "",
      filteredCourses: [],
      selectedCourse:0,
    }
  },
  computed: {
    rows() {
      return this.courses.length
    }
  },
  watch: {
    term: function() {
      this.searchCourse();
    }
  },
  mounted() {
    this.getCourses();
    this.getLecturers();
  },
  methods:{
    showDeleteModal(courseId) {
      this.selectedCourse = courseId
      this.$refs.CourseDeleteModal.show();
    },
    searchCourse() {
      this.filteredCourses = this.courses.filter(course =>
        course.title.toLowerCase().includes(this.term.toLowerCase()));
    },
    getCourses() {
      let token = localStorage.getItem('token');
      this.isBusy = true;
      //  console.log(token);

      axios.get('/courses', {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.courses = response.data.data;
          this.filteredCourses = this.courses;
          this.isBusy = false;
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })
    },
    getLecturers() {
      let token = localStorage.getItem('token');
      //  console.log(token);

      axios.get('/lecturers', {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.lecturers = response.data.data;
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })
    },
  },
}
</script>
<style>
.home {
  text-align: center;
}
.title {
  padding-top: 50px;
}
.view {
margin-left: 25px;
margin-top: 20px;
}
.search{
  margin-top: 25px;
  margin-left: 580px;
  border-style: none;
  border-bottom: solid black 1px;
}
.editButton{
  margin-right: 20px;
}
.loadtext{
  color: black;
}
.loading{
  padding-top: 200px;
}
.courseTitle{
  color: Black !important;
  font-size: 18px;
}
</style>
