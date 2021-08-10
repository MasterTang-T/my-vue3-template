import { MockMethod } from 'vite-plugin-mock'
export default [
	{
		url: '/api/mock',
		method: 'get',
		response: ({ query }) => {
			return {
				code: 0,
				data: {
					name: '@cname()',
				},
			};
		}
	}
] as MockMethod[];