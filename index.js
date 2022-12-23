const fs = require('fs');
const path = require('path');
const YAML = require('json2yaml');
const Validator = require('jsonschema').Validator;
const v = new Validator();

/**
 * Generate compose file from a JSON document
 * @param {string} inputJSON - JSON document, what represent the compose file.
 * @return {string} The generated compose file in YAML format.
 */
function generateCompose(inputJSON) {
  const schema = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, './schema.json')));

  if (!v.validate(inputJSON, schema).valid) {
    throw new Error('Invalid input!');
  }
  return YAML.stringify(inputJSON);
}

module.exports = {
  generate: generateCompose,
};
