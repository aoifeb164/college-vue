<!--
@Date:   2021-04-18T12:10:59+01:00
@Last modified time: 2021-04-20T17:21:22+01:00
-->

<!-- login component displayed on homepage -->
<template>
<div class="container">
  <b-tabs class="box ">

    <!-- login form  -->
    <b-tab title="Login" active>
      <b-card-text>
        <h3 class="textheading">Login:</h3>
        <br>
        <div align="center">
          <b-form-group class="textbox" id="input-group-1" label="Email address:" label-for="input-1" align="left">
            <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
          </b-form-group>
          <b-form-group class="textbox" id="input-group-1" label="Password:" label-for="input-1" align="left">
            <b-form-input id="input-1" v-model="form.password" type="password" placeholder="Enter password" required v-on:keyup.enter="login()"></b-form-input>
          </b-form-group>
          <!-- submit button to log in -->
          <b-button variant="outline-dark" class="submit" @click="login()">Submit</b-button>
        </div>
      </b-card-text>
    </b-tab>

    <!-- register form -->
    <b-tab title="Register">
      <b-card-text>
        <h3 class="textheading">Register:</h3>
        <br>
        <div align="center">
          <b-form-group class="textbox" id="input-group-1" label="Name:" label-for="input-1" align="left">
            <b-form-input id="input-1" v-model="form.name1" type="name" placeholder="Enter name" required></b-form-input>
          </b-form-group>
          <b-form-group class="textbox" id="input-group-1" label="Email address:" label-for="input-1" align="left">
            <b-form-input id="input-1" v-model="form.email1" type="email" placeholder="Enter email" required></b-form-input>
          </b-form-group>
          <b-form-group class="textbox" id="input-group-1" label="Password:" label-for="input-1" align="left">
            <b-form-input id="input-1" v-model="form.password1" type="password" placeholder="Enter password" required v-on:keyup.enter="register()"></b-form-input>
          </b-form-group>
          <!-- submit button to register and log in -->
          <b-button variant="outline-dark" class="submit" @click="register()">Submit</b-button>
        </div>
      </b-card-text>
    </b-tab>
  </b-tabs>
</div>
</template>

<!-- importing axios library -->
<script>
import axios from '@/config/api';

// creates local registration of component
export default {
  name: 'Login',
  props: {
    loggedIn: Boolean //<-- this is new line
  },
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    // called on the submit button when wanting to log in
    login() {
      axios.post('/login', {
          email: this.form.email,
          password: this.form.password
        })
        .then(response => {
          console.log(response.data);
          localStorage.setItem('token', response.data.token);
          this.$emit('login');
          // this.$router.replace({ name: 'courses_index'});
          this.$router.replace({
            name: 'dashboard'
          });
        })
        .catch(error => {
          console.log(error)
          console.log(error.response.data)
        })
    },
    //called on the submit button when wanting to register
    register() {
      axios.post('/register', {
          name: this.form.name1,
          email: this.form.email1,
          password: this.form.password1
        })
        .then(response => {
          console.log(response.data);
          localStorage.setItem('token', response.data.token);
          this.$router.replace({
            name: 'courses_index'
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

<!-- style elements -->
<style>
.textbox {
  width: 580px;
}

.submit {
  align: center;
}

.background {
  position: fixed;
  width: 50%;
  height: 100%;
  background-color: pink;
}

.vl {
  margin-top: 60px;
  border-left: 2px solid black;
  padding-right: 25px;
  height: 500px;
}

.box {
  margin-top: 40px;
}

.textheading {
  padding-top: 50px;
  padding-left: 265px;
}
</style>
