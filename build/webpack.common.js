const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { config } = require('../config');
const project = process.argv[2].split('=')[1];

module.exports = {
    entry: config.entry,
    plugins: [
		new CleanWebpackPlugin(['dist']),//清空dist文件夹
	   /*//生成dist的文件后自动更新index.html, title是文档的标题
		new HtmlWebpackPlugin({
			title: 'Production'
		})*/
    ].concat(config.newHtmlWebpackPlugins.map(val => {
    	return new HtmlWebpackPlugin(val);
    })),
	optimization: {
		splitChunks: {
			chunks: "initial", // 必须三选一： "initial" | "all"(默认就是all) | "async"
			minSize: 0, // 最小尺寸，默认0
			minChunks: 1, // 最小 chunk ，默认1
			maxAsyncRequests: 1, // 最大异步请求数， 默认1
			maxInitialRequests : 1, // 最大初始化请求书，默认1
			name: function(){}, // 名称，此选项可接收 function
			cacheGroups:{ // 这里开始设置缓存的 chunks
				priority: false, // 缓存组优先级
				vendor: { // key 为entry中定义的 入口名称
					chunks: "initial", // 必须三选一： "initial" | "all" | "async"(默认就是异步)
					test: /react|lodash/, // 正则规则验证，如果符合就提取 chunk
					name: "vendor", // 要缓存的 分隔出来的 chunk 名称
					minSize: 0,
					minChunks: 1,
					enforce: true,
					maxAsyncRequests: 1, // 最大异步请求数， 默认1
					maxInitialRequests : 1, // 最大初始化请求书，默认1
					reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
				}
			}
		}
	},
	performance: {
		hints: false
	},
    output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist')
    },
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 500000,
					name: project ? `${project}/imgs/[name].[hash:7].[ext]` : '[name].[hash:7].[ext]'
				}
            }
		]
	}
 };