# My Developer API Documentation
## Introduction
Welcome to the My Developer API documentation. This API provides CRUD operations for managing api' information.

## Base URL
`https://hng-task2-vc39.onrender.com `


## Endpoints
1. ### Create Developer
Request
#### HTTP Method: POST
#### Endpoint: /api
#### Request Format:

```
{
  "name": "John Doe"
}
```

Response
#### HTTP Status Code: 201 Created
#### Response Format:

```
{
  "message": "Developer created successfully",
  "response": {
    "id": 1,
    "name": "John Doe"
  }
}

```

2. ### Get Developer
Request
#### HTTP Method: GET
#### Endpoint: /api?id={developer_id} or /api?firstname={developer_firstname}
#### Request Format: Include either the "id" or "firstname" query parameter.
Response
#### HTTP Status Code: 200 OK
#### Response Format:

```
{
  "message": "Developer retrieved successfully",
  "developer": {
    "id": 1,
    "name": "John Doe"
  }
}
```

3. ### Update Developer
Request
#### HTTP Method: PUT
#### Endpoint: /api?id={developer_id}
#### Request Format:

```
{
  "firstname": "Jane",
  "lastname": "Doe"
}
```

Response
#### HTTP Status Code: 200 OK
#### Response Format:

```
{
  "id": 1,
  "firstname": "Jane",
  "lastname": "Doe"
}
```

4. ### Delete Developer
Request
#### HTTP Method: DELETE
#### Endpoint: /api?id={developer_id}
#### Request Format: Include the "id" query parameter.
Response
#### HTTP Status Code: 200 OK
#### Response Format:

```
{
  "message": "Developer deleted successfully"
}
```

## Sample Usage
### Create Developer

`curl -X POST https://hng-task2-vc39.onrender.com/api -d '{"name": "John Doe"}'`

### Get Developer

<!-- Retrieve developer by ID -->
`curl -X GET https://hng-task2-vc39.onrender.com/api?query=1`

<!--  Retrieve developer by first name -->
`curl -X GET https://hng-task2-vc39.onrender.com/api?query=John`

### Update Developer
`curl -X PUT https://hng-task2-vc39.onrender.com/api?id=1 -d '{"firstname": "Jane", "lastname": "Doe"}'`

### Delete Developer
`curl -X PUT https://hng-task2-vc39.onrender.com/api?id=1 -d '{"firstname": "Jane", "lastname": "Doe"}'`

### Known Limitations and Assumptions
The API assumes that the "name" field for creating a developer contains only letters and whitespaces.



## Setup and Deployment
To set up and deploy this API locally or on a server, follow these steps:

Clone the repository from GitHub.

Install Node.js and npm if not already installed.

Navigate to the project directory and run the following command to install dependencies:

`npm install`

Set up a database connection in the knex-db/knex.js file.
Run the following command to migrate the database:

`npm run knex migrate:latest`

Start the API server with the following command:
npm start

The API will be accessible at http://localhost:3000 by default.

This documentation outlines the usage, endpoints, and setup instructions for the My Developer API. If you have any questions or need further assistance, please contact our support team at fredrickraymnd2004@gmail.com.

## UML DIAGRAM

![UML Diagram](./UML.png)