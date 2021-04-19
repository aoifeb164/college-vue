<!--
@Date:   2021-02-09T09:57:56+00:00
@Last modified time: 2021-04-19T21:00:19+01:00
-->
<template>
<!-- navbar links -->
<b-navbar toggleable="lg" type="dark" variant="dark">
  <div class="container">
    <b-navbar-brand href="#">CA2 College api</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="loggedIn">
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
          <!-- button to logout -->
          <b-dropdown-item @click="logout()"> Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </div>
</b-navbar>
</template>

<!-- importing axios library -->
<script>
import axios from 'axios';

// creates local registration of component
export default {
  name: 'MyNavBar',
  props: {
    loggedIn: Boolean //<-- this is new line
  },
  components: {

  },
  data() {
    return {}
  },

  methods: {
    // called on the logout button when wanting to log out
    //removes Authorization token from localStorage
    //redirects to home page
    logout() {
      let token = localStorage.removeItem('token');
      axios.get('http://college.api:8000/api/logout', {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then(response => {
          console.log(response.data);
          console.log("Logged Out");
          this.$emit('logout');
          this.$router.push({
            name: 'home'
          });
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })
      localStorage.removeItem('token');
      //<-- tells App.vue to update loggedIn
      this.$router.push('/');
    },

  }
}
</script>


<!-- style elememts -->
<style>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar.navbar-dark.bg-dark {
  background-color: #292f33 !important;
}

.logout {
  float: right !important;
}
</style>
