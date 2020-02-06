>Login/Logout Api

## Register(Post)
> http://localhost:5000/api/auth/register
> Payload {"name":"Ammy", "email":"ammy@gmail.com","password":"12345678", "role":"Admin"}
> Response {
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6I"
}


## Login(POST)
> http://localhost:5000/api/auth/login
> Payload {"email":"ammy@gmail.com","password":"12345678"}
> Response {
    "auth": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}

## User(GET)
> http://localhost:5000/api/auth/users
> Response 
[
    {
        "_id": "5e3b74af0e02bb480cac7052",
        "name": "John",
        "email": "john@gmail.com",
        "password": "$2a$08$MhDCjrKdII5nA5pVkXiRe./KcvO00yzX2JfszX4YNpa.7/fU4H9uS",
        "role": "user",
        "__v": 0
    }
]

## UserInfo(Get)
> http://localhost:5000/api/auth/userinfo
> payload {"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"}
> Response 
{
    "_id": "5e3b74d30e02bb480cac7053",
    "name": "Ammy",
    "email": "ammy@gmail.com",
    "role": "Admin",
    "__v": 0
}