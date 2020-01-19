const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const Autoprefixer = require('autoprefixer');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		library: "galaxy",
		libraryTarget: "umd",
		path: path.resolve(__dirname, 'dist'),
		// publicPath: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: [".js", ".css"],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, "src")
				],
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				include: [
					path.resolve(__dirname, "src")
				],
				exclude: /node_modules/,
				// use: ExtractTextPlugin.extract({
				//   fallback: "style-loader",
				//   use: "css-loader"
				// })
				use: [
					'style-loader',
					// {
					// 	loader: 'css-loader',
					// 	options: {
					// 		modules: false
					// 	}
					// },
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
							plugins: (loader) => [
								// require('postcss-import')({root: loader.resourcePath}),
								require('autoprefixer')(), //CSS浏览器兼容
								require('cssnano')()  //压缩css
							]
						}
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					// MiniCssExtractPlugin.loader,
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: false
						}
					},
					// 'css-loader',
					{
						loader: 'postcss-loader',
						options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
							plugins: (loader) => [
								// require('postcss-import')({root: loader.resourcePath}),
								require('autoprefixer')(), //CSS浏览器兼容
								require('cssnano')()  //压缩css
							]
						}
					},
					'less-loader',
				]
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom',
			PropTypes: 'prop-types',
			classNames: 'classnames'
		}),
		// new Autoprefixer(),
		// new MiniCssExtractPlugin({
		// 	filename: "common.css"
		// })
		// new ExtractTextPlugin("common.css"),
	],
	externals: ["react", "react-dom"]
}