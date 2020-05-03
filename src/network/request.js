import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: "",
		timeout: 3000
	})

	// 请求和响应 拦截
	instance.interceptors.request.use(config => {
		// 请求成功时候来到这里
		console.log(config)
		// 这里必须要把config return回去吗，不然就请求失败了
		return config
	}, err => {
		// 请求失败的时候来到这里
		console.log(err)
	})

	instance.interceptors.response.use(res => {
		// 响应成功的时候来到这里
		console.log(res)
		return res
	}, err => {
		console.log("响应失败的时候来到这里")
	})

	return instance(config)
}


// 关于网络请求封装的其他几种写法
// export function request(config, success, failure) {
// 	const instance = axios.create({
// 		baseURL: "",
// 		timeout: 3000
// 	})

// 	// 在请求的时候直接传了三个参数，success和failure是两个回调函数
// 	instance(config).then(res => {
// 		success(res)
// 	}).catch(err => {
// 		failure(err)
// 	})
// }

// 调用的时候
// request({
// 	// config
// }, res => {
// 	// success
// }, err => {
// 	// failure
// })


// export function request(config) {
// 	const instance = axios.create({
// 		baseURL: "",
// 		timeout: 3000
// 	})
// 	instance(config.baseConfig).then(res => {
// 		config.success(res)
// 	}).catch(err => {
// 		config.failure(err)
// 	})
// }

// 调用的时候
// request({
// 	baseConfig: {

// 	},
// 	success: function (res) {

// 	},
// 	failure: function (err) {

// 	}
// })


// export function request(config) {
// 	return new Promise((resolve, reject) => {
// 		const instance = axios.create({
// 			baseURL: "",
// 			timeout: 3000
// 		})
		
// 		instance(config).then(res => {
// 			resolve(res)
// 		}).catch(err => {
// 			reject(err)
// 		})
// 	})
// }

// // 调用的时候
// request(config).then(res => {
// 	console.log(res)
// }).catch(err => {
// 	console.log(err)
// })
