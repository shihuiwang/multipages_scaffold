//const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //压缩代码插件
const common = require('./webpack.common.js');
//const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
	devtool: 'source-map',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true//启用 source map，因为它们对调试源码(debug)和运行基准测试(benchmark tests)很有帮助。
		}),
		//DefinePlugin,webpack的内置方法
		//设置环境变量process.env.NODE_ENV，任何位于 /src 的本地代码都可以获取到它的值
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
        })
		/*new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, './src/pages/pageOne'),
				to: 'pageOne',
				ignore: ['.*']
			}
		])*/
	]
 });