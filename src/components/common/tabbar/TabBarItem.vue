<template>
	<div class="tab-bar-item" @click="itemClick">
		<div>
			<slot name="normal"></slot>
		</div>
		<div>
			<slot name="selected"></slot>
		</div>
		<div>
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		methods: {
			itemClick() {
				console.log("itemClick")
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		height: 49px;
		line-height: 49px;
		font-size: 14px;
		text-align: center;
	}
</style>