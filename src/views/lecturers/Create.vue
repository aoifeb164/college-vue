<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-04-20T17:22:56+01:00
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
      <b-form-input id="input-1" v-model="form.name" type="text" placeholder="Enter lecturer name" required></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Address:" label-for="input-1" align="left">
      <b-form-input id="input-1" v-model="form.address" type="text" placeholder="Enter address" required></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Phone:" label-for="input-1" align="left">
      <b-form-input id="input-1" v-model="form.phone" type="text" placeholder="Enter phone number" required></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Email:" label-for="input-1" align="left">
      <b-form-input id="input-1" v-model="form.email" type="text" placeholder="Enter email address" required></b-form-input>
    </b-form-group>
  </b-form>

  <!--  button to create lecturer calling the createLecturer method -->
  <div class=" text-center arrow">
    <b-button variant="outline">
      <b-icon variant="outline-dark" @click="createLecturer()"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#292f33" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
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
  name: 'LecturersCreate',
  components: {},
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
  mounted() {

  },
  methods: {

    //called when wanting to create a new lecturer
    createLecturer() {
      let token = localStorage.getItem('token');
      //created new lecturer in lecturer with the information entered in the form using post request
      axios.post('/lecturers', {
          name: this.form.name,
          address: this.form.address,
          phone: this.form.phone,
          email: this.form.email,
        }, {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        //redirect back to lecturers index
        .then(response => {
          console.log(response.data);
          this.$router.push({
            name: 'lecturers_index'
          });
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
