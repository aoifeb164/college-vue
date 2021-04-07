<!--
@Date:   2021-03-23T12:25:47+00:00
@Last modified time: 2021-04-07T11:44:15+01:00
-->

<!-- enrolment EnrolementDeleteModal -->
<template>
  <div class="enrolment-delete-modal">
    <b-modal id ="enrolmentDeleteModal" ref="enrolmentDeleteModal" title="Delete enrolment" class="modal-title">
      <b-row>
        <h5 class="text">Do you still want to delete this enrolment?</h5>
      </b-row>

      <b-row class="justify-content-center">
        <b-button class="delete-modal-button" @click="hide();" variant="light"> cancel</b-button>

<!-- submit button that calls deleteEnrolment method -->
        <b-button class="cancel-modal-button" @click="deleteEnrolment(); hide();" variant="danger"> delete</b-button>
      </b-row>

    </b-modal>
  </div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

// creates local registration of component
export default {
  name: 'EnrolmentDeleteModal' ,
  props: {
    enrolmentId: Number,
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
      this.$refs.enrolmentDeleteModal.show();
    },
    hide(){
      this.$refs.enrolmentDeleteModal.hide();
    },

    //called when wanting to delete enrolment
    deleteEnrolment(){

      console.log(this.enrolmentId);
      let token = localStorage.getItem('token');

      // delete enrolment from enrolments with this enrolment id
      axios.delete(`/enrolments/${this.enrolmentId}`, {
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
