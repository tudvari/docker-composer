const fs = require('fs');
const path = require('path');
const compiler = require('json-schema-to-typescript');

/**
 * Helper function to generate typescript types from json schema
 */
async function runner() {
  const compiledTs = await compiler.compileFromFile(
      path.resolve(__dirname, '../schema.json'));
  fs.writeFileSync('index.d.ts', compiledTs);
  console.log('Types are generated..');
}

runner();

