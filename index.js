const YAML = require('json2yaml')

function generateCompose ( inputJSON ) {
	let result = YAML.stringify( inputJSON )
	return result
}

module.exports = {
	generate: generateCompose
}
