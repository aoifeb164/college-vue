<!--
@Date:   2021-03-02T16:37:06+00:00
@Last modified time: 2021-04-20T17:22:52+01:00
-->

<!-- enrolment show page
displaying the info related to the selected enrolment -->
<template>
<div class="container">
  <b-row>
    <b-col>
      <b-card class="shadow p-3 mb-5 bg-white rounded show-card">
        <h2 class="title">Date: </h2> {{ enrolment.date }} <br>
        <h4>Time: </h4> {{ enrolment.time }}<br>
        <h4>Status: </h4> {{ enrolment.status }}<br>
      </b-card>
    </b-col>
    <b-col>
      <b-card class="shadow p-3 mb-5 bg-white rounded show-card">
        <h2 class="title"> {{ enrolment.course.title }} </h2>
        <h5>Code: </h5> {{ enrolment.course.code }}<br>
        <h5>Description: </h5> {{ enrolment.course.description }}<br>
        <h5>Points: </h5> {{ enrolment.course.points }}<br>
        <h5>Level: </h5> {{ enrolment.course.level }}<br>
      </b-card>
    </b-col>
    <b-col>
      <b-card class="shadow p-3 mb-5 bg-white rounded show-card">
        <h2 class="title">{{ enrolment.lecturer.name }}</h2>
        <h5>Address: </h5> {{ enrolment.lecturer.address }}
        <br>
        <h5>Email: </h5> {{ enrolment.lecturer.email }}
        <br>
        <h5>Phone: </h5> {{ enrolment.lecturer.phone }}
      </b-card>
    </b-col>
  </b-row>
</div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

// creates local registration of component
export default {
  name: 'EnrolmentShow',
  components: {},
  data() {
    return {
      fields: [{
          key: 'id',
          sortable: true,
        },
        'date',
        'time',
        'status',
        'enrolment_id',
        {
          key: 'enrolment_id',
          sortable: true,
        },
        {
          key: 'enrolment',
          sortable: true,
        }
      ],
      courses: [],
      lecturers: [],
      enrolment: {}
    }
  },
  mounted() {
    let token = localStorage.getItem('token');

    // getting the enrolment from the the enrolments index with the enrolment id
    axios.get(`/enrolments/${this.$route.params.id}`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.enrolment = response.data.data;

      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data)
      })
  },
  methods: {

    //getting the list of courses and displaying then on the index page
    getCourses() {
      let token = localStorage.getItem('token');
      this.isBusy = true;
      //  console.log(token);

      axios.get('/courses', {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.courses = response.data.data;
          this.filteredCourses = this.courses;
          this.isBusy = false;
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })
    },
    //getting the list of lecturers and displaying then on the index page
    getLecturers() {
      let token = localStorage.getItem('token');
      this.isBusy = true;
      //  console.log(token);

      axios.get('/lecturers', {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          this.lecturers = response.data.data;
          this.isBusy = false;
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })
    },
  },
}
</script>

<!-- style elements -->
<style>
.home {
  text-align: center;
}
</style>
