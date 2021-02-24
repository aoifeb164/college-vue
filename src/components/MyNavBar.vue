<!--
@Date:   2021-02-09T09:57:56+00:00
@Last modified time: 2021-02-24T16:44:36+00:00
-->
<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/courses">Courses</b-nav-item>
        <b-nav-item to="/lecturers">Lecturers</b-nav-item>
        <b-nav-item to="/enrolments">Enrolments</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

<!-- <router-link to ="/">Home</router-link>
<router-link to ="/about">About</router-link>
<router-link to ="/conact">Contact</router-link> -->

<!-- <router-link :to ="{ name: 'testing', params: {id: 123 }}">Testing</router-link> -->

  </div>
</template>

<script>
export default {
  name: 'MyNavBar'
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

</style>
