# Auth API SPEC

## Register

Endpoint ==> POST /apiv1/auth/users

Request Body :

```json
{
  "name": "anyithing",
  "email": "jtest@mail.com",
  "phone": "08989896969969",
  "password": "Alice#4542?"
}
```

Response Body Success:

```json
{
  "code": 200,
  "status": "success",
  "message": "Register success",
  "data": {
    "name": "anyithing",
    "email": "meguminkato00@gmail.com",
    "phone": "08989896969969",
    "passwordHashed": "$2b$10$3qUS8llK8okQSG3FlMxfXea1VPvuUMgnG4ha3i42V9Qtfz3j6hRPu",
    "level": 1,
    "isActive": false,
    "photo": "",
    "verifyToken": "66f48f2c0f49b0598b77f7d8b75ba4691a3ac5b93324b9fe5ea7dbfda19d856b",
    "isVerified": false
  }
}
```

Response Body Error:

```json
{
  "code": 400,
  "status": "error",
  "message": "email is already registered",
  "error": []
}
```

## Login

Endpoint ==> POST /apiv1/auth/users

Request Body :

```json
{
  "name": "anyithing",
  "email": "jtest@mail.com",
  "phone": "08989896969969",
  "password": "Alice#4542?"
}
```

Response Body Success:

```json
{
  "code": 200,
  "status": "success",
  "message": "Register success",
  "data": {
    "name": "anyithing",
    "email": "meguminkato00@gmail.com",
    "phone": "08989896969969",
    "passwordHashed": "$2b$10$3qUS8llK8okQSG3FlMxfXea1VPvuUMgnG4ha3i42V9Qtfz3j6hRPu",
    "level": 1,
    "isActive": false,
    "photo": "",
    "verifyToken": "66f48f2c0f49b0598b77f7d8b75ba4691a3ac5b93324b9fe5ea7dbfda19d856b",
    "isVerified": false
  }
}
```

Response Body Error:

```json
{
  "code": 400,
  "status": "error",
  "message": "email is already registered",
  "error": []
}
```

## Verify Email

Endpoint ==> GET /apiv1/auth/verify-email?token=yourtoken

Request Body :

```json
{
  "name": "anyithing",
  "email": "jtest@mail.com",
  "phone": "08989896969969",
  "password": "Alice#4542?"
}
```

Response Body Success:

```json
{
  "code": 200,
  "status": "success",
  "message": "Register success",
  "data": {
    "name": "anyithing",
    "email": "meguminkato00@gmail.com",
    "phone": "08989896969969",
    "passwordHashed": "$2b$10$3qUS8llK8okQSG3FlMxfXea1VPvuUMgnG4ha3i42V9Qtfz3j6hRPu",
    "level": 1,
    "isActive": false,
    "photo": "",
    "verifyToken": "66f48f2c0f49b0598b77f7d8b75ba4691a3ac5b93324b9fe5ea7dbfda19d856b",
    "isVerified": false
  }
}
```

Response Body Error:

```json
{
  "code": 400,
  "status": "error",
  "message": "email is already registered",
  "error": []
}
```
