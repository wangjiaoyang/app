<template>
  <div id="app">
  	<p class="wx">
    	<button>微信一键登录</button>
    </p>
    <p class="login">
	    <button class="dl" @click="dl()">登录</button>
	    
	    <button id="zc" @click="zc()">注册</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
	dl(){
		this.$router.push('/dl')
	},
	zc(){
		this.$router.push('/zc')
	}
  }
}
</script>

<style scoped="scoped">
	#app{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background: url(../assets/bg.jpg) no-repeat ;
		background-size: 100% 100%;
	}
	
	.wx button{
		width: 90%;
		margin-left: 5%;
		border: none;
		border-radius: 8px;
		position: fixed;
		bottom: 20vh;
		line-height: 7vh;
		font-size: 3vh;
		background: darkcyan;
		color: white;
	}
	
	.login{
		width: 90%;
		margin-left: 5%;
		position: fixed;
		bottom: 10vh;
		line-height: 7vh;
	}
	.login button{
		width: 45%;
		line-height: 7vh;
		font-size: 3vh;
		border: aqua;
		border: none;
		border-radius: 8px;
		color: red;
	}
	
	#zc{
		float: right;
		/*opacity:.5;*/
		background: none;
		border: 1px solid white;
		color: black;
	}
	

	
	
</style>
