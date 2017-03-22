/**
 * Test configuration file
 * See https://github.com/Coffeekraken/testing-stack for information on usage
 */
module.exports = {
	"karma" : {
		"files": [
			"tests/*.js",
			{
				pattern: 'tests/img/*',
				included: false,
				served: true,
				watched: false,
				nocache: true
			}
		],
		"browsers": ["PhantomJS"]
	}
}
