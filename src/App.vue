<!--
@Date:   2021-02-21T12:50:35+00:00
@Last modified time: 2021-04-20T17:11:04+01:00
-->

<!-- root of application -->

<template>
<div>
  <MyNavBar :loggedIn="this.loggedIn" v-on:login="setLoggedIn" v-on:logout="setLoggedOut"></MyNavBar>
  <router-view :loggedIn="this.loggedIn" v-on:login="setLoggedIn" v-on:logout="setLoggedOut" />

</div>
</template>

<!-- importing navbar component to display -->
<script>
import MyNavBar from './components/MyNavBar.vue'

// creates local registration of component
export default {
  name: 'App',
  components: {
    MyNavBar
  },
  data() {
    return {
      loggedIn: false
    }
  },
  created() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
      console.log("APP: ", this.loggedIn);
    } else {
      this.loggedIn = false;
    }
  },

// methods for the nav bar to display the links if the user is logged in or out
  methods: {
    setLoggedIn() {
      this.loggedIn = true;
      // optionally, you could store the token in localStorage here
    },
    setLoggedOut() {
      this.loggedIn = false;
      // optionally, you could trigger the whole logout process here
    }
  }
}
</script>

<style>

</style>
