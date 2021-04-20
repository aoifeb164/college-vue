<!--
@Date:   2021-02-21T12:52:16+00:00
@Last modified time: 2021-04-20T13:31:48+01:00
-->
<template>
 <div class="container">
<Login v-on:login="setloggedIn" />
</div>
</template>

<script>
// importing the login component to display the forms on homepage
import Login from '@/components/Login.vue'
export default {
  name: 'Home',
  props: {
    loggedIn: Boolean //<-- this is new line
  },
  components: {
    Login
  },
  
  methods: {
    setloggedIn(){
      this.$emit('login');
    },
  },
}
</script>

<!-- style elements -->
<style>
.textbox{
width: 580px;
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
.vl {
  margin-top: 60px;
  border-left:2px solid black;
  padding-right: 25px;
  height: 500px;
}

.box{
  margin-top: 40px;
}
.textheading{
  padding-top: 50px;
  padding-left: 265px;
}
</style>
