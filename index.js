const lib = require('./lib/lib.js');

/**
 * Generate compose file from a JSON document
 * @param {string} inputJSON - JSON document, what represent the compose file.
 * @return {string} The generated compose file in YAML format.
 */
function generateCompose(inputJSON) {
  return lib.generateCompose(inputJSON);
}

module.exports = {
  generate: generateCompose,
};
