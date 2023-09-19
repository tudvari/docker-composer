# docker-composer

Generate Docker Compose descriptor from a JSON document.

![Node.js CI](https://github.com/tudvari/docker-composer/workflows/Node.js%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/docker-composer.svg)](https://badge.fury.io/js/docker-composer)
[![CodeQL](https://github.com/tudvari/docker-composer/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/tudvari/docker-composer/actions/workflows/codeql-analysis.yml)
## About the package

The reason behind this package is support the Docker Compose descriptor generation from Javascript. You are able to use all Docker Compose keyword to describe your containers and services.


Docker Compose Reference is [HERE](https://docs.docker.com/compose/compose-file/).

###  Changes of the Latest Release

## Version 5.0.1 (19.09.2023)
- Update dependencies

You can find all Release Notes [HERE](https://github.com/tudvari/docker-composer/blob/master/ReleaseNotes.md).

## Usage

```javascript

  const composer = require('docker-composer');
    .
  const generatedYML = composer.generate(inputJSON);
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

### License

Copyright (c) 2015 Tibor Udvari. Released under the MIT license. See [LICENSE](https://github.com/tudvari/docker-composer/blob/master/LICENSE) for details.


