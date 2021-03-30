<!--
@Date:   2021-03-02T16:58:35+00:00
@Last modified time: 2021-03-30T18:59:41+01:00
-->
<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-03-30T18:59:41+01:00
-->
<template>
  <div class="container text-center">
    <h4 class="heading">Edit Enrolment:</h4>
<b-form class="form">
    <b-form-group class="textbox" id="input-group-1" label="Date:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.date" type="date" placeholder="Enter enrolment name" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Time:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.time" type="time" placeholder="Enter address" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Status:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.status" type="text" placeholder="Enter email" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Course:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.course_id" type="text" placeholder="Enter phone" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Lecturer:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.lecturer_id" type="text" placeholder="Enter phone" required ></b-form-input>
    </b-form-group>
</b-form>

    <b-button class="view" variant="outline-dark" @click="editEnrolment()">Submit</b-button>

  </div>
</template>

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
      errors: {}
    }
  },
  mounted(){
this.getEnrolment();
  },
  methods: {
    getEnrolment(){
       let token = localStorage.getItem('token');
      //  console.log(token);

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
    editEnrolment() {
      let token = localStorage.getItem('token');


      axios.put(`/enrolments/${this.$route.params.id}`, {
        Name: this.form.date,
        Address: this.form.time,
        Email: this.form.course_id,
        Phone: this.form.lecturer_id,
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
  margin-left: 300px;
}
</style>
