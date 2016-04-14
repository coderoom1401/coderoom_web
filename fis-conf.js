/**
 *FIS3 config
 *@Author: lawrence
 */

var PROJECT_NAME = "coderoom1401-web";
var LOCAL_HOST_DOMAIN = "";
var PRODUCTION_DOMAIN = "";

var JQUERY = 'jquery';
var REACT = 'react';
var REFLUX = 'reflux';
var REACT_ROUTER = 'reactRouter';
var ISCROLL_LITE = 'iscrollLite';

var OUTPUT_DIR = "./output";


fis.set('project.charset', 'utf-8');
fis.set('project.md5Length', 8);
fis.set('project.md5Connector ', '_');
fis.set('project.ignore', [
	'node_modules/**',
	'output/**',
	'fis-conf.js',
	'webpack.config.js',
	'*.yml',
	'package.json',
	'dist/**']);


//模块化钩子 commonjs规则
fis.hook('commonjs', {});

//全局规则匹配
fis.match('*.less', {
	parser: fis.plugin('less'),
	postprocessor: fis.plugin('autoprefixer', {
		browsers: ["Android >= 2.3", "ChromeAndroid > 1%", "iOS >= 4"],
		cascade: true
	}),
	rExt: '.css'
}).match("*.{js,jsx}", {
	isMod: true,
	parser: ['babel'],
	rExt: 'js'
}).match("**/({jquery,react,reflux,reactRouter,iscrollLite,lodash,loading,dialog}).{js,jsx}", {
	id: "$1",
	moduleId: "$1"
}).match("**/{mod,napossdk}.js", {
	isMod: false
}).match("/pages/(*.html)", {
	domain: LOCAL_HOST_DOMAIN,
	release: "/$1",
	deploy: fis.plugin('local-deliver', {
		to: OUTPUT_DIR
	})
});


//开发环境规则
var development = fis.media("debug");

//react .jsx 文件transfrom
development.match('::package', {
	postpackager: [fis.plugin('loader', {})]
});

development.match('*.{jsx,js,less,css,png,jpg,jpeg,svg,eot,ttf,woff}', {
	domain: LOCAL_HOST_DOMAIN,
	deploy: fis.plugin('local-deliver', {
		to: OUTPUT_DIR
	})
});


//生产环境编译规则
var packToJs = "/pkg/pack.js";
var packToCss = "/pkg/style.css";
var production = fis.media("prod");

production.match("*.{js,jsx}",{
	optimizer: fis.plugin('uglify-js', {}),
	packTo: packToJs
}).match('::package', {
	postpackager: fis.plugin('loader', {
		allInOne: false
	}),
	spriter: fis.plugin('csssprites')
});

production.match('*.less', {
	useSprite: true,
	packTo: packToCss,
	optimizer: fis.plugin('clean-css',{})
});


/*
//分享页面单独打包处理
production.match("/widget/sharePage/{*,**!/!*}.{js,jsx}",{
	packTo: "/pkg/sharePage.js"
});

production.match("/static/inSharePage.js",{
	packTo: "/pkg/sharePage.js"
});

production.match('/widget/sharePage/!*.less', {
	packTo: '/pkg/sharePage.css'
});
*/


production.match('*.{jsx,js,less,css,png,jpg,jpeg,svg,eot,ttf,woff}', {
	domain: PRODUCTION_DOMAIN,
	useHash: true,
	deploy: fis.plugin('local-deliver', {
		to: OUTPUT_DIR
	})
});

