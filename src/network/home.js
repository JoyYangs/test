import { request } from './request'

// if there are some params, just send as function params
export function getHomeData() {
	return request({
		url: "",
		param: {

		}
	})
}

// maybe there are some complicated response data which your need to decoate those at a class then provide to your sub components
export class SomeClass {
	constructor(SomeData) {
		this.name = SomeData.name
		// just like this
	}
}