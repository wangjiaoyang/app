<template>
  <div id="app">
    <div class="header">
    	<p @click="black()"><返回</p>
    </div>
    
    <nav>
    	<p>登录</p>
    	<p @click="zc()">注册</p>
    	
    	<div id="triangle-up"></div>
    </nav>
    <div style="clear: both;"></div>
    <div class="bodyer">
    	
    	<p><input type="text" placeholder="请输入手机号" /></p>
    	<p><input type="text" placeholder="请输入密码" /></p>
    	
    	
    	<button>
    		登 录
    	</button>
    	
    	<a @click="pwd()">忘记密码？管我啥事？</a>
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
  	zc(){
  		
  		this.$router.push('./zc')
  		
  	},
  	pwd(){
  		
  		this.$router.push('./RtePwd1')
  		
  	}
  }
}
</script>

<style scoped="scoped">
.header{
	width: 100%;
	height: 32vh;
	background: url(../../assets/q1.jpg);
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
	color: #9a9a9a;
}
nav p:nth-child(1){
	color: gray;
}
#triangle-up {
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right:6px solid transparent;
	border-bottom: 12px solid white;
	position: fixed;
	left: 12.8vh;
	top: 38.7vh;
}

.bodyer p{
	width: 100%;
	line-height: 10vh;
	padding-top: 4vh;
}
.bodyer p input{
	width: 80%;
	margin-left: 10%;
	line-height: 9vh;
	border: none;
	border-bottom: 1px solid gainsboro;
	text-align: center;
	font-size: 2.5vh;
}

.bodyer button{
	width: 80%;
	margin-left: 10%;
	margin-top: 6vh;
	line-height: 8vh;
	border: none;
	font-size: 2.5vh;
	color: white;
	background: brown;
	border-radius: 8px;
}

.bodyer a{
	display: block;
	text-align: center;
	width: 100%;
	font-size: 2.5vh;
	margin-top: 5vh;
	color: gray;
}

</style>
