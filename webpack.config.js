const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// ExtractTextWebpackPlugin

module.exports = {
  mode: 'development',
  entry: './src/dev/index.js',
  // entry: './src/index.js',
  // entry: {
  // 	// galaxy: './src/index.js',
  // 	galaxy: './src/js/index.js'
  // },
  output: {
    // library: "galaxy",
    // libraryTarget: "umd",
    path: path.resolve(__dirname, 'dist'),
    // publicPath: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".js", ".css"],
  },
  module: {
    rules: [
      // {
      // 	test: /\.html$/,
      // 	loader: 'html-loader'
      // },
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
        use: [
          // MiniCssExtractPlugin.loader,
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
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
          'less-loader',
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
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    // new MiniCssExtractPlugin({
    // 	filename: "common.css"
    // })
  ],
  // externals: ["react", "react-router-dom"],
  devServer: {
    contentBase: path.join(__dirname, './src'),
    compress: true,
    port: 9000,
    hot: true
  }
}