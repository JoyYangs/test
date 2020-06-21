import { request } from './request'

// if there are some params, just send as function params
// export function getHomeData() {
// 	return request({
// 		url: "/api/test.json",
// 		param: {

// 		}
// 	})
// }

export function getHomeData() {
	return request({
		url: "/api/test.json"
	})
}

export function getInfo() {
	return request({
		url: "/api/getInfo",
		data: {
			"name": "test-name",
			"age": 24
		},
		method: "post"
	})
}

// maybe there are some complicated response data which your need to decoate those at a class then provide to your sub components
export class SomeClass {
	constructor(SomeData) {
		this.name = SomeData.name
		// just like this
	}
}