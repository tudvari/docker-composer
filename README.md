# docker-composer

Generate Docker Compose descriptor from a JSON document.

[![Build Status](https://travis-ci.org/tudvari/docker-composer.svg?branch=master)](https://travis-ci.org/tudvari/docker-composer)

## About the package

The reason behind this package is support the Docker Compose descriptor generation from Javascript. You are able to use all Docker Compose keyword to describe your containers and services.


Docker Compose Reference is [HERE](https://docs.docker.com/compose/compose-file/).

###  Changes of the Latest Release

#### Version 3.1.0 ( TBD )
- Introduce JSON schema for input validation
- Version 3 Compose file format support

You can find all Release Notes [HERE](https://github.com/tudvari/docker-composer/blob/master/ReleaseNotes.md).

## Usage

```javascript

  const composer = require('docker-composer')
    .
  var generatedYML = composer.generate( inputJSON )
```

## Full Example

### Input

```json
{
"version" : "3",
"services" :
    {
        "nginx" : {
            "ports" : [
                "80"
                        ],
            "image" : "nginx:latest"
        },
        "http" : {
            "ports" : [
                "443"
            ],
            "image" : "apache:latest"
        }
    }
}
```
### Result
```yml
---
  version: "3"
  services:
    nginx:
      ports:
      - "80"
      image: "nginx:latest"
    http:
      ports:
      - "443"
      image: "nginx:latest"
```


