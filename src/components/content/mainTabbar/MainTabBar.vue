<template>
	<div>
		<tab-bar>
			<tab-bar-item v-for="item in items" :selectedColor="item.selColor" :path="item.path" :key="item.path">
				<!-- <img slot="normal" src="" alt="">
				<img slot="selected" src="" alt=""> -->
				<!-- 加入img之后就把item的line-height和height注释了 -->
				<div slot="text">{{item.text}}</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import { TabBar, TabBarItem } from '../../common/tabbar/'
	// import TabBar from '../../common/tabbar/TabBar'
	// import TabBarItem from '../../common/tabbar/TabBarItem'

	export default {
		name: "MainTabBar",
		components: {
			TabBar,
			TabBarItem
		}, 
		data() {
			return {
				items: [{
						text: "首页",
						image: "",
						selImage: "",
						selColor: "deeppink",
						path: "/home"
					}, {
						text: "分类",
						image: "",
						selImage: "",
						selColor: "blue",
						path: "/category"
					}, {
						text: "购物车",
						image: "",
						selImage: "",
						selColor: "yellow",
						path: "/cart"
					},{
						text: "我的",
						image: "",
						selImage: "",
						selColor: "aqua",
						path: "/mine"
					}
				]
			}
		}
	}
</script>

<style>

</style>