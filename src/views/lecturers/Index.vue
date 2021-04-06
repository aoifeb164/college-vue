<!--
@Date:   2021-02-28T19:54:47+00:00
@Last modified time: 2021-04-06T20:30:44+01:00
-->

<!-- lecturers index -->
<template>
<div class="container fluid">
  <div class="text-center">
    <b-row>
      <h3 class="view">Lecturers</h3>
      <!-- button directing to lecturers create form -->
      <b-button class="view" variant="outline">
        <router-link :to="{ name: 'lecturers_create'}"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-plus-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></router-link>
      </b-button>
  </b-row>
</div>

<!-- table displaying the lecturers -->
  <b-table hover id="my-table" :items="lecturers" :busy="isBusy" :fields="fields" :per-page="perPage" :current-page="currentPage">

<!-- creating the loading spinner when waiting for the table to load -->
    <template #table-busy>
      <div class="text-center text-danger my-2 loading">
        <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" variant="dark"></b-spinner><br>
        <strong class="loadtext">Loading...</strong>
      </div>
    </template>
    <template #cell(name)="data">
      <!-- linking lecturer name to the lecturer show page -->
      <router-link :to="{ name: 'lecturers_show', params: { id: data.item.id }}" class="courseTitle">{{ data.item.name }}</router-link>
    </template>
    <template #cell(actions)="data">
      <!-- creating lecturer edit button and linking to lecturer edit form -->
      <router-link :to="{ name: 'lecturers_edit', params: { id: data.item.id }}"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square editButton" viewBox="0 0 16 16">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
        </svg></router-link>

<!-- creating a delete lecturer course button that calls the LecturerDeleteModal in teh components folder -->
      <b-icon @click="showDeleteModal(data.item.id)"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg></b-icon>

      <LecturerDeleteModal ref="LecturerDeleteModal" :lecturerId="selectedLecturer" />
</template>
</b-table>
<!-- table pagination - allowing 8 rows to be displayed at a time -->
<b-pagination
 v-model="currentPage"
 :total-rows="rows"
 :per-page="perPage"
 aria-controls="my-table"
 align="center"
></b-pagination>
</div>
</template>

<!-- importing axios library
importing LecturerDeleteModal from the components folder -->
<script>
import axios from '@/config/api'
import LecturerDeleteModal from '@/components/LecturerDeleteModal.vue'

export default {
  name: 'lecturerIndex',
  components: {
    LecturerDeleteModal
  },
  data(){
    return {
      perPage: 8,
      currentPage: 1,
      isBusy: false,
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
selectedLecturer:0,
    }
  },
  computed: {
    rows() {
      return this.lecturers.length
    }
  },
   mounted(){
   this.getLecturers();
  },
  methods: {
    //called when wanting to display the LecturerDeleteModal
    showDeleteModal(lecturerId) {
      this.selectedLecturer = lecturerId
      this.$refs.LecturerDeleteModal.show();
    },

    //getting the list of lecturers and displaying then on the index page
  getLecturers(){
    let token = localStorage.getItem('token');
    this.isBusy = true;
  //  console.log(token);

   axios.get('/lecturers', {
     headers: {
       Authorization: "Bearer " + token}
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
.title{
  padding-top: 50px;
}

</style>
