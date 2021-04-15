<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-04-14T15:42:18+01:00
-->
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
    <!-- <b-form-group class="textbox" id="input-group-1" label="Status:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.status" type="text" placeholder="Enter status" required ></b-form-input>
    </b-form-group> -->
    <b-form-group label="Status">
        <b-row class="level">
      <b-form-radio v-model="form.status" value="career_break" class="radio">career_break</b-form-radio>
          <b-form-radio v-model="form.status" value="assigned" class="radio">assigned</b-form-radio>
          <b-form-radio v-model="form.status" value="interested" class="radio">interested</b-form-radio>
          <b-form-radio v-model="form.status" value="associate" class="radio">associate</b-form-radio>
</b-row>
      </b-form-group>
    <!-- <b-form-group class="textbox" id="input-group-1" label="Course:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.course_id" type="text" placeholder="Enter course id" required ></b-form-input>
    </b-form-group> -->
    <b-form-group class="textbox" label="Course" align="left">
    <b-form-select v-model="form.course_id">
      <b-form-select-option v-for="course in courses" :value="course.id" :key="course.id"> {{ course.title }}</b-form-select-option>
    </b-form-select>
    </b-form-group>
    <!-- <b-form-group class="textbox" id="input-group-1" label="Lecturer:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.lecturer_id" type="text" placeholder="Enter lecturer id" required ></b-form-input>
    </b-form-group> -->
    <b-form-group class="textbox" label="Lecturer" align="left">
    <b-form-select v-model="form.lecturer_id">
      <b-form-select-option v-for="lecturer in lecturers" :value="lecturer.id" :key="lecturer.id"> {{ lecturer.name }}</b-form-select-option>
    </b-form-select>
    </b-form-group>
    <!-- <b-form-group class="textbox" id="input-group-1" label="Enrolment level:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.enrolments" type="text" placeholder="Enter level" required ></b-form-input>
    </b-form-group> -->
</b-form>
<div class=" text-center arrow">
  <b-button variant="outline">
    <b-icon variant="outline-dark" @click="createEnrolment()"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#292f33" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></b-icon>
</b-button>
</div>
  </div>
</template>

<script>
import axios from '@/config/api';

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
<style>

</style>
