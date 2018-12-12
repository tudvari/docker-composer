const fs = require('fs')
const path = require('path')
const YAML = require('json2yaml')
const Validator = require('jsonschema').Validator
const v = new Validator()

function generateCompose ( inputJSON ) {
	let schema = JSON.parse(fs.readFileSync(path.resolve(__dirname, './schema.json')))

	if ( !v.validate(inputJSON, schema).valid )
		throw new Error('Invalid input!')

	return YAML.stringify( inputJSON )
}

module.exports = {
	generate: generateCompose
}
