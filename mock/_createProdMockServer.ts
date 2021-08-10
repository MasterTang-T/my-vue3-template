import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'


import indexModule from '../mock/index';

export function setupProdMockServer() {
	createProdMockServer([...indexModule]);
}