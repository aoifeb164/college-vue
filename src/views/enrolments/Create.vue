<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-04-01T17:24:04+01:00
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
    <b-form-group class="textbox" label="Status" align="left">
        <b-form-select v-model="form.status">
          <b-form-select-option :value="null">Please select an option</b-form-select-option>
          <b-form-select-option value="a">career_break</b-form-select-option>
          <b-form-select-option value="b">assigned</b-form-select-option>
          <b-form-select-option value="c">interested</b-form-select-option>
          <b-form-select-option value="d">associate</b-form-select-option>
        </b-form-select>
      </b-form-group>
    <!-- <b-form-group class="textbox" id="input-group-1" label="Course:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.course_id" type="text" placeholder="Enter course id" required ></b-form-input>
    </b-form-group> -->
    <b-form-group class="textbox" label="Course" align="left">
    <b-form-select v-model="form.course_id">
      <b-form-select-option v-for="course in courses" :value="course.id" :key="course.id"> {{course.title}}</b-form-select-option>
    </b-form-select>
    </b-form-group>
    <!-- <b-form-group class="textbox" id="input-group-1" label="Lecturer:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.lecturer_id" type="text" placeholder="Enter lecturer id" required ></b-form-input>
    </b-form-group> -->
    <b-form-group class="textbox" label="Lecturer" align="left">
    <b-form-select v-model="form.lecturer_id">
      <b-form-select-option v-for="lecturer in lecturers" :value="lecturer.id" :key="lecturer.id"> {{lecturer.name}}</b-form-select-option>
    </b-form-select>
    </b-form-group>
    <!-- <b-form-group class="textbox" id="input-group-1" label="Enrolment level:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.enrolments" type="text" placeholder="Enter level" required ></b-form-input>
    </b-form-group> -->
</b-form>
<div class="text-center">
    <b-button class="view" variant="outline-dark" @click="createEnrolment()">Submit</b-button>
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
      errors: {},
      courses:[],
      lecturers:[],
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
        Date: this.form.date,
        Time: this.form.time,
        Status: this.form.status,
        Course: this.form.course_id,
        Lecturer: this.form.lecturer_id,
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

.heading{
  padding-top: 50px;
  padding-bottom: 20px;
}
.form{

}
</style>
