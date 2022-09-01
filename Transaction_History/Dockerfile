FROM openjdk:11
ADD ./target/Transaction_History-0.0.1-SNAPSHOT.jar /usr/src/transaction_history-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "Transaction_History-0.0.1-SNAPSHOT.jar"]
