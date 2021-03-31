<!--
@Date:   2021-03-02T16:37:06+00:00
@Last modified time: 2021-03-31T18:42:45+01:00
-->
<template>
  <div class="container">


  <h4  class="title">Name: </h4> {{ lecturer.name }} <br>
  <h4>Address: </h4> {{ lecturer.address }}<br>
  <h4>Email: </h4> {{ lecturer.email }}<br>
  <h4>Phone: </h4> {{ lecturer.phone }}<br>


  <b-table striped hover :items="lecturer.enrolments" :fields="fields">
    <template #cell(title)="data">
      <router-link :to="{ name: 'lecturers_show', params: { id: data.item.id }}">{{ data.item.title }}</router-link>
    </template>
  </b-table>

  </div>
</template>

<script>
import axios from '@/config/api';

export default {
  name: 'LecturerShow',
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
        {
          key: 'lecturer_id',
          sortable: true,
        },
        {
          key: 'course.title',
          sortable: true,
        }
        ],
      lecturer: {}
    }
  },
  mounted(){
    let token = localStorage.getItem('token');

    axios.get(`/lecturers/${this.$route.params.id}`, {
      headers: { Authorization: "Bearer " + token}
    })
    .then(response => {
      console.log(response.data);
      this.lecturer = response.data.data;

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
