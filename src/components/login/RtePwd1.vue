<template>
  <div id="app">
    <header>
    	<a @click="dl()"><返回</a>
    	<p>找回密码</p>
    </header>
    
    <div class="bod">
    	
    	<a>请输入您的手机号码</a>
    	
    	<input type="text"placeholder="手机号" />
    	<p class="p1">
    		<button>下 一 步</button>
    	</p>
    	<p >
    		<button id="p2">联 系 客 服</button>
    	</p>
    </div>
    
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
	  	this.$router.push('./dl')
	  }
  }
}
</script>

<style scoped="scoped">
	header{
		width: 100%;
		height: 7vh;
		/*padding-top: 3vh;*/
		line-height: 3vh;
		background: brown;
		line-height: 7vh;
		color: white;
		/*font-weight: bold;*/
		font-size: 3vh;
		text-align: center;
	}
	header a{
		position: fixed;
		left: 2vh;
		top: .5vh;
		font-size: 2.5vh;
	}
	
	.bod a{
		display: block;
		width: 100%;
		text-align: center;
		font-size: 3vh;
		margin-top: 10vh;
	}
	
	input{
		width: 80%;
		margin-left: 10%;
		border: none;
		margin-top: 4vh;
		line-height: 8vh;
		border-bottom: 1px solid gainsboro;
		font-size: 2vh;
		text-align: center;
	}
	
	.bod button{
		width: 80%;
		margin-left: 10%;
		background: brown;
		border: none;
		border-radius: 8px;
		color: white;
		font-size: 2.5vh;
		height: 7vh;
	}
	
	.bod p{
		width: 100%;
		line-height: 11vh;
	}
	
	.p1{
		margin-top: 6vh;
	}
	
	#p2{
		background: none;
		border: 1px solid brown;
		color: brown;
	}
	
</style>
