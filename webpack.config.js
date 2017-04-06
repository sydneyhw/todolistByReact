/*
 * @Author: Sydney
 * @Date:   2017-04-03 00:39:33
 * @Last Modified by:   Sydney
 * @Last Modified time: 2017-04-06 17:28:14
 */

'use strict';
module.exports = {
	entry: __dirname + "/src/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	devServer: {
		contentBase: "./public", //本地服务器所加载的页面所在的目录
		// colors: true, //终端中输出结果为彩色
		historyApiFallback: true, //不跳转
		inline: true //实时刷新
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.scss$/,
			loader: "style-loader!css-loader!sass-loader"
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}]
	}
};