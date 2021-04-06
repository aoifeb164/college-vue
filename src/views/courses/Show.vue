<!--
@Date:   2021-03-02T16:37:06+00:00
@Last modified time: 2021-04-06T20:09:18+01:00
-->
<!-- course show page
displaying the info related to the chosen course -->
<template>
  <div class="container">
  <h2 class="title"> {{ course.title }} </h2>
  <h5>Code: </h5> {{ course.code }}<br>
  <h5>Description: </h5> {{ course.description }}<br>
  <h5>Points: </h5> {{ course.points }}<br>
  <h5>Level: </h5> {{ course.level }}<br>

<!-- table displaying the enrolemts related to the course -->
  <b-table hover :items="course.enrolments" :fields="fields">
    <template #cell(title)="data">
      <router-link :to="{ name: 'courses_show', params: { id: data.item.id }}">{{ data.item.title }}</router-link>
    </template>
  </b-table>

  </div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

export default {
  name: 'CourseShow',
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
        'course_id',
        {
          key: 'lecturer.name',
          sortable: true,
        }
        ],
      course: {}
    }
  },
  mounted(){
    let token = localStorage.getItem('token');

    //getting the course from the courses index with the course id
    axios.get(`/courses/${this.$route.params.id}`, {
      headers: { Authorization: "Bearer " + token}
    })
    .then(response => {
      console.log(response.data);
      this.course = response.data.data;

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

.title{
  padding-top: 50px;
}
</style>
