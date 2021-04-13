<!--
@Date:   2021-03-02T16:58:35+00:00
@Last modified time: 2021-04-13T10:31:02+01:00
-->

<!-- Course edit form
edit title
edit code
edit description
edit points
select level -->

<template>
  <div class="container">
    <h4 class="heading">Edit Course:</h4>
<b-form class="form">
    <b-form-group class="textbox" id="input-group-1" label="Title:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.title" type="text" placeholder="Enter course title" required></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Course code:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.code" type="text" placeholder="Enter course code" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Description:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.description" type="text" placeholder="Enter description" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Course points:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.points" type="text" placeholder="Enter course points" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Course level:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.level" type="text" placeholder="Enter level" required ></b-form-input>
    </b-form-group>
</b-form>

<!-- submit button to edit course
calls editCourse method -->
    <div class=" text-center arrow">
      <b-button variant="outline">
        <b-icon variant="outline-dark" @click="editCourse()"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#292f33" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
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
  name: 'CoursesEdit',
  components: {
  },
  data() {
    return {
      form: {
        title: "",
        code: "",
        description: "",
        points: "",
        level: "",
      },
      errors: {}
    }
  },
  mounted(){
this.getCourse();
  },
  methods: {

    //getting the information of the course we want to edit
    getCourse(){
       let token = localStorage.getItem('token');
      //  console.log(token);

      //getting course info from the list of courses with the course id and displaying the info
       axios.get(`/courses/${this.$route.params.id}`, {
         headers: {Authorization: "Bearer " + token}
       })
       .then(response => {
         console.log(response.data);
         this.form.title = response.data.data.title;
         this.form.code = response.data.data.code;
         this.form.description = response.data.data.description;
         this.form.points = response.data.data.points;
         this.form.level = response.data.data.level;
       })
       .catch(error => {
         console.log(error)
         console.log(error.response.data)
       })
     },

     //editing and updating the course with the information inputed in the form
    editCourse() {
      let token = localStorage.getItem('token');


      axios.put(`/courses/${this.$route.params.id}`, {
        title: this.form.title,
        code: this.form.code,
        description: this.form.description,
        points: this.form.points,
        level: this.form.level,
      },
      {
        headers: { Authorization: "Bearer " + token}
      })

      //redirecting back to the index
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: 'courses_index' });
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
.form{
margin-left: 260px;
}
</style>
