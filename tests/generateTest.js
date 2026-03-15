/*eslint no-undef: "warn"*/
const {describe, it, expect} = require('@jest/globals')
const fs = require('fs');
const composer = require('../index');
const YML = require('js-yaml');

describe('composer', function() {
  it('Should equal', function() {
    const expectedYML = YML.load(fs.readFileSync('./tests/test_datas/first.yml'), 'utf-8');
    const result = composer.generate(JSON.parse(fs.readFileSync('./tests/test_datas/first.json')));
    const actualYML = YML.load(result, 'utf-8');

    expect(YML.dump(actualYML)).toEqual(YML.dump(expectedYML));
  });

  it('Validator test - invalid', function() {
      expect(() => composer.generate(JSON.parse(fs.readFileSync('./tests/test_datas/invalid_input.json')))).toThrow('Invalid input!');
  });
})	
