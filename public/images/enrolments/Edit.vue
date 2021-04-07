<!--
@Date:   2021-03-24T15:07:27+00:00
@Last modified time: 2021-04-07T16:16:19+01:00
-->

<!-- Enrolment edit form
select date
select time
choose status from radio buttons
slect course from dropdown
select lecturer from dropdown -->

<template>
  <div class="container">
    <h4 class="heading">Edit Enrolment:</h4>
<b-form class="form">
    <b-form-group class="textbox" id="input-group-1" label="Date:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.date" type="date" placeholder="Enter enrolment date" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Time:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.time" type="time" placeholder="Enter time" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Status:" align="left" label-for="input-1">
      <b-form-radio v-model="form.status" value="career_break">career_break</b-form-radio>
          <b-form-radio v-model="form.status" value="assigned">assigned</b-form-radio>
          <b-form-radio v-model="form.status" value="interested">interested</b-form-radio>
          <b-form-radio v-model="form.status" value="associate">associate</b-form-radio>
      </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Course:" label-for="input-1" align="left" placeholder="course">
    <b-form-select id="input-1" v-model="form.course_id">
      <b-form-select-option id="input-1" v-for="course in courses" :value="course.id" :key="course.id"> {{ course.title }}</b-form-select-option>
    </b-form-select>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Lecturer:" label-for="input-1" align="left" placeholder="lecturer">
    <b-form-select id="input-1" v-model="form.lecturer_id">
      <b-form-select-option id="input-1" v-for="lecturer in lecturers" :value="lecturer.id" :key="lecturer.id"> {{ lecturer.name }}</b-form-select-option>
    </b-form-select>
    </b-form-group>
</b-form>

<!-- submit button to edit enrolment
calls editEnrolment method -->
<div class="text-center">
    <b-button variant="outline-dark" @click="editEnrolment()">Submit</b-button>
</div>
  </div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

export default {
  name: 'EnrolmentsEdit',
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
      errors: {}
    }
  },


  mounted(){
this.getEnrolment();
this.getCourses();
this.getLecturers();
  },
  methods: {
  // getting the information of the enrolment we want to edit
    getEnrolment(){
       let token = localStorage.getItem('token');
      //  console.log(token);

      //getting the enrolment from the list of enrolments with the enrolmet id and displaying the info
       axios.get(`/enrolments/${this.$route.params.id}`, {
         headers: {Authorization: "Bearer " + token}
       })
       .then(response => {
         console.log(response.data);
         this.form.date = response.data.data.date;
         this.form.time = response.data.data.time;
         this.form.status = response.data.data.status;
         this.form.course_id = response.data.data.course_id;
         this.form.lecturer_id = response.data.data.lecturer_id;
       })
       .catch(error => {
         console.log(error)
         console.log(error.response.data)
       })
     },

     //editing and updating the enrolment with information inputed in the form
    editEnrolment() {
      let token = localStorage.getItem('token');


      axios.put(`/enrolments/${this.$route.params.id}`, {
        date: this.form.date,
        time: this.form.time,
        status: this.form.status,
        course_id: this.form.course_id,
        lecturer_id: this.form.lecturer_id,
      },
      {
        headers: { Authorization: "Bearer " + token}
      })
      //redirecting back to the index
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
    },

    //gettting the list of courses from the courses index
    getCourses() {
      let token = localStorage.getItem('token');
      //  console.log(token);

      axios.get('/courses', {
          headers: {
            Authorization: "Bearer " + token
          }
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

    //getting the list of lecturers from the lecturers index
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
  },
}
</script>

<!-- style elements -->
<style>

.heading{
  padding-top: 50px;
  padding-bottom: 20px;

}

</style>
