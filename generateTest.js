const fs = require('fs')
const should = require('should')
const composer = require('./index')
const YML = require('js-yaml')

describe('composer', function () {

	it('Should equal', async function () {

		let expectedYML = YML.safeLoad(fs.readFileSync('./test_datas/first.yml'), 'utf-8')
		let result = await composer.generate(JSON.parse(fs.readFileSync('./test_datas/first.json')))
		let actualYML = YML.safeLoad(result, 'utf-8')

		should.equal(YML.dump(actualYML), YML.dump(expectedYML))
	})
})
