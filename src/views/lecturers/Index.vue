<!--
@Date:   2021-02-28T19:54:47+00:00
@Last modified time: 2021-02-28T20:16:07+00:00
-->
<template>
  <b-container fluid>
<div >
  <div class="text-center">
  <H5 class="title">Welcome to the lecturers index</H5>
</div>
  <br>
  <div class="text-center">
<b-button class="view" variant="outline-dark" @click="getLecturers()">View Lecturers</b-button>
</div>
<!-- <button @click="logout()"> Logout </button> -->

<div>
  <b-table hover :items="lecturers"></b-table>
</div>
</div>
</b-container>
</template>

<script>
 import axios from 'axios';
export default {
  name: 'LectureIndex',
  components: {
  },
  data(){
    return {
lecturers: [],
    }
  },
   mounted(){
    this.getLecturers();
  },
  methods: {
  getLecturers(){
    let token = localStorage.getItem('token');
    //console.log(token);

   axios.get('http://college.api:8000/api/lecturers', {
     headers: {
       Authorization: "Bearer " + token}
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
.title{
  padding-top: 20px;
}

.view {
   margin-bottom: 20px!important;
}
</style>
