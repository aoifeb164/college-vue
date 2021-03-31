<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-03-31T10:50:24+01:00
-->
<template>
  <div class="container text-center">
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

    <b-button class="view" variant="outline-dark" @click="createLecturer()">Submit</b-button>

  </div>
</template>

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
    createLecturer() {
      let token = localStorage.getItem('token');


      axios.post('/lecturers', {
        Name: this.form.name,
        Address: this.form.address,
        Phone: this.form.phone,
        Email: this.form.email,
      },
      {
        headers: { Authorization: "Bearer " + token}
      })
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
<style>

.heading{
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
}
.form{

}
</style>
