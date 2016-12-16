const path = require('path');
module.exports = {
	entry: {
		'demo/dist/js/demo.js' : './demo/src/js/demo.js'
	},
	output: {
		path: '.',
		filename: '[name]',
	},
	resolve: {
		alias: {
			"coffeekraken-sugar" : path.resolve(__dirname + '/src/')
		}
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
		}]
	}
}
