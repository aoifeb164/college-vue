<!--
@Date:   2021-03-02T16:37:06+00:00
@Last modified time: 2021-03-24T15:08:54+00:00
-->
<template>
  <div class="container">


  <h4  class="title">Title: </h4> {{ enrolment.title }} <br>
  <h4>Code: </h4> {{ enrolment.code }}<br>
  <h4>Description: </h4> {{ enrolment.description }}<br>
  <h4>Points: </h4> {{ enrolment.points }}<br>
  <h4>Level: </h4> {{ enrolment.level }}<br>

  <b-table striped hover :items="enrolment.enrolments" :fields="fields">
    <template #cell(title)="data">
      <router-link :to="{ name: 'enrolments_show', params: { id: data.item.id }}">{{ data.item.title }}</router-link>
    </template>
  </b-table>

  </div>
</template>

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
<style>
.home {
  text-align: center;
}

.title{
  padding-top: 50px;
}
</style>
