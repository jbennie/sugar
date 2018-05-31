const path = require('path');
module.exports = {
	entry: {
	},
	output: {
		path: '.',
		filename: '[name]',
	},
	resolve: {
		alias: {
			"coffeekraken-sugar" : path.resolve(__dirname + '/dist/')
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader'
		}]
	}
}
