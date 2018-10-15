const host = {
	//页面pageOne
	'pageOne': {
		development: 'http://test.api.com/v1',
		production: 'http://api.com/v1',
	},
	//页面qrcode （无开发环境）
	'qrcode': {
		development: 'http://test.api.weibao.tiyixing.com/v1', //测试环境接口
		production: 'http://api.weibao.tiyixing.com/v1', //线上环境接口
	}
}

const nextPageDomain = {
	//页面qrcode
	'qrcode': {
		development: 'http://localhost:8080', //开发环境二级页面域名
		production: 'http://h5.tiyixing.com', //线上环境二级页面域名
	}
}

export { host, nextPageDomain };