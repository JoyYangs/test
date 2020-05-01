<template>
	<div>
		<tab-bar>
			<tab-bar-item v-for="item in items">
				<div slot="normal"></div>
				<div slot="selected"></div>
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
						selImage: "" 
					}, {
						text: "分类",
						image: "",
						selImage: "" 
					}, {
						text: "购物车",
						image: "",
						selImage: "" 
					},{
						text: "我的",
						image: "",
						selImage: ""
					}
				]
			}
		}
	}
</script>

<style>

</style>