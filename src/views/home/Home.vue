<template>
	<div id="home">
		<div>我是计数器: {{this.$store.state.counter}}</div>
		<div>我是index: {{this.$store.state.index}}</div>
		<button @click="addCounter(2)">同步指定+2</button>
		<button @click="subCounter">同步固定-1</button>
		<div><button @click="addAsyncCounterDefaultNum10()">异步默认加10</button></div>
		<div><button @click="addAsyncCounter5(5)">异步手动指定+5</button></div>
		<div><button @click="subAsyncCounter">异步固定-1</button></div>
	</div>
</template>

<script>
	
	import { mapActions, mapMutations } from 'vuex'
	export default {
		name: "Home",
		// methods: {
		// 	addCounter() {
		// 		// 触发store里面的方法,用commit
		// 		console.log("addCounter")
		// 		this.$store.commit('incrementCounter', 2)
		// 	},
		// 	subCounter() {
		// 		console.log("subCounter")
		// 		this.$store.commit('decrementCounter')
		// 	},

		// 	addAsyncCounterDefaultNum10() {
		// 		this.$store.dispatch('incrementCounterByAsync')
		// 	},
		// 	addAsyncCounter5() {
		// 		this.$store.dispatch('incrementCounterByAsync', 5)
		// 	},
		// 	subAsyncCounter() {
		// 		this.$store.dispatch('decrementCounterByAsync')
		// 	}
		// }
		methods: {
			// 当store里面定义的方法名和vue里面的方法名相同的时候就可用增强写法的格式来简化这里的操作
			// 并且直接使用数组形式...mapActions([someMethod])
			...mapActions({
				addAsyncCounterDefaultNum10: 'incrementCounterByAsync',
				addAsyncCounter5: 'incrementCounterByAsync',
				subAsyncCounter: 'decrementCounterByAsync'
			}),
			...mapMutations({
				addCounter: 'incrementCounter',
				subCounter: 'decrementCounter'
			})
		}
	}

</script>

<style>
/* 
整理：
store/index.js 中有state，mutations，actions
想要真正对页面的内容进行操作，可以将对应的实现代码放在mutations和actions中执行
在.vue文件中只需要调用就可以了
具体调用就是
mutations的方法用commit('方法名', 其他参数【可选】)
actions的方法用dispatch('方法名', 其他参数【可选】)
actions内部其实也是会最终做一些非异步的数据操作，所以这些操作有可能会调用到mutations的一些方法
就可以在actions的内部通过commit调用mutations的方法了
actions默认有一个context参数，这个参数里面提供了commit方法
原本的 someAction (context, params) {}
可以通过增强语法直接写成 someAction ({ commit, state }, params) {}
 */


 /*
 一个大坑：
 当...mapMutations和...mapActions里面的方法需要传参的时候
 直接在标签中用到该方法的地方传入参数就可以被store中的actions和mutations的payload接收到
  */
</style>