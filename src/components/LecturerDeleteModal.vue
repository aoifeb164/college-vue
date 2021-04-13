<!--
@Date:   2021-03-23T12:25:47+00:00
@Last modified time: 2021-04-13T11:12:15+01:00
-->

<!-- course EnrolmentDeleteModal -->
<template>
  <div class="lecturer-delete-modal">
    <b-modal id ="lecturerDeleteModal" ref="lecturerDeleteModal" title="Delete lecturer" class="modal-title">
      <b-row>
        <h5 class="text">Do you still want to delete this lecturer?</h5>
      </b-row>

          <b-row align="center">
              <b-button class="delete-modal-button" @click="hide();" variant="light"></b-button>
<!-- submit button that calls deleteEnrolment method -->
        <b-button @click="deleteLecturer(); hide();" variant="danger" class="button"> Delete</b-button>
      </b-row>

    </b-modal>
  </div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

// creates local registration of component
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
    //called when wanting to display modal
    show(){
      this.$refs.lecturerDeleteModal.show();
    },
    hide(){
      this.$refs.enrolmentDeleteModal.hide();
    },
    //called when wanting to delete lecturer
    deleteLecturer(){

      console.log(this.lecturerId);
      let token = localStorage.getItem('token');

      // delete lecturer from lecturers with this lecturer id
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

<!-- style elements -->
  <style>

  </style>
