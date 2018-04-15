const composer = require('./index')
const fs = require('fs')
const should = require('should')

describe('composer', function () {

	it('test all parameters with 2 service', async function () {
		let outputYML = fs.readFileSync('./tests/1_output.yml')

		let result = await composer.generate(fs.readFileSync('./tests/1_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
	})

  it('test all parameters with 2 service nok', async function () {
    let outputYML = fs.readFileSync('./tests/2_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/2_input.json'))
		should.notEqual(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
	})

  it('ports missing', async function () {
    let outputYML = fs.readFileSync('./tests/3_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/3_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
  })

  it('volumes missing', async function () {
    let outputYML = fs.readFileSync('./tests/volumes_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/volumes_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
  })

  it('ports missing value', async function () {
    let outputYML = fs.readFileSync('./tests/8_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/8_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
  })

  it('volumes missing values', async function () {
    let outputYML = fs.readFileSync('./tests/volumes_misising_value.yml')

    let result = await composer.generate(fs.readFileSync('./tests/volumes_missing_value.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
  })

  it('environment missing value', async function () {
    let outputYML = fs.readFileSync('./tests/4_output.yml')

		let result = await composer.generate(fs.readFileSync('./tests/4_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
  })

  it('environment missing', async function () {
    let outputYML = fs.readFileSync('./tests/5_output.yml')

		let result = await composer.generate(fs.readFileSync('./tests/5_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
  })

  it('extra_hosts missing', async function () {
    let outputYML = fs.readFileSync('./tests/6_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/6_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
  })

  it('extra_hosts missing value', async function () {
    let outputYML = fs.readFileSync('./tests/7_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/7_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
  })

  it('input json is missing', async function () {
		try {
			composer.generate(null)
		}
		catch (err) {
			should.equal(err.message, 'json is missing')
    }
  })

	it('environment json is invalid', async function () {
		try {
    	composer.generate(fs.readFileSync('./tests/9_input.json'))
		}
		catch (err) {
			should.exists(err)
		}
	})

  it('expose', async function () {
    let outputYML = fs.readFileSync('./tests/10_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/10_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
	})

  it('expose is missing', async function () {
    let outputYML = fs.readFileSync('./tests/11_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/11_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
		 outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
	})

  it('command', async function () {
    let outputYML = fs.readFileSync('./tests/12_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/12_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
	})

  it('dns', async function () {
    let outputYML = fs.readFileSync('./tests/14_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/14_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
	})

  it('dns missing', async function () {
    let outputYML = fs.readFileSync('./tests/15_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/15_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
	})

  it('dns_search', async function () {
    let outputYML = fs.readFileSync('./tests/16_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/16_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
  })

	it('dns_search missing', async function () {
    let outputYML = fs.readFileSync('./tests/17_output.yml')

    let result = await composer.generate(fs.readFileSync('./tests/17_input.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
	})

  it('mem_limit', async function () {
    let outputYML = fs.readFileSync('./tests/mem_limit_1.yml')

    let result = await composer.generate(fs.readFileSync('./tests/mem_limit_1.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
	})

	it('memswap_limit', async function () {
    let outputYML = fs.readFileSync('./tests/memswap_limit_1.yml')

    let result = await composer.generate(fs.readFileSync('./tests/memswap_limit_1.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
		outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
	})

  it('cpu_shares', async function () {
    let outputYML = fs.readFileSync('./tests/cpu_shares_output_1.yml')

    let result = await composer.generate(fs.readFileSync('./tests/cpu_shares_input_1.json'))
		should.equal(result.replace(/(\r\n|\n|\r)/gm, ''),
			outputYML.toString().replace(/(\r\n|\n|\r)/gm, ''))
  })
});
