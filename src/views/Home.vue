<!--
@Date:   2021-02-21T12:52:16+00:00
@Last modified time: 2021-03-16T09:56:04+00:00
-->
<template>
<div class="home">
 <b-container class="container" fluid>
  <b-row>
  <b-col>
  <h3 class="heading">Login:</h3>
  <br>
  <!-- <input type="email" v-model="form.email" />
  <input type="password" v-model="form.password"  /> -->


  <b-form-group class="textbox" id="input-group-1" label="Email address:" label-for="input-1">
  <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required ></b-form-input>
  </b-form-group>
  <b-form-group class="textbox" id="input-group-1" label="Password:" label-for="input-1">
  <b-form-input id="input-1" v-model="form.password" type="password" placeholder="Enter password" required v-on:keyup.enter="login()"></b-form-input>
  </b-form-group>
  <!-- <button class="submit" @click="login()" >Submit</button> -->
  <b-button variant="outline-dark" class="submit" @click="login()" >Submit</b-button>
</b-col>
<!-- <div class="vl"></div> -->
<b-col class="reg">
<h3 class="heading">Register:</h3>
<br>
<!-- <input type="email" v-model="form.email" />
<input type="password" v-model="form.password"  /> -->

<b-form-group class="textbox" id="input-group-1" label="Name:" label-for="input-1">
<b-form-input id="input-1" v-model="form.name1" type="name" placeholder="Enter name" required></b-form-input>
</b-form-group>
<b-form-group class="textbox" id="input-group-1" label="Email address:" label-for="input-1">
<b-form-input id="input-1" v-model="form.email1" type="email" placeholder="Enter email" required></b-form-input>
</b-form-group>
<b-form-group class="textbox" id="input-group-1" label="Password:" label-for="input-1">
<b-form-input id="input-1" v-model="form.password1" type="password" placeholder="Enter password" required v-on:keyup.enter="register()"></b-form-input>
</b-form-group>
<!-- <button class="submit" @click="login()" >Submit</button> -->
<b-button variant="outline-dark" class="submit" @click="register()" >Submit</b-button>
</b-col>
</b-row>
</b-container>
</div>
</template>

<script>
import axios from '@/config/api';
export default {
  name: 'Home',
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
  methods: {
    login(){
    axios.post('/login', {
      email: this.form.email,
      password: this.form.password
    })
    .then(response => {
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      this.$router.replace({ name: 'courses_index'});
    })
    .catch(error => {
      console.log(error)
      console.log(error.response.data)
    })
  },
  register(){
  axios.post('/register', {
    name: this.form.name1,
    email: this.form.email1,
    password: this.form.password1
  })
  .then(response => {
    console.log(response.data);
    localStorage.setItem('token', response.data.token);
    this.$router.replace({ name: 'courses_index'});
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
.home {
  text-align: center;

}
.textbox{
  width: 460px;
  text-align: left;
}
.heading{
  padding-top: 120px;
  text-align: left;

}
.submit{
align:center;
}

.background {
    position: fixed;
    width: 50%;
    height: 100%;
    background-color: pink;
}
/* .vl {
  margin-top: 60px;
  border-left:2px solid black;
  padding-right: 25px;
  height: 500px;
} */
</style>
