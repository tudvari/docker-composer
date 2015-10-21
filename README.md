# Composer
Node.js package for generating docker-compose.yml file for containers from a json.

## About the package

The main goal of this repository to create a small lightweight npm package, which generates docker-compose.yml from a json file.

The json has a very easy ruleset, it use the docker-compose.yml reference for the available elements. This version support the followed commands from the docker-compose.yml reference:

- ports
- environment
- extra_hosts
- image
- command
- expose
- dns
- dns_search


You can find and read the complete docker-compose.yml reference on the next url: [Compose Reference](https://docs.docker.com/compose/yml/)

## Release Notes

You can read the changelist: [here](https://github.com/tudvari/docker-composer/blob/master/ReleaseNotes.md)

## Rules of the json

You should use the followed rules for the json file, which is the only arguments for this package.

- ports : This element is array, example syntax:

  ports : [ 'PORT_NUMBER1','PORT_NUMBER2']

- environment : This element is a subdocument, you can describe it as the followed style:

  { "ENVIRONMENT_VARIABLE1" : "VARIABLE_VALUE"}

- extra_hosts : Same a the envorinment element:

  { "HOST_NAME1" : "IP_ADDRESS", "HOST_NAME2" : "IP_ADDRESS"}

- image : This element is very simple:

  image : REGISTRY_HOST:REGISTRY_PORT/REGISTRY_USER/IMAGE_NAME:VERSION

- command : Simple key value pair.

  command : NEW_COMMAND

- expose : Array element, example:

  expose: [ PORT_NUMBER1, PORT_NUMBER2]

- dns: Array of the DNS Servers

  dns : ['DNS_SERVER_IP','DNS_SERVER_IP']

- dns_search: Array of the DNS Search Servers

  dns_search : ["DNS_SEARCH_SERVER1","DNS_SEARCH_SERVER2"]

## Usage

```javascript

  var composer = require('docker-composer') ;
    .
    .
    .
  composer.generate(inputJSON,function(err,result){
    .
    .
    .
  }) ;
```


## Full Example
Input JSON:

```json
{
    "service": {
        "environment": {
            "WARPER_PORT": "1234",
            "WARPER_IP"  : "127.0.0.1"
        },
        "extra_hosts": {
            "amqphost": "10.0.0.4",
            "mongohost": "10.0.0.4"
        },
        "ports": [
            "3456",
            "8692"
        ],
        "image" : "tudvari.com:5000/warper/ms_config:LATEST",
        "dns" : [
          "8.8.8.8",
          "127.0.0.1"
        ],
        "dns_search" : [
          "dc1.example.com",
          "dc2.example.com"
        ]

    },
    "service2": {
        "environment": {
            "WARPER_PORT": "1234",
            "WARPER_IP": "127.0.0.1"
        },
        "extra_hosts": {
            "amqphost": "10.0.0.4",
            "mongohost": "10.0.0.4"
        },
        "ports": [
            "3456",
            "8692"
        ]
    }
}

```

Result:
```yml
service:
  environment:
   -WARPER_PORT:1234
   -WARPER_IP:127.0.0.1
  extra_hosts:
   -amqphost:10.0.0.4
   -mongohost:10.0.0.4
  ports:
   -3456
   -8692
  image: tudvari.com:5000/warper/ms_config:LATEST
  dns:
   -8.8.8.8
   -127.0.0.1
  dns_search:
   -dc1.example.com
   -dc2.example.com
service2:
  environment:
   -WARPER_PORT:1234
   -WARPER_IP:127.0.0.1
  extra_hosts:
   -amqphost:10.0.0.4
   -mongohost:10.0.0.4
  ports:
   -3456
   -8692
```




## Future plans

I would like give much more power into this package. The final goal is, push all possibility into this package, which the docker-compose already has. Feel free to help me, in this mission. :-)

## Metrics

[![Code Climate](https://codeclimate.com/github/tudvari/composer/badges/gpa.svg)](https://codeclimate.com/github/tudvari/composer)
[![Test Coverage](https://codeclimate.com/github/tudvari/composer/badges/coverage.svg)](https://codeclimate.com/github/tudvari/composer/coverage)
[![Build Status](https://travis-ci.org/tudvari/docker-composer.svg?branch=master)](https://travis-ci.org/tudvari/docker-composer)
