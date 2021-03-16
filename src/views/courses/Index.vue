<!--
@Date:   2021-02-21T15:48:00+00:00
@Last modified time: 2021-03-16T10:50:25+00:00
-->

<template>
  <b-container fluid>
<div>
  <div class="text-center">
  <H5 class="title">Welcome to the course index</H5>
</div>
  <br>
  <div class="text-center">
<!-- <b-button class="view" variant="outline-dark" @click="getCourses()">View Courses</b-button> -->
<b-button class="view" variant="outline"><router-link :to="{ name: 'courses_create'}">Create Course</router-link></b-button>
<b-button class="view" variant="outline"><router-link :to="{ name: 'courses_edit'}">Edit Course</router-link></b-button>
<b-button class="view" variant="outline">Delete Course</b-button>
<input type="text" v-model="term" />
<b-button @click="searchCourse()">
  search
</b-button>
</div>

<!-- <button @click="logout()"> Logout </button> -->

<!-- <table>
  <tr>
  <th>Title</th>
  <th>Code</th>
</tr>
</table> -->
<!-- <router-link :to="{ name: 'courses_create'}">Create</router-link> -->
<div class="container">
  <b-table striped hover :items="filteredCourses" :fields="fields" >
    <template #cell(title)="data">
      <router-link :to="{ name: 'courses_show', params: { id: data.item.id }}">{{ data.item.title }}</router-link>
    </template>
  </b-table>
</div>
</div>
</b-container>
</template>

<script>
import axios from '@/config/api';
export default {
  name: 'CourseIndex',
  components: {
  },
  data(){
    return {
      fields: [
        {
          key: 'title',
          sortable: true,
        },
        'code',
        'points',
        {
          key: 'level',
          sortable: true,
        }
        ],
courses: [],
term:"",
filteredCourses: []
    }
  },
  watch:{
  term:function(){
    this.searchCourse();
  }
},
   mounted(){
   this.getCourses();
  },
  methods: {
    searchCourse(){
      this.filteredCourses = this.courses.filter(course =>
         course.title.toLowerCase().includes(this.term.toLowerCase()));
    },
  getCourses(){
    let token = localStorage.getItem('token');
  //  console.log(token);

   axios.get('/courses', {
     headers: {
       Authorization: "Bearer " + token}
   })
   .then(response => {
     console.log(response.data);
     this.courses = response.data.data;
     this.filteredCourses = this.courses;
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
.title{
  padding-top: 50px;
}

.view {
   /* margin-bottom: 50px!important; */
}
</style>
