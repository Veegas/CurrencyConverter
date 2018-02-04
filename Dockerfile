from openjdk:8-jre-slim-stretch

ADD ./target /opt/currencyConverter


WORKDIR /opt/currencyConverter

ENTRYPOINT ["/bin/sh", "-c", "java -jar currencyConverter-0.0.1-SNAPSHOT.jar"]
