const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.tsx',
  output: {
    filename: "[name].[contenthash:5].js",
    path: path.join(__dirname, "dist")
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: {
      index: "./index.html",
    },
  },
  resolve: {
    extensions: [".ts",".tsx",".js",".json"],
    alias: {
      "@": path.resolve("src")
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: "index.[hash:5].html"
    }),
    new webpack.HotModuleReplacementPlugin() // 热更新插件
  ]
}