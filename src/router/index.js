import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/home/Home'
import Category from 'views/category/Category'
import Cart from 'views/cart/Cart'
import Mine from 'views/mine/Mine'

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
		path: '/category',
		name: 'Category',
		component: Category
	}, {
		path: '/cart',
		name: 'Cart',
		component: Cart 
	},{
		path: '/mine',
		name: 'Mine',
		component: Mine
	}
]

const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.BASE_URL
})

export default router

