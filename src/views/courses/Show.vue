<!--
@Date:   2021-03-02T16:37:06+00:00
@Last modified time: 2021-03-16T09:58:21+00:00
-->
<template>
  <div class="container">


  <h4  class="title">Title: </h4> {{ course.title }} <br>
  <h4>Code: </h4> {{ course.code }}<br>
  <h4>Description: </h4> {{ course.description }}<br>
  <h4>Points: </h4> {{ course.points }}<br>
  <h4>Level: </h4> {{ course.level }}<br>

  <b-table striped hover :items="course.enrolments" :fields="fields">
    <template #cell(title)="data">
      <router-link :to="{ name: 'courses_show', params: { id: data.item.id }}">{{ data.item.title }}</router-link>
    </template>
  </b-table>

  </div>
</template>

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
          key: 'lecturer_id',
          sortable: true,
        },
        {
          key: 'lecturer',
          sortable: true,
        }
        ],
      course: {}
    }
  },
  mounted(){
    let token = localStorage.getItem('token');

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
<style>
.home {
  text-align: center;
}

.title{
  padding-top: 50px;
}
</style>
