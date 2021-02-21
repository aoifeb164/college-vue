<!--
@Date:   2021-02-21T15:48:00+00:00
@Last modified time: 2021-02-21T17:51:58+00:00
-->
<!--
@Date:   2021-02-21T12:52:16+00:00
@Last modified time: 2021-02-21T17:51:58+00:00
-->
<template>
<div >
  This is the Courses Index page
  <br>
<button @click="getCourses()"> Get Courses </button>
<button @click="Logout()"> Logout </button>
</div>
</template>

<script>
 import axios from 'axios';
export default {
  name: 'CourseIndex',
  components: {
  },
  data(){
    return {
courses: []
    }
  },
   mounted(){
  //   this.getCourses();
  },
  methods: {
  getCourses(){
    let token = localStorage.getItem('token');
   axios.get('http://college.api:8000/api/courses', {
     headers: {
       Authorization: "Bearer " + token}
   })
   .then(response => {
     console.log(response.data);
     this.courses = response.data.data;
   })
   .catch(error => {
     console.log(error)
     console.log(error.response.data)
   })
 },
 logout() {
   let token = localStorage.getItem('token');
  axios.get('http://college.api:8000/api/logout', {
    headers: {
      Authorization: "Bearer " + token}
  })
  .then(response => {
    console.log(response.data);
       console.log("Logged Out");
  })
  .catch(error => {
    console.log(error)
    console.log(error.response.data)
  })
  localStorage.removeItem('token');
 }
},
}
</script>
<style>
.home {
  text-align: center;
}
</style>
