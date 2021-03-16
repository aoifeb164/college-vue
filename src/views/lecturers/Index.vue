<!--
@Date:   2021-02-28T19:54:47+00:00
@Last modified time: 2021-03-16T09:57:46+00:00
-->

<template>
  <b-container fluid>
<div>
  <div class="text-center">
  <H5 class="title">Welcome to the lecturer index</H5>
</div>
  <br>
  <div class="text-center">
<!-- <b-button class="view" variant="outline-dark" @click="getlecturers()">View lecturers</b-button> -->
<b-button class="view" variant="outline"><router-link :to="{ name: 'lecturers_create'}">Create lecturer</router-link></b-button>
<b-button class="view" variant="outline"><router-link :to="{ name: 'lecturers_edit'}">Edit lecturer</router-link></b-button>
<b-button class="view" variant="outline">Delete lecturer</b-button>

</div>
<div class="container">
  <b-table striped hover :items="lecturers" :fields="fields" >
    <template #cell(title)="data">
      <router-link :to="{ name: 'lecturers_show', params: { id: data.item.id }}">{{ data.item.name }}</router-link>
    </template>
  </b-table>
</div>
</div>
</b-container>
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
        }
        ],
lecturers: [],
    }
  },
   mounted(){
   this.getlecturers();
  },
  methods: {
  getlecturers(){
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
