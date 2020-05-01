<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isSelect">
			<slot name="normal"></slot>
		</div>
		<div v-else>
			<slot name="selected"></slot>
		</div>
		<!-- style use computed to get -->
		<div :style="activeStyle">
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabBarItem",
		props: {
			path: String,
			selectedColor: {
				type : String,
				default() {
					return "deeppink"
				}
			}
		},
		data() {
			return {
				
			}
		}, 
		computed: {
			isSelect() {
				return this.$route.path.indexOf(this.path) != -1
			}, 
			activeStyle() {
				return this.isSelect ? {color: this.selectedColor} : {}
			}
		},
		methods: {
			itemClick() {
				this.$router.replace(this.path)
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