<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-03-30T18:58:41+01:00
-->
<template>
  <div class="container text-center">
    <h4 class="heading">Create Enrolment:</h4>
<b-form class="form">
    <b-form-group class="textbox" id="input-group-1" label="Date:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.date" type="date" placeholder="Enter enrolment date" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Time:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.time" type="time" placeholder="Enter enrolment time" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Status:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.status" type="text" placeholder="Enter status" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Course:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.course_id" type="text" placeholder="Enter course id" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Lecturer:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.lecturer_id" type="text" placeholder="Enter lecturer id" required ></b-form-input>
    </b-form-group>
    <!-- <b-form-group class="textbox" id="input-group-1" label="Enrolment level:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.enrolments" type="text" placeholder="Enter level" required ></b-form-input>
    </b-form-group> -->
</b-form>

    <b-button class="view" variant="outline-dark" @click="createEnrolment()">Submit</b-button>

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
      errors: {}
    }
  },
  mounted(){

  },
  methods: {
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
  text-align: center;
}
.form{

}
</style>
