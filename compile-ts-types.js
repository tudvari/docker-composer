const fs = require('fs')
const compiler = require('json-schema-to-typescript')

async function f() {
  const compiledTs = await compiler.compileFromFile('schema.json');
  fs.writeFileSync('index.d.ts', compiledTs)
}

f();

