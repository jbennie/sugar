const path = require('path');
module.exports = {
	entry: {
		'./demo/dist/js/app.js': './demo/src/js/app.js'
	},
	output: {
		path: require('path').resolve('.'),
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
