<!--
@Date:   2021-03-02T16:37:06+00:00
@Last modified time: 2021-04-14T15:17:35+01:00
-->

<!-- enrolment show page
displaying the info related to the chosen enrolment -->
<template>
  <div class="container">
        <b-card class="shadow p-3 mb-5 bg-white rounded show-card">
  <h2 class="title">Date: </h2> {{ enrolment.date }} <br>
  <h4>Time: </h4> {{ enrolment.time }}<br>
  <h4>Status: </h4> {{ enrolment.status }}<br>
  <h4>Course: </h4> {{ enrolment.course_id }}<br>
  <h4>Lecturer: </h4> {{ enrolment.lecturer_id }}<br>
</b-card>
  </div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

export default {
  name: 'EnrolmentShow',
  components: {
  },
  data() {
    return {
      fields: [
        {
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
      enrolment: {}
    }
  },
  mounted(){
    let token = localStorage.getItem('token');

    // getting the enrolment from the the enrolments index with the enrolment id
    axios.get(`/enrolments/${this.$route.params.id}`, {
      headers: { Authorization: "Bearer " + token}
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
  },
}
</script>

<!-- style elements -->
<style>
.home {
  text-align: center;
}

</style>
