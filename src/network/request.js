import axios from 'axios'

export function request(config) {
	const instance = axios.create({
		baseURL: "",
		timeout: 3000
	})

	return instance(config)
}