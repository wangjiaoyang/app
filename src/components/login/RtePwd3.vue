<template>
  <div id="app">
    
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
}
</style>
