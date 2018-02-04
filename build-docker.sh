#! /bin/bash
set -ex

pushd currency-converter-web-app

npm install 

set +e

hash ng 2>/dev/null

if [ $? -eq 0 ]; then
	ng build -e docker -op ../src/main/resources/static
else
	echo "Couldn't find angular-cli. Will not build UI";
fi


popd

set -e 

./mvnw package

docker build -t currency-converter .


docker run -d -p 8080:8080 currency-converter