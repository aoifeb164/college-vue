<!--
@Date:   2021-02-09T09:57:56+00:00
@Last modified time: 2021-03-02T09:14:46+00:00
-->
<template>
  <div>
    <!-- <b-navbar type="dark" variant="dark">
      <b-navbar-nav style="width: 100%">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/courses">Courses</b-nav-item>
        <b-nav-item to="/lecturers">Lecturers</b-nav-item>
        <b-nav-item to="/enrolments">Enrolments</b-nav-item>
        <b-nav-item class="logout" @click="logout()"> Logout</b-nav-item>
      </b-navbar-nav>
    </b-navbar> -->
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/courses">Courses</b-nav-item>
        <b-nav-item to="/lecturers">Lecturers</b-nav-item>
        <b-nav-item to="/enrolments">Enrolments</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

<!-- <router-link to ="/">Home</router-link>
<router-link to ="/about">About</router-link>
<router-link to ="/conact">Contact</router-link> -->

<!-- <router-link :to ="{ name: 'testing', params: {id: 123 }}">Testing</router-link> -->

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MyNavBar',
  components: {
  },
  data(){
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
methods:{
  logout() {
    let token = localStorage.getItem('token');
   axios.get('http://college.api:8000/api/logout', {
     headers: {
       Authorization: "Bearer " + token}
   })
   .then(response => {
     console.log(response.data);
        console.log("Logged Out");
   })
   .catch(error => {
     console.log(error)
     console.log(error.response.data)
   })
   localStorage.removeItem('token');
 },
}
}
</script>

<style>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a{
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar.navbar-dark.bg-dark{
    background-color: #AABB55!important;
 }

 .logout{
   float: right!important;
 }

</style>
