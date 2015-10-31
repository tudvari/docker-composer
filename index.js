'use strict';

const async = require('async');
let fragments = [];

function processProps(serviceName, serviceProperties, cb) {

  let ymlFragment = '';
  if (!serviceName) {
    let error = new Error('missing servicename..');
    return cb(error);
  }
  if (!serviceProperties) {
    let error = new Error('missing properties..');
    return cb(error);
  }

  ymlFragment = ymlFragment.concat(serviceName).concat(':').concat('\n') ;

  for(let prop of Object.getOwnPropertyNames(serviceProperties)) {

    //ports
    if ("ports" === prop && serviceProperties[prop].length) {
      ymlFragment = ymlFragment.concat("  ").concat('ports:\n') ;

      for(let portNum of serviceProperties[prop]){
        ymlFragment = ymlFragment.concat("   -").concat(portNum).concat('\n') ;
      }
    }

    //image
    if ("image" === prop) {
      ymlFragment = ymlFragment.concat("  image: ").concat(serviceProperties[prop]).concat('\n') ;
    }

    //environment
    if ("environment" === prop) {
      let environmentJSON = serviceProperties[prop];
      if (Object.getOwnPropertyNames(environmentJSON).length) {

        ymlFragment = ymlFragment.concat("  environment:").concat('\n');

        for(let envJSONKey of Object.getOwnPropertyNames(environmentJSON)) {
          let environmentValue = environmentJSON[envJSONKey];
          ymlFragment = ymlFragment.concat("   -").concat(envJSONKey).concat(":").concat(environmentValue).concat('\n') ;
        }
      }
    }

    //extra_hosts
    if ("extra_hosts" === prop) {
      let hostsJSON = serviceProperties[prop];
      if (Object.getOwnPropertyNames(hostsJSON).length) {

        ymlFragment = ymlFragment.concat("  extra_hosts:").concat('\n');

        for(let envJSONKey of Object.getOwnPropertyNames(hostsJSON)) {
          let hostsValue = hostsJSON[envJSONKey];
          ymlFragment = ymlFragment.concat("   -").concat(envJSONKey).concat(":").concat(hostsValue).concat('\n') ;
        }
      }
    }
    //expose
    if ("expose" === prop && serviceProperties[prop].length) {
      ymlFragment = ymlFragment.concat("  ").concat('expose:\n') ;

      for(let exposePort of serviceProperties[prop]){
        ymlFragment = ymlFragment.concat("   -").concat(exposePort).concat('\n') ;
      }
    }

    //command
    if ("command" === prop) {
      ymlFragment = ymlFragment.concat("  command: ").concat(serviceProperties[prop]).concat('\n') ;
    }

    //dns
    if ("dns" === prop && serviceProperties[prop].length) {
      ymlFragment = ymlFragment.concat("  ").concat('dns:\n') ;

      for(let dnsServerIP of serviceProperties[prop]){
        ymlFragment = ymlFragment.concat("   -").concat(dnsServerIP).concat('\n') ;
      }
    }

    //dns search
    if ("dns_search" === prop && serviceProperties[prop].length) {
      ymlFragment = ymlFragment.concat("  ").concat('dns_search:\n') ;

      for(let dnsServerIP of serviceProperties[prop]){
        ymlFragment = ymlFragment.concat("   -").concat(dnsServerIP).concat('\n') ;
      }
    }

    //memory limit
    if ("mem_limit" === prop) {
      ymlFragment = ymlFragment.concat("  mem_limit: ").concat(serviceProperties[prop]).concat('\n') ;
    }
    //memory swap limit
    if ("memswap_limit" === prop) {
      ymlFragment = ymlFragment.concat("  memswap_limit: ").concat(serviceProperties[prop]).concat('\n') ;
    }
  }
  fragments.push(ymlFragment) ;
  cb(null, ymlFragment) ;
}

module.exports.generate = function(json, callback) {

  fragments = [] ;

  //input validations

  if (!json) {
    return callback(new Error('json is missing'));
  }
  let parsedJSON = '';
  try {
    parsedJSON = JSON.parse(json) ;
  } catch (err) {
    return callback(err);
  }

  //json processing

  async.forEachOf(parsedJSON, function(value, key, callback) {
    processProps(key, value, callback);
  }) ;let resultString = '';
  for(let fragment of fragments) {
    resultString = resultString.concat(fragment).concat('\n') ;
  }
  return callback(null, resultString);
}
