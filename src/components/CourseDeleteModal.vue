<!--
@Date:   2021-03-23T12:25:47+00:00
@Last modified time: 2021-03-24T15:50:48+00:00
-->

<template>
  <div class="delete-course-modal">
    <b-modal id ="courseDeleteModal" ref="courseDeleteModal" title="Delete course" class="modal-title">
      <b-row>
        <h5 class="text">Do you still want to delete this course?</h5>
      </b-row>
      <b-row>
        <b-button @click="deleteCourse()" variant="danger" class="button">Delete</b-button>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import axios from '@/config/api';
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
    show(){
      this.$refs.courseDeleteModal.show();
    },
    deleteCourse(){

      console.log(this.courseId);
      let token = localStorage.getItem('token');

      axios.delete(`/courses/`, {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then(response => {
        console.log(response.data);
        this.$router.push({
          name:'courses_index'
        });
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
