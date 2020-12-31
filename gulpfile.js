const fs = require('fs')
const compiler = require('json-schema-to-typescript')

function defaultTask (cb) {
	compiler.compileFromFile('schema.json')
		.then((ts) => {
			fs.writeFileSync('index.d.ts', ts)
			cb() }
		)
}

exports.default = defaultTask
