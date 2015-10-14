# Composer
Node.js package for generating docker-compose.yml file for containers from a json.

##About the package

The main goal of this repository to create a small lightweight npm package, which generates docker-compose.yml from a json file. 

The json has a very easy ruleset, it use the docker-compose.yml reference for the available elements. This version support the followed commands from the docker-compose.yml reference:

- ports
- environment
- extra_hosts
- image


You can find and read the complete docker-compose.yml reference on the next url: [Compose Reference](https://docs.docker.com/compose/yml/)

##Rules of the json

You should use the followed rules for the json file, which is the only arguments for this package.

- ports : This element is array, example syntax: ports :

 [ 'PORT_NUMBER1','PORT_NUMBER2']
- environment : This element is a subdocument, you can describe it as the followed style:

  { "ENVIRONMENT_VARIABLE1" : "VARIABLE_VALUE"}
- extra_hosts : Same a the envorinment element: 

  { "HOST_NAME1" : "IP_ADDRESS", "HOST_NAME2" : "IP_ADDRESS"}
- image : This element is very simple: 

  REGISTRY_HOST:REGISTRY_PORT/REGISTRY_USER/IMAGE_NAME:VERSION
  
## Full Example

```json
{
  "container1": {
        "environment": {
            "HOST_PORT": "1234",
            "HOST_IP"  : "127.0.0.1"
        },
        "extra_hosts": {
            "host1": "10.0.0.4",
            "host2": "10.0.0.4"
        },
        "ports": [
            "3456",
            "8692"
        ],
        "image" : "docker.io/tudvari/docker-ubuntu-jdk:latest-jdk6"

    },
    "container2": {
        "environment": {
            "W_PORT": "1234",
            "W_IP": "127.0.0.1"
        },
        "extra_hosts": {
            "host3": "10.0.0.4",
            "host4": "10.0.0.4"
        },
        "ports": [
            "3456",
            "8692"
        ],
        "image" : "docker.io/tudvari/docker-ubuntu-jdk:latest-jdk8"
    }
}
```
  
## Future plans

I would like give much more power into this package. The final goal is, push all possibility into this package, which the docker-compose already has. Feel free to help me, in this mission. :-)


