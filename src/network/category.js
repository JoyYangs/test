import { request } from './request'

export function getCategoryData(title) {
	return request({
		url: "",
		params: {
			title
		}
	})
}