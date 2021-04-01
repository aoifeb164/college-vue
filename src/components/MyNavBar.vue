<!--
@Date:   2021-02-09T09:57:56+00:00
@Last modified time: 2021-04-01T16:51:36+01:00
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
    <b-navbar-brand href="#">CA2</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/dashboard">Dashboard</b-nav-item>
        <b-nav-item to="/courses">Courses</b-nav-item>
        <b-nav-item to="/lecturers">Lecturers</b-nav-item>
        <b-nav-item to="/enrolments">Enrolments</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">


        <b-nav-item-dropdown v-if="loggedIn" text="User" right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item @click="logout()"> Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MyNavBar',
  props: {
  loggedIn: Boolean //<-- this is new line
},
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
    let token = localStorage.removeItem('token');
   axios.get('http://college.api:8000/api/logout', {
     headers: {
       Authorization: "Bearer " + token}
   })
   .then(response => {
     console.log(response.data);
        console.log("Logged Out");
          this.$router.replace({ name: 'home'});
   })
   .catch(error => {
     console.log(error)
     console.log(error.response.data)
   })
   localStorage.removeItem('token');
   this.$emit('logout'); //<-- tells App.vue to update loggedIn
this.$router.push('/');
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

/* .navbar.navbar-dark.bg-dark{
    background-color: #AABB55!important;
 } */

 .logout{
   float: right!important;
 }

</style>
