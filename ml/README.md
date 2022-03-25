# ML micro-service
 
This service is written in pure Python and dockerized for convinience.

Guidlines for running this service:
* Download [Docker](https://docs.docker.com/engine/install/ubuntu/) and [Docker-compose](https://docs.docker.com/compose/install/)
* Open the command line and run docker-compose from the **ml** directory: `docker-compose up --build`
* Wait for packages to be downloaded
* Voila! Now you can access the ml part of out monorepo

Swagger-like doc is included into Fast-Api, but here it is tl;dr.

(POST) In order to add a person, send a json in form `{"id":user_id, "good":List[str: subjects], "bad":List[str: subjects]}`. Example: `{"id":1, "good":["математика", "английский"], "bad":["физика", "история"]}` to http://0.0.0.0:8008/add . This address is important, please, do not use it for other purposes.

(GET) In order to request similar users, send user_id and the numbe of needed "similarites" in the following format `/find/{user_id}/{k}` to http://0.0.0.0:8008. Example: `http://0.0.0.0:8008/find/1/1`.

I hope it is easy to follow, good luck!

PS I was using the Natasha project for feature-extraction, so it can only accept the Russian language, please, do not apply it to Enlgish words. And, yes, it does not like misspelling, so be careful.