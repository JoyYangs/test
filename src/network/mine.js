import { request } from './request'

export function getMineInfo(userId) {
	return request({
		url: "",
		params: {
			userId
		}
	})
}