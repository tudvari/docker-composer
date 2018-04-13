'use strict'
var async = require('async')
var fragments = []

/**
* @function processProp
* @param prop {String} - property name
* @param serviceProperties {Object} - list with serviceProperties
* @param ymlFragment {String} - reference for the YML fragment to write to
* @return {String} - composed yml structure for the prop
*/
function processSingleProp (prop, serviceProperties) {
	prop = prop.trim()
	var ymlFragment = ''
	if (serviceProperties[prop] === undefined) return ''
	// Check if it is an array
	if (Array.isArray(serviceProperties[prop])) {
		// Array entry -> iterate and build props
		if (serviceProperties[prop].length > 0) {
			ymlFragment = ymlFragment.concat('  ').concat(prop + ':\n')
			for (let propVal of serviceProperties[prop]) {
				ymlFragment = ymlFragment.concat('   - ').concat(propVal).concat('\n')
			}
		}
	} else {
		if (typeof serviceProperties[prop] === 'object' && !Array.isArray(serviceProperties[prop])) {
			var objectKey = serviceProperties[prop]
			if (Object.getOwnPropertyNames(objectKey).length) {
				// Object entry -> iterate and build props
				ymlFragment = ymlFragment.concat('  ').concat(prop + ':\n')
				// Some props are using another concat instead of : for composing the values
				// For this we are using the variable _concatFragment
				var _concatFragment = ':'
				if (prop === 'environment') {
					_concatFragment = '='
				}
				for (let envJSONKey of Object.getOwnPropertyNames(objectKey)) {
					var objValue = objectKey[envJSONKey]
					ymlFragment = ymlFragment.concat('   - ').concat(envJSONKey).concat(_concatFragment).concat(objValue).concat('\n')
				}
			}
		} else {
			// It's not an array
			ymlFragment = ymlFragment.concat('  ' + prop + ': ').concat(serviceProperties[prop]).concat('\n')
		}
	}
	// return the fragment
	return ymlFragment
}

function processProps (serviceName, serviceProperties, cb) {
	// Instantiate the ymlFragment
	var ymlFragment = ''
	// Check the existance of the service name
	if (!serviceName) {
		var error = new Error('missing servicename..')
		return cb(error)
	}
	// Check the existance of serviceProperties
	if (!serviceProperties) {
		let error = new Error('missing properties..')
		return cb(error)
	}

	// Concat the service name
	fragments.push(ymlFragment.concat(serviceName).concat(':').concat('\n'))

	// Iterate throughout all the JSON file and build the requested services in the YML file
	for (let prop of Object.getOwnPropertyNames(serviceProperties)) {
		fragments.push(processSingleProp(prop, serviceProperties))
	}
}

/**
* @exports
*/
module.exports.generate = function (json) {
	return new Promise(function (resolve, reject) {
		fragments = []

		// input validations
		if (!json) {
			reject(new Error('json is missing'))
		}

		let parsedJSON = ''

		try {
			parsedJSON = JSON.parse(json)
		} catch (err) {
			// Send back the error
			reject(err)
		}

		// JSON processing

		async.forEachOf(parsedJSON, function (value, key, callback) {
			processProps(key, value, callback)
		})

		let resultString = ''

		for (let fragment of fragments) {
			resultString = resultString.concat(fragment)
		}
		// Return the callback with the resulted string
		resolve(resultString)
	})
}
