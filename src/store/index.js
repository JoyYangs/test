import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const moduleA = {
// 	state: {
// 		counter: 0
// 	},
// 	mutations: {
// 		incrementCounter(state) {
// 			state.counter += 3
// 		}
// 	}
// }

// const moduleB = {
// 	state: {
// 		counter: -5
// 	},
// 	mutations: {
// 		incrementCounter(state) {
// 			state.counter += 1
// 		}
// 	}
// }

const store = new Vuex.Store({
	state: {
		counter: 5,
		index: 0
	},
	mutations: {
		// 同步操作
		incrementCounter(state, n) {
			if (n == undefined) {
				n = 0
			}
			state.counter += n
		},
		decrementCounter(state) {
			state.counter -= 1
		}
	},
	actions: {
		// 异步处理
		incrementCounterByAsync({ commit, state }, addNum = 10) {
			console.log("incrementCounterByAsync------")
			state.index += 1
			console.log(addNum)
			commit('incrementCounter', addNum)
		},
		decrementCounterByAsync({ commit }) {
			commit('decrementCounter')
		}
	},
	modules: {
		// a: moduleA,
		// b: moduleB
	}
})

export default store