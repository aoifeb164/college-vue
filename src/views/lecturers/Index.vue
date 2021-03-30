<!--
@Date:   2021-02-28T19:54:47+00:00
@Last modified time: 2021-03-30T20:27:50+01:00
-->


<template>
<div class="container fluid">
  <br>
  <div class="text-center">
    <b-row>
    <b-button class="view" variant="outline">
      <router-link :to="{ name: 'lecturers_create'}">Create Lecturers</router-link>
    </b-button>
  </b-row>
</div>
<div class="container">
  <b-table striped hover :items="lecturers" :fields="fields" >
    <template #cell(name)="data">
      <router-link :to="{ name: 'lecturers_show', params: { id: data.item.id }}">{{ data.item.name }}</router-link>
    </template>
    <template #cell(actions)="data">
      <router-link :to="{ name: 'lecturers_edit', params: { id: data.item.id }}"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square editButton" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg></router-link>

      <!-- <b-icon @click="showDeleteModal(data.item.id)"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg></b-icon>

      <CourseDeleteModal ref="CourseDeleteModal" :courseId="selectedCourse" /> -->
</template>
  </b-table>
</div>
</div>
</template>

<script>
import axios from '@/config/api';
export default {
  name: 'lecturerIndex',
  components: {
  },
  data(){
    return {
      fields: [
        {
          key: 'name',
          sortable: true,
        },
        'address',
        'email',
        {
          key: 'phone',
          sortable: true,
        },
        'actions'
        ],
lecturers: [],
    }
  },
   mounted(){
   this.getLecturers();
  },
  methods: {
  getLecturers(){
    let token = localStorage.getItem('token');
  //  console.log(token);

   axios.get('/lecturers', {
     headers: {
       Authorization: "Bearer " + token}
   })
   .then(response => {
     console.log(response.data);
     this.lecturers = response.data.data;
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
.home {
  text-align: center;
}
.title{
  padding-top: 50px;
}

.view {
   /* margin-bottom: 50px!important; */
}
</style>
