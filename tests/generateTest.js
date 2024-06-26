/*eslint no-undef: "warn"*/
const fs = require('fs');
const should = require('should');
const composer = require('../index');
const YML = require('js-yaml');

describe('composer', function() {
  it('Should equal', function() {
    const expectedYML = YML.load(
        fs.readFileSync('./tests/test_datas/first.yml'), 'utf-8');
    const result = composer.generate(
        JSON.parse(fs.readFileSync('./tests/test_datas/first.json')));
    const actualYML = YML.load(result, 'utf-8');

    should.equal(YML.dump(actualYML), YML.dump(expectedYML));
  });

  it('Validator test - invalid', function() {
    try {
      composer.generate(JSON.parse(
          fs.readFileSync('./tests/test_datas/invalid_input.json')));
    } catch ( error ) {
      should.exists(error);
      should.equal(error.message, 'Invalid input!');
    }
  });
});
