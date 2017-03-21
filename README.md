# Spring MVC | AngularJs Product #


An example project to demonstrate as a Web application for product registration using a Spring MVC / AngularJs. The frontend is based on AngularJs, with bootstrap and HTML5 and the backend is composed of JSON REST web services based on Spring MVC / JPA.

### Installation dependencies ###

The following dependencies are necessary: 

 - Java 8
 - bower
 - npm
 - nodejs
 - maven 3

### Installing frontend dependencies ###

After cloning the repository, the following command installs the Javascript dependencies:

    bower install

### Building and starting the server ###

To build the backend and start the server, run the following command on the root folder of the repository:

    mvn clean install tomcat7:run-war -Dspring.profiles.active=test

After the server starts, the application is accessible at the following URL:

    http://localhost:8080/login

To see a user with existing data, login with the following credentials:

    "username": "exemplo@exemplo.com",
    "password": "123quatro5678",

### Frontend Overview ###

The sample project is a web application with an AngularJs-based frontend and a Spring/Hibernate based backend. The application is responsive, as it adapts to different screen sizes.

On the frontend, these libraries where used (besides Angular):  [Yahoo PureCss](http://http://purecss.io/) (pure CSS baseline)  and [lodash](https://lodash.com/) for functional data manipulation. 

### Backend Overview ###

The backend is based on Java 8, Spring, JPA/ Hibernate. The Spring configuration is based on Java. The main Spring modules used where Spring MVC. The backend was built using the DDD approach, which includes a domain model, services, repositories and DTOs for frontend/backend data transfer. 

The REST web services are based on Spring MVC and JSON.

#### REST API ####

The REST API of the backend is composed:
##### User Service #####

Url           |Verb          | Description
--------------|------------- | -------------
/product         |GET          | retrieves info for the currently products 
/product| PUT| Used to save the product 
/product|POST| creates a new product

## Installation instructions

Clone this repository, install nodejs and bower and on the root of the repository run this command:

    bower install
    
Then run one of the maven commands bellow. 

### How to run the project against a PostgreSQL database ###

This command starts the application with a local postgresql database:

    mvn clean install tomcat7:run-war -Dspring.profiles.active=development
