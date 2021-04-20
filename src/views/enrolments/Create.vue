<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-04-20T13:01:09+01:00
-->
<!--
enrolment create form
enter date
eneter time
enter status
select course
select lecturer -->
<template>
  <div class="container">
    <h4 class="heading">Create Enrolment:</h4>
<b-form class="form">
    <b-form-group class="textbox" id="input-group-1" label="Date:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.date" type="date" placeholder="Enter enrolment date" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Time:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.time" type="time" placeholder="Enter enrolment time" required ></b-form-input>
    </b-form-group>
    <b-form-group label="Status">
        <b-row class="level">
      <b-form-radio v-model="form.status" value="career_break" class="radio">career_break</b-form-radio>
          <b-form-radio v-model="form.status" value="assigned" class="radio">assigned</b-form-radio>
          <b-form-radio v-model="form.status" value="interested" class="radio">interested</b-form-radio>
          <b-form-radio v-model="form.status" value="associate" class="radio">associate</b-form-radio>
</b-row>
      </b-form-group>
    <b-form-group class="textbox" label="Course" align="left">
    <b-form-select id="input-1" v-model="form.course_id">
      <b-form-select-option id="input-1" v-for="course in courses" :value="course.id" :key="course.id"> {{ course.title }}</b-form-select-option>
    </b-form-select>
    </b-form-group>
    <b-form-group class="textbox" label="Lecturer" align="left">
    <b-form-select id="input-1" v-model="form.lecturer_id">
      <b-form-select-option id="input-1" v-for="lecturer in lecturers" :value="lecturer.id" :key="lecturer.id"> {{ lecturer.name }}</b-form-select-option>
    </b-form-select>
    </b-form-group>
</b-form>

  <!--  button to create enrolment calling the createEnrolment method -->
<div class=" text-center arrow">
  <b-button variant="outline">
    <b-icon variant="outline-dark" @click="createEnrolment()"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#292f33" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></b-icon>
</b-button>
</div>
  </div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

// creates local registration of component
export default {
  name: 'EnrolmentCreate',
  components: {
  },
  data() {
    return {
      form: {
        date: "",
        time: "",
        status: "",
        course_id: "",
        lecturer_id: "",
      },
      courses:[],
      lecturers:[],
      errors: {},
    }
  },
  mounted() {
    this.getCourses();
    this.getLecturers();
  },
  methods: {
    //getting the list of courses and displaying then on the index page
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
    //getting the list of lecturers from the lecturer index
    getLecturers(){
      let token = localStorage.getItem('token');
    //  console.log(token);

     axios.get('/lecturers', {
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
     //called on arrow button when wanting to create a new course
    createEnrolment() {
      let token = localStorage.getItem('token');


      axios.post('/enrolments', {
        date: this.form.date,
        time: this.form.time,
        status: this.form.status,
        course_id: this.form.course_id,
        lecturer_id: this.form.lecturer_id,
      },
      {
        headers: { Authorization: "Bearer " + token}
      })
        //redirect back to enrolments index
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: 'enrolments_index' });
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data)
        if (error.response.data.errors) {
          this.errors = error.response.data.errors
        }
      })
    }
  },
}

</script>
<!-- style elements -->
<style>
</style>
