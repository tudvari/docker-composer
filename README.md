# Composer
Generate docker compose from JSON.

[![Code Climate](https://codeclimate.com/github/tudvari/composer/badges/gpa.svg)](https://codeclimate.com/github/tudvari/composer)
[![Test Coverage](https://codeclimate.com/github/tudvari/composer/badges/coverage.svg)](https://codeclimate.com/github/tudvari/composer/coverage)
[![Build Status](https://travis-ci.org/tudvari/docker-composer.svg?branch=master)](https://travis-ci.org/tudvari/docker-composer)

## About the package

The JSON has a very easy ruleset, it use the docker-compose.yml reference for the available elements. This version support commands from the docker-compose.yml reference that have values as only one line (string, number), array, or object (one level)


You can find and read the complete docker-compose.yml reference: [HERE](https://docs.docker.com/compose/yml/)

## Release Notes

You can read the changelist: [HERE](https://github.com/tudvari/docker-composer/blob/master/ReleaseNotes.md)

## Usage

```javascript

  const composer = require('docker-composer')
    .
  var generatedYML = await composer.generate(inputJSON)
```

## Full Example
Input JSON:

```json
{
    "service": {
        "environment": {
            "SVC_PORT": "1234",
            "SVC_HOST"  : "127.0.0.1"
        },
        "extra_hosts": {
            "amqphost": "10.0.0.4",
            "mongohost": "10.0.0.4"
        },
        "ports": [
            "3456",
            "8692"
        ],
        "image" : "DOCKER_IMAGE_URI",
        "dns" : [
          "8.8.8.8",
          "127.0.0.1"
        ],
        "dns_search" : [
          "search1.example.com",
          "search2.example.com"
        ],
        "mem_limit" : "25M",
        "memswap_limit": "128k",
        "cpu_shares" : 43

    },
    "service2": {
        "environment": {
            "SVC_PORT": "1234",
            "SVC_HOST": "127.0.0.1"
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
   -SVC_PORT:1234
   -SVC_HOST:127.0.0.1
  extra_hosts:
   -amqphost:10.0.0.4
   -mongohost:10.0.0.4
  ports:
   -3456
   -8692
  image: DOCKER_IMAGE_URI
  dns:
   -8.8.8.8
   -127.0.0.1
  dns_search:
   -search1.example.com
   -search2.example.com
  mem_limit: 25M
  memswap_limit: 128k
  cpu_shares: 43
service2:
  environment:
   -SVC_PORT:1234
   -SVC_HOST:127.0.0.1
  extra_hosts:
   -amqphost:10.0.0.4
   -mongohost:10.0.0.4
  ports:
   -3456
   -8692
```


