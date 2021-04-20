<!--
@Date:   2021-03-23T12:25:47+00:00
@Last modified time: 2021-04-20T17:21:08+01:00
-->

<!-- CourseDeleteModal -->
<template>
<div>
  <b-modal id="courseDeleteModal" ref="courseDeleteModal" title="Delete Course" class="modal-title">
    <b-row>
      <h5 class="text">Are you sure you want to delete this course?</h5>
    </b-row>

    <b-row align="center">
        <!-- submit button that calls deleteCourse method and hide method-->
      <b-button @click="deleteCourse(); hide();" variant="danger" class="button">Delete</b-button>
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
    //called on the delete button when wanting to display modal
    show(){
      this.$refs.courseDeleteModal.show();
    },
    //hides the component after delete button is selected
    hide(){
      this.$refs.courseDeleteModal.hide();
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

      //deletion handling attempt
//       let token = localStorage.getItem('token');
//       let listOfDeleteRequests = this.course.enrolments.map((current) => axios.delete("/api/enrolments/" +
//       current.id, {headers: { Authorization: "Bearer " + token }}
//     ));
// // log the contents of listOfDeleteRequests
//       axios.all(listOfDeleteRequests)
//       .then((response) => {
//         axios.delete("/api/courses/" + this.course.id, {
//           headers: { Authorization: "Bearer " + token }
//         })
//         .then((response) => {
//           console.log(response.data);
//
//         })
//         .catch((error) => {
//           console.log(error);
//           console.log(response.data);
//         });
//       });
    }
    },
  }
  </script>

<!-- style elements -->
  <style>
  .modal-title{
    margin-left: 170px;
  }
  .text{
    margin-left: 45px;
  }
  .button{
    margin-left:210px;
  }
  </style>
