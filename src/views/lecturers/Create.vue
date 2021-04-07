<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-04-07T16:08:01+01:00
-->

<!-- lecturer create form
enter Name
enter address
enter phone number
enter email -->
<template>
  <div class="container">
    <h4 class="heading">Create Lecturer:</h4>
<b-form class="form">
    <b-form-group class="textbox" id="input-group-1" label="Name:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.name" type="text" placeholder="Enter lecturer name" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Address:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.address" type="text" placeholder="Enter address" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Phone:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.phone" type="text" placeholder="Enter phone number" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Email:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.email" type="text" placeholder="Enter email address" required ></b-form-input>
    </b-form-group>
</b-form>

<!-- submit button calling the createLecturer method -->
<div class="text-center">
    <b-button variant="outline-dark" @click="createLecturer()">Submit</b-button>
</div>
  </div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

export default {
  name: 'LecturersCreate',
  components: {
  },
  data() {
    return {
      form: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
      errors: {}
    }
  },
  mounted(){

  },
  methods: {

    //called when wanting to create a new library
    createLecturer() {
      let token = localStorage.getItem('token');
      //created new lecturer in lecturer withthe information entered in the form using post request
      axios.post('/lecturers', {
        name: this.form.name,
        address: this.form.address,
        phone: this.form.phone,
        email: this.form.email,
      },
      {
        headers: { Authorization: "Bearer " + token}
      })
      //redirect back to enrolments index
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: 'lecturers_index' });
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
.heading{
  padding-top: 50px;
  padding-bottom: 20px;
}

</style>
