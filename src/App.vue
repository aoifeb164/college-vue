<!--
@Date:   2021-02-21T12:50:35+00:00
@Last modified time: 2021-02-24T11:26:31+00:00
-->


<template>
  <div>
      <MyNavBar></MyNavBar>
    <router-view />

</div>
</template>

<script>
 import MyNavBar from './components/MyNavBar.vue'

export default {
  name: 'App',
  components: {
   MyNavBar
  }
}
</script>

<style>

</style>
