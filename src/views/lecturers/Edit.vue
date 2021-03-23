<!--
@Date:   2021-03-02T16:58:35+00:00
@Last modified time: 2021-03-23T15:18:43+00:00
-->
<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-03-23T15:18:43+00:00
-->
<template>
  <div class="container text-center">
    <h4 class="heading">Edit Lecturer:</h4>
<b-form class="form">
    <b-form-group class="textbox" id="input-group-1" label="Name:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.title" type="text" placeholder="Enter lecturer name" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Address:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.code" type="text" placeholder="Enter address" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Email:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.description" type="text" placeholder="Enter email" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Phone:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.points" type="text" placeholder="Enter phone" required ></b-form-input>
    </b-form-group>
</b-form>

    <b-button class="view" variant="outline-dark" @click="editLecturer()">Submit</b-button>

  </div>
</template>

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
    getLecturer(){
       let token = localStorage.getItem('token');
      //  console.log(token);

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
    editLecturer() {
      let token = localStorage.getItem('token');


      axios.put(`/lecturers/${this.$route.params.id}`, {
        Name: this.form.name,
        Address: this.form.address,
        Email: this.form.email,
        Phone: this.form.phone,
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

.textbox{
  width: 480px;
}
.heading{
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
}
.form{
  margin-left: 300px;
}
</style>
