<!--
@Date:   2021-03-23T12:25:47+00:00
@Last modified time: 2021-03-31T15:40:23+01:00
-->

<template>
  <div class="lecturer-delete-modal">
    <b-modal id ="lecturerDeleteModal" ref="lecturerDeleteModal" title="Delete lecturer" class="modal-title">
      <b-row>
        <h5 class="text">Do you still want to delete this lecturer?</h5>
      </b-row>
      <!-- <b-row>
        <b-button @click="deleteLecturer()" variant="danger" class="button">Delete</b-button>
      </b-row> -->

      <b-row class="justify-content-center">
        <b-button class="delete-modal-button" @click="hide();" variant="light"> cancel</b-button>
        <b-button class="cancel-modal-button" @click="deleteLecturer(); hide();" variant="danger"> delete</b-button>
      </b-row>

    </b-modal>
  </div>
</template>

<script>
import axios from '@/config/api';
export default {
  name: 'LecturerDeleteModal' ,
  props: {
    lecturerId: Number,
  },
  data(){
    return {

    }
  },
  mounted(){

  },
  methods: {
    show(){
      this.$refs.lecturerDeleteModal.show();
    },
    hide(){
      this.$refs.lecturerDeleteModal.hide();
    },
    deleteLecturer(){

      console.log(this.lecturerId);
      let token = localStorage.getItem('token');

      axios.delete(`/lecturers/${this.lecturerId}`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
        console.log(error.response.data)
      })
    }
    },
  }
  </script>

  <style>
  .modal-title{
    margin-left: 160px;
  }
  .text{
    margin-left: 60px;
  }
  .button{
    margin-left:200px;
  }
  </style>
