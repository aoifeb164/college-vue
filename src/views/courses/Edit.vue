<!--
@Date:   2021-03-02T16:58:35+00:00
@Last modified time: 2021-03-23T14:47:44+00:00
-->
<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-03-23T14:47:44+00:00
-->
<template>
  <div class="container text-center">
    <h4 class="heading">Edit Course:</h4>
<b-form class="form">
    <b-form-group class="textbox" id="input-group-1" label="Title:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.title" type="text" placeholder="Enter course title" required></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Course code:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.code" type="text" placeholder="Enter course code" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Description:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.description" type="text" placeholder="Enter description" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Course points:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.points" type="text" placeholder="Enter course points" required ></b-form-input>
    </b-form-group>
    <b-form-group class="textbox" id="input-group-1" label="Course level:" label-for="input-1">
    <b-form-input id="input-1" v-model="form.level" type="text" placeholder="Enter level" required ></b-form-input>
    </b-form-group>
</b-form>

    <b-button class="view" variant="outline-dark" @click="editCourse()">Submit</b-button>

  </div>
</template>

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
    getCourse(){
       let token = localStorage.getItem('token');
      //  console.log(token);

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
