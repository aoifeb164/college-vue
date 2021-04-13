<!--
@Date:   2021-03-02T16:58:35+00:00
@Last modified time: 2021-04-13T10:30:30+01:00
-->

<!-- Lecturer edit form
edit Name
edit address
edit Email
edit phone no. -->

<template>
  <div class="container">
    <h4 class="heading">Edit Lecturer:</h4>
<b-form class="form">
    <b-form-group class="textbox" id="input-group-1" label="Name:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.name" type="text" placeholder="Enter lecturer name" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Address:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.address" type="text" placeholder="Enter address" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Email:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.email" type="text" placeholder="Enter email" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Phone:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.phone" type="text" placeholder="Enter phone" required ></b-form-input>
    </b-form-group>
</b-form>

<!-- submit button to edit lecturer
calls editLecturer method -->
<div class=" text-center arrow">
  <b-button variant="outline">
    <b-icon variant="outline-dark" @click="editLecturer()"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#292f33" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></b-icon>
</b-button>
</div>
  </div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

export default {
  name: 'LecturersEdit',
  components: {
  },
  data() {
    return {
      form: {
        name: "",
        address: "",
        email: "",
        phone: "",
      },
      errors: {}
    }
  },
  mounted(){
this.getLecturer();
  },
  methods: {
    //getting the information of the lecturer we want to edit
    getLecturer(){
       let token = localStorage.getItem('token');
      //  console.log(token);

      //getting the lecturer from the list of lecturers with the lecturer id and displaying the info
       axios.get(`/lecturers/${this.$route.params.id}`, {
         headers: {Authorization: "Bearer " + token}
       })
       .then(response => {
         console.log(response.data);
         this.form.name = response.data.data.name;
         this.form.address = response.data.data.address;
         this.form.email = response.data.data.email;
         this.form.phone = response.data.data.phone;
       })
       .catch(error => {
         console.log(error)
         console.log(error.response.data)
       })
     },

     //editing and updating the enrolmet with information inputed in the form
    editLecturer() {
      let token = localStorage.getItem('token');


      axios.put(`/lecturers/${this.$route.params.id}`, {
        name: this.form.name,
        address: this.form.address,
        email: this.form.email,
        phone: this.form.phone,
      },
      {
        headers: { Authorization: "Bearer " + token}
      })
      //redirecting back to the index
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
