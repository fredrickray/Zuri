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