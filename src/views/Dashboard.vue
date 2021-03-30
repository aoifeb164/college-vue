<!--
@Date:   2021-03-29T18:09:05+01:00
@Last modified time: 2021-03-29T19:34:12+01:00
-->
<template>
<div class="dashboard">

<b-container class="container" fluid>
  <div>
    <b-card-group deck class="cards">
      <b-card title="Courses" img-src="/images/image.jpg" img-alt="Image" img-top>
        <b-card-text>
          This will direct you to the courses index.
            <b-button variant="outline-dark" class="submit" @click="courses()" >Submit</b-button>
        </b-card-text>
      </b-card>

      <b-card title="Lecturers" img-src="/images/image.jpg" img-alt="Image" img-top>
        <b-card-text>
          This will direct you to the lecturers index.
        </b-card-text>
      </b-card>

      <b-card title="Enrolments" img-src="/images/image.jpg" img-alt="Image" img-top>
        <b-card-text>
          This will direct you to the enrolments index.

        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</b-container>
</div>
</template>


<script>
import axios from '@/config/api';
export default {
  name: 'Dashboard',
  components: {
  },
  data(){

  },
  mounted(){
    this.courses();
  },
  methods: {
    courses(){
        let token = localStorage.getItem('token');
    axios.get('/courses', {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(response => {
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      this.$router.replace({ name: 'courses_index'});
    })
    .catch(error => {
      console.log(error)
      console.log(error.response.data)
    })
  },
  },
}
</script>

<style>
.cards{
  margin-top: 120px;
}
</style>
