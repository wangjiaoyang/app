import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import logo from './components/logo.vue'
import dl from './components/login/dl.vue'
import zc from './components/login/zc.vue'
import RtePwd1 from './components/login/RtePwd1.vue'
import RtePwd2 from './components/login/RtePwd2.vue'
import RtePwd3 from './components/login/RtePwd3.vue'

var router = new VueRouter ({
		routes:[
			{path:"",redirect:"/logo"},
			{path:"/logo",component:logo},
			{path:"/dl",component:dl},
			{path:"/zc",component:zc},
			{path:"/RtePwd1",component:RtePwd1},
			{path:"/RtePwd2",component:RtePwd2},
			{path:"/RtePwd3",component:RtePwd3}
		]
	
})

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
