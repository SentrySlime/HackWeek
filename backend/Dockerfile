# Start with a base image that includes Java (e.g., OpenJDK)
FROM openjdk:17-jdk-alpine

# Maintainer information
LABEL authors="sebbe"

# Set the working directory in the container
WORKDIR /app

# Copy the Spring Boot application JAR file into the container
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot application will run on
EXPOSE 8080

# Set environment variables for PostgreSQL
ENV SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mydb
ENV SPRING_DATASOURCE_USERNAME=postgres
ENV SPRING_DATASOURCE_PASSWORD=yourpassword

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]

