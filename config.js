const glob = require('glob');
const project = process.argv[2].split('=')[1]; //通过process.argv获取一个命令数组,并获取命令中的参数（项目名称）
const dev = process.argv[3];
/**
 * 动态查找所有入口文件
 */
const globStr = project ? `./src/pages/${project}/entryJs/*.js` : './src/pages/*/entryJs/*.js';
let config = {};
let files = glob.sync(globStr);
let newEntries = {};
let newHtmlWebpackPlugins = [];

files.forEach(function(f,ix){

	let item = {};
	let name = /.*\/(pages\/.*?\/entryJs\/.*?)\.js/.exec(f)[1];  //得到pages/pageOne/index这样的文件名

	let i = name.indexOf('/');  //得到第一个/的下标

	let nextName = name.substring(i+1).replace('/entryJs', ''); //得到pageOne/index，以在dist下生成pageOne/index文件夹形式的结构
	if(dev === '--dev' && ix === 0) {
		nextName = 'index'
	}
	newEntries[nextName] = f;

	item.template = './src/' + name.replace('/entryJs', '') + '.html';
	item.filename = nextName + '.html';
	item.chunks = [nextName];
	newHtmlWebpackPlugins.push(item)
});

config.entry = Object.assign({}, config.entry, newEntries);
config.newHtmlWebpackPlugins = Object.assign([], newHtmlWebpackPlugins);
config.project = project;

exports.config = config;