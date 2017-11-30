<template>
  <div id="app">
    <div class="header">
    	<p @click="black()"><返回</p>
    </div>
    
    <nav>
    	<p @click="dl()">登录</p>
    	<p>注册</p>
    	
    	<div id="triangle-up"></div>
    </nav>
    <div style="clear: both;"></div>
    <div class="bodyer">
    	
    	<p><input type="text" placeholder="    请输入手机号" /></p>
    	<p><input type="text" placeholder="    请输入密码" /></p>
    	<p><input type="text" placeholder="    请确认密码" /></p>
    	<p><input type="text" placeholder="    邀请码（没有可不填）" /></p>
    	
    	
    	<button>
    		注 册
    	</button>
    	

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
  	black(){
  		
  		this.$router.push('../logo')
  		
  	},
  	dl(){
  		
  		this.$router.push('./dl')
  		
  	}
  }
}
</script>

<style scoped="scoped">
.header{
	width: 100%;
	height: 32vh;
	background: url(../../assets/q2.jpg);
}

.header p{
	position: fixed;
	top: 2.5vh;
	color: white;
	left: 2vh;
	font-size: 3vh;
}
nav{
	width: 100%;
	
}
nav p{
	float: left;
	line-height: 8.5vh;
	background: gainsboro;
	width: 50%;
	text-align: center;
	color: gray;
}
nav p:nth-child(1){
	color: #9a9a9a;
}
#triangle-up {
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right:6px solid transparent;
	border-bottom: 12px solid white;
	position: fixed;
	right: 12.8vh;
	top: 38.7vh;
}

.bodyer p{
	width: 100%;
	line-height: 10vh;
	padding-top: 1vh;
}
.bodyer p input{
	width: 80%;
	margin-left: 10%;
	line-height: 9vh;
	border: none;
	border-bottom: 1px solid gainsboro;

	font-size: 2.5vh;
}

.bodyer button{
	width: 80%;
	margin-left: 10%;
	margin-top: 4vh;
	line-height: 8vh;
	border: none;
	font-size: 2.5vh;
	color: white;
	background: brown;
	border-radius: 8px;
}



</style>
