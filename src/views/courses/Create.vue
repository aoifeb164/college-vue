<!--
@Date:   2021-03-02T16:58:20+00:00
@Last modified time: 2021-03-30T18:48:56+01:00
-->
<template>
  <div class="container text-center">
    <h4 class="heading">Create Course:</h4>
<b-form class="form">
    <b-form-group class="textbox" id="input-group-1" label="Title:" label-for="input-1" align="left">
    <b-form-input id="input-1" v-model="form.title" type="text" placeholder="Enter course title" required ></b-form-input>
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

    <b-button class="view" variant="outline-dark" @click="createCourse()">Submit</b-button>

  </div>
</template>

<script>
import axios from '@/config/api';

export default {
  name: 'CoursesCreate',
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

  },
  methods: {
    createCourse() {
      let token = localStorage.getItem('token');


      axios.post('/courses', {
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

.heading{
  padding-top: 50px;
  padding-bottom: 20px;
  text-align: center;
}
.form{

}
</style>
