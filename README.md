# vite + ts + ant-design-vue 构建项目

## vite-mock-plugin

1. yarn add mockjs vite-mock-plugin
2. vite-config-ts

```
import { viteMockServe } from 'vite-plugin-mock'
plugins: [vue(), viteMockServe({
    mockPath: 'mock',
    localEnabled: true,
    prodEnabled: true,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
  })]
```

3. 外层 mock 文件夹

\_createProdMockServer.ts

```
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'


import indexModule from '../mock/index';

export function setupProdMockServer() {
	createProdMockServer([...indexModule]);
}
```

index.ts

```
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

```
