<template>
	<div id="cart">
		<div class="top-item">我的顶部栏，我的位置不变</div>
		<div class="cart-wrapper" ref="bscroll_view">
			<div class="content">
				<!-- 下拉刷新 UI -->
				<div class="pulldown-wrapper">
          <div v-show="beforePullDown">
            <span>Pull Down and refresh</span>
          </div>
          <div v-show="!beforePullDown">
            <div v-show="isPullingDown">
              <span>{{loading}}</span>
            </div>
            <div v-show="!isPullingDown"><span>Refresh success</span></div>
          </div>
        </div>
				<!-- 具体的内容 UI -->
				<ul>
					<li v-for="list of lists" :key="list">{{text}}{{list}}</li>
				</ul>
				<!-- 上拉加载更多 UI -->
				<div class="pullup-wrapper">
          <div v-if="!isPullupLoad" class="before-trigger">
            <span class="pullup-txt">{{loadMoreTip}}</span>
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">{{loading}}</span>
          </div>
        </div>
			</div>
		</div>
		<div class="bottom-item">我的底部栏，我的位置也不变</div>
	</div>
</template>

<script>
	import BScroll from '@better-scroll/core'
	import Pullup from '@better-scroll/pull-up'
	import Pulldown from '@better-scroll/pull-down'

	// 分开use
	BScroll.use(Pullup)
	BScroll.use(Pulldown)

	export default {
		name: "Cart",
		data() {
			return {
				beforePullDown: true,
				isPullingDown: false,
				isPullupLoad: false,
				loadMoreTip: "Pull up and load more",
				loading: "Loading...",
				text: "我是滚动区域的列表 ",
				lists: 30
			}
		},
		created() {
			this.bscroll = null
		},
		mounted() {
			this.initBscroll()
		},
		methods: {
			initBscroll() {
				this.bscroll = new BScroll(this.$refs.bscroll_view, {
					scrollY: true,
					pullUpLoad: true,
					pullDownRefresh: true
				})

				// 这里this.handlePullingUp和this.handlePullingDown 后面不能加()，不然就会直接调用一次
				this.bscroll.on('pullingUp', this.handlePullingUp)
				this.bscroll.on('pullingDown', this.handlePullingDown)
			},
			/** 
			 * 上拉加载更多
			*/
			// 使用await 就要是async
		  async	handlePullingUp() {
				if (this.lists > 60) {
					this.loadMoreTip = "没有新数据啦~~~"
				}else {
					this.isPullupLoad = true
					console.log("加载更多执行之前----")
					await this.getDataByPullUp()
					console.log("加载更多执行完毕----")
					this.isPullupLoad = false
				}
				// 也可以在回调的部分写下面的调用
				this.bscroll.finishPullUp()
				this.bscroll.refresh()
			},
			async getDataByPullUp() {
				// 判断是否正在上拉加载更多
				if (this.isPullupLoad) {
					console.log("正在加载数据中....")
					// 异步请求网络数据
					const newData = await new Promise(resolve => {
						setTimeout(() => {
							// 请求到数据了，开始回调resolve
							// 网络数据就直接返回就好了
							const res = {
								"msg": "请求成功",
								"data": {
									"list": 20,
									"text": "我是上拉加载的列表 "
								}
							}
							resolve(res.data)
						}, 1000);
					})
					// resolve回调完成，拿到数据
					this.lists += newData.list
					this.text = newData.text
					// 到此，网络请求加载更多完毕
				}
			},
			/**
			 * 下拉刷新
			 */
			async handlePullingDown() {
				this.beforePullDown = false
				this.isPullingDown = true
				// 开始刷新
				await this.getDataByPullDown()
				// 刷新结束
				// this.bscroll.finishPullDown()
				// this.bscroll.refresh()
				setTimeout(() => {
					this.bscroll.refresh()
					this.beforePullDown = true
				}, 1000);
				this.isPullingDown = false
			},
			async getDataByPullDown() {
				 
				const newText = await new Promise(resolve => {
					setTimeout(() => {
						this.bscroll.finishPullDown()
						resolve("我是下拉刷新后的列表 ")
					}, 1000);
				})
				this.text = newText
			}

		}
	}
</script>

<style scoped>
	#cart {
		margin-bottom: 60px;
	}

	/* 不用overflow:hidden */
	.cart-wrapper {
		position: fixed;
		bottom: 79px;
		top: 40px;
		left: 0;
		right: 0;
		background-color: antiquewhite;
	}
	.pulldown-wrapper {
		position: absolute;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		transform: translateY(-100%) translateZ(0);
		text-align: center;
		color: #999;
	}
  
	.pullup-wrapper{
  	padding-bottom: 10px;
  	text-align: center;
  	color: #999
	}
	.content {
		margin-top: -10px;
	}

	.top-item {
		height: 40px;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background-color: gold;
		z-index: 10;
	}

	.bottom-item {
		height: 30px;
		position: fixed;
		bottom: 49px;
		left: 0;
		right: 0;
		background-color: brown;
	}

	

	
</style>