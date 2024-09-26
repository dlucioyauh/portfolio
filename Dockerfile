# Use a imagem base do OpenJDK
FROM openjdk:17-jdk-slim

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo JAR para o contêiner
COPY target/portfolio-0.0.1-SNAPSHOT.jar app.jar
# Comando para executar o JAR
CMD ["java", "-jar", "app.jar"]
