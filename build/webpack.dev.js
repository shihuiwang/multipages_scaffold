const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'inline-source-map', //开启代码调试, 定位代码错误的位置
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		//DefinePlugin,webpack的内置方法
		//设置环境变量process.env.NODE_ENV，任何位于 /src 的本地代码都可以获取到它的值
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	]
});