const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

console.log('process.env.NODE_ENV :', process.env.NODE_ENV === (undefined || '') ? 'development' : 'production')

/*
Webpack will load modules from the node_modules folder and bundle them in.
This is fine for frontend code, but backend modules typically aren't prepared for this (i.e. using require in weird ways) 
We simply don't want to bundle in anything from node_modules.
*/

var nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

module.exports = {
  mode: process.env.NODE_ENV === undefined ? 'development' : 'production',
  devtool: 'sourcemap', // build and rebuild speed dramatically faster
  // devtool:process.env.NODE_ENV === 'production' ? 'source-map' : 'inline-source-map',

  entry: {
    backend: './index.js' //  the entry point, it loads express and starts a server.
  },
	target: 'node', // The target: 'node' option tells webpack not to touch any built-in modules like fs or path.
  
  output: {
    path: path.resolve(__dirname, 'build'), // place the bundle.js file into project with folder name 'dist'
    filename: '[name].[hash].js', // name:The module name | chunkhash: The hash of the chunk content -[chunkhash]	
	},
  
  externals: nodeModules, // in order to ignore all modules in node_modules folder

  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  },


  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })

  ] // end of plugins

} // end of module.exports	
