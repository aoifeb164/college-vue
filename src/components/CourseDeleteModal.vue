<!--
@Date:   2021-03-23T12:25:47+00:00
@Last modified time: 2021-04-06T18:29:19+01:00
-->

<!-- course CourseDeleteModal -->
<template>
  <div class="course-delete-modal">
    <b-modal id ="courseDeleteModal" ref="courseDeleteModal" title="Delete course" class="modal-title">
      <b-row>
        <h5 class="text">Do you still want to delete this course?</h5>
      </b-row>

<!-- submit button that calls deleteCourse method -->
      <b-row align="center">
      <b-button @click="deleteCourse()" variant="danger" class="button">Delete</b-button>
      </b-row>

    </b-modal>
  </div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

// creates local registration of component
export default {
  name: 'CourseDeleteModal' ,
  props: {
    courseId: Number,
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
      this.$refs.courseDeleteModal.show();
    },

    //called when wanting to delete course
    deleteCourse(){

      console.log(this.courseId);
      let token = localStorage.getItem('token');

      // delete course from courses with this course id
      axios.delete(`/courses/${this.courseId}`, {
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
