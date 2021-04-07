<!--
@Date:   2021-03-02T16:37:06+00:00
@Last modified time: 2021-04-07T15:14:05+01:00
-->

<!-- lecturer show page
displaying the info related to the chosen lecturer -->
<template>
  <div class="container">
    <b-card class="show-card">
    <b-row>
      <b-col sm="4">
        <img src="/images/user.png" width="300px" height="300px" class="image">
      </b-col>
        <b-col>
  <h2 class="title">{{ lecturer.name }}</h2>
  <h5>Address: </h5> {{ lecturer.address }}<br>
  <h5>Email: </h5> {{ lecturer.email }}<br>
  <h5>Phone: </h5> {{ lecturer.phone }}<br>
</b-col>
</b-row>
</b-card>
<!--table displaying teh enrolemts related tot eh lecturer -->
<h4>Enrolments</h4>
  <b-table hover :items="lecturer.enrolments" :fields="fields" class="table">
    <template #cell(title)="data">
      <router-link :to="{ name: 'lecturers_show', params: { id: data.item.id }}">{{ data.item.title }}</router-link>
    </template>
  </b-table>

  </div>
</template>

<!-- importing axios library -->
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

    //getting the lecturer from the lecturer index with the lecturer id
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

<!-- style elements -->
<style>
.home {
  text-align: center;
}

.title{
  padding-top: 50px;
}
.table{
  margin-top: 20px;
}
.image{
  margin-top: 25px;
}
.show-card{
  margin-top: 20px;
  margin-bottom: 20px;

}
</style>
