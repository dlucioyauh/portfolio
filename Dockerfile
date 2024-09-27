# Use a imagem base do OpenJDK
FROM openjdk:17-jdk-slim

# Instale o Maven
RUN apt-get update && \
    apt-get install -y maven && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Define o diretório de trabalho
WORKDIR /app

EXPOSE 8080

# Copia o JAR do aplicativo para o contêiner
COPY target/portfolio-0.0.1-SNAPSHOT.jar app.jar

# Comando para executar o aplicativo
CMD ["java", "-jar", "app.jar"]
