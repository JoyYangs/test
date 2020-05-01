import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home'
import Cart from 'views/cart/Cart'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},{
		path: '/home',
		name: 'Home',
		component: Home 
	},{
		path: '/cart',
		name: 'Cart',
		component: Cart
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router

