# Signup
`POST /api/v1/auth/signup/`

Example request
  ```
{
	"email": "owner-@email.com",
	"password": "R#22Uerd",
	"firstName": "name",
	"lastName": "name",
	"role": "owner"
}
  ```

Example response
  ```
{
    "user": {
        "farms": [],
        "role": "owner",
        "_id": "5ecefad2c0629f3a1840e875",
        "email": "owner-@email.com",
        "password": "$2b$10$GJj5bbF8EX1yv3aoMQoOrevr9EAv78FrM6CHmolMYUB2FL8qRZN.W",
        "firstName": "name",
        "lastName": "name",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWVjZWZhZDJjMDYyOWYzYTE4NDBlODc1IiwiaWF0IjoxNTkwNjIyOTMwLCJleHAiOjE1OTA3MDkzMzB9.QnIp9ppdcpAzYweNvc96tS8ppeuf6eQmuKXjnQZfc4w"
    },
    "message": "Signed up successfully"
}
  ```


# Login 
`POST /api/v1/auth/login/`

Example request
  ```
{
	"email": "owner-@email.com",
	"password": "R#22Uerd"
}
  ```

Example response
  ```
{
    "user": {
        "farms": [],
        "role": "owner",
        "_id": "5ecefad2c0629f3a1840e875",
        "email": "owner-@email.com",
        "password": "$2b$10$GJj5bbF8EX1yv3aoMQoOrevr9EAv78FrM6CHmolMYUB2FL8qRZN.W",
        "firstName": "name",
        "lastName": "name",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWVjZWZhZDJjMDYyOWYzYTE4NDBlODc1IiwiaWF0IjoxNTkwNjQ3NzAwLCJleHAiOjE1OTA3MzQxMDB9.m6us-oFJHwMbqJy4G5-oWShnvxgVoi7TGsFuQeSGzr8"
    },
    "message": "logged in successfully"
}
  ```


<!-- 
# Reset Password 
`POST /api/v1/auth/password-reset`

Example request
  ```
{
	"email": "owner@email.com"
}
  ```

Example response
  ```
{
    "user": {
        "farms": [],
        "role": "owner",
        "_id": "5ecd5fba85de451fe866e8c5",
        "email": "owner@email.com",
        "password": "$2b$10$nrZ13dO6KjjP5ZZa6Zq2JewakXb0JoneeeOMgQnU.ZKhUFXI7oeve",
        "firstName": "test",
        "lastName": "test",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWVjZDVmYmE4NWRlNDUxZmU4NjZlOGM1IiwiaWF0IjoxNTkwNTE3NzEyLCJleHAiOjE1OTA2MDQxMTJ9.E_1xq5pqfV-15jS3VTBHmZDPHxPe2FJNot2oz3JPmx0"
    },
    "message": "logged in successfully"
}
  ```
 -->

<!-- 
# Update Password 
`PATCH /api/v1/auth/password`

Example request
  ```
{
	"email": "owner@email.com",
	"password": "testpassword"
}
  ```

Example response
  ```
{
    "user": {
        "farms": [],
        "role": "owner",
        "_id": "5ecd5fba85de451fe866e8c5",
        "email": "owner@email.com",
        "password": "$2b$10$nrZ13dO6KjjP5ZZa6Zq2JewakXb0JoneeeOMgQnU.ZKhUFXI7oeve",
        "firstName": "test",
        "lastName": "test",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWVjZDVmYmE4NWRlNDUxZmU4NjZlOGM1IiwiaWF0IjoxNTkwNTE3NzEyLCJleHAiOjE1OTA2MDQxMTJ9.E_1xq5pqfV-15jS3VTBHmZDPHxPe2FJNot2oz3JPmx0"
    },
    "message": "logged in successfully"
}
  ```

 -->
