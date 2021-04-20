<!--
@Date:   2021-03-02T16:37:06+00:00
@Last modified time: 2021-04-20T12:27:48+01:00
-->

<!-- lecturer show page
displaying the info related to the chosen lecturer -->
<template>
  <div class="container">
    <b-card class="shadow p-3 mb-5 bg-white rounded show-card">
    <b-row>
      <b-col sm="4">
        <img src="/images/user.png" width="250px" height="250px" class="image">
      </b-col>
        <b-col>
  <h2 class="title">{{ lecturer.name }}</h2>
  <h5>Address: </h5> {{ lecturer.address }}
  <br><h5>Email: </h5> {{ lecturer.email }}
  <br><h5>Phone: </h5> {{ lecturer.phone }}
</b-col>
</b-row>
</b-card>
<!--table displaying teh enrolemts related tot eh lecturer -->
<h4>Enrolments</h4>
  <b-table hover  id="my-table" :items="lecturer.enrolments" :fields="fields" :per-page="perPage" :current-page="currentPage" class="table">
    <template #cell(title)="data">
      <router-link :to="{ name: 'lecturers_show', params: { id: data.item.id }}">{{ data.item.title }}</router-link>
    </template>
  </b-table>
  <b-pagination
   v-model="currentPage"
   pills
   color="black"
   :total-rows="rows"
   :per-page="perPage"
   aria-controls="my-table"
   align="center"
 ></b-pagination>
  </div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

// creates local registration of component
export default {
  name: 'LecturerShow',
  components: {
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
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
  computed: {
    rows() {
      return this.lecturer.enrolments.length
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

.table{
  margin-top: 20px;
}

.title{
  padding-top: 0px;
}

.show-card{
  margin-top: 40px;
  margin-bottom: 20px !important;

}
</style>
