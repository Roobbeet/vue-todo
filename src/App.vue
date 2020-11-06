<template>
  <div id="app">
    <h1>My To Do List</h1>
    <add-bar></add-bar>
    <the-list
 
    ></the-list>
  </div>
</template>

<script>
import AddBar from './components/AddBar.vue';
import TheList from './components/TheList.vue'
export default {
  name: 'App',
  components: {
    AddBar,
    TheList
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Source+Sans+Pro:wght@200&display=swap');
body {
  background-color: rgba(175, 252, 226, 0.4);
}
#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  /* margin-top: 60px; */
}
</style>
