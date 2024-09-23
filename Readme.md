StartFragment
Roseanne Dias Rental System Documentation
Welcome to the Roseanne Dias Rental System documentation! This system features a total of 6 routes:
Register User
 POST http://localhost:3333/register
User Login
 POST http://localhost:3333/login
Create Product in Stock
 POST http://localhost:3333/stock
List Products
 GET http://localhost:3333/stock
Delete Product
 DELETE http://localhost:3333/stock/{id}
Update Product
 PATCH http://localhost:3333/stock/{id}

Headers
For unprotected routes, the following header is required:
  Content-Type: application/json
For protected routes, include the following header:
  Authorization: {token_access}




1. Register User
Endpoint:
POST http://localhost:3333/register
Required Data:
Please provide the following JSON object to register a user:


JSON








jsonCopiar
{
  "name": "Matteus",
  "cpf": "61794968385",
  "happyday": "2002-02-06",
  "tell": 981382748,
  "role": "Admin",
  "address": {
    "num": 123,
    "street": "Rua Exemplo",
    "cep": "12345-678",
    "complement": "Apto 101"
  }
}


Field Descriptions:
name: (string) The user's name.
cpf: (string) Unique identifier for the user (must be unique).
happyday: (string) User's full birth date (format: YYYY-MM-DD).
tell: (int) User's phone number (must be unique).
role: (string) User's role ("Admin" or "User").
address: (object) Includes:
num: (int) House number.
street: (string) Street name.
cep: (string) Postal code.
complement: (string, optional) Address complement.






2. User Login
Endpoint:
POST http://localhost:3333/login
Required Data:
The login credentials must be submitted as follows:


JSON








jsonCopiar
{
  "cpf": "99999999999",
  "happyday": "2002-02-06"
}


Field Descriptions:
cpf: (string) User's CPF without periods or dashes.
happyday: (string) User's birth date (format: YYYY-MM-DD).


Upon successful login, you will receive a JWT token. Keep this token secure, as it is required for authentication in protected routes.



3. Create Product in Stock (Protected Route)
Endpoint:
POST http://localhost:3333/stock
Required Data:
The request must include a JSON object with the following details:


JSON








jsonCopiar
{
  "title": "Product Title",
  "description": "Product Description",
  "size": "Product Size",
  "code": "Unique Product Code",
  "status": "Product Status"
}


Field Descriptions:
title: (string) Unique title of the product.
description: (string) Description of the product.
size: (string) Size of the product.
code: (string) Unique code for the product.
status: (string) Current status of the product.





4. List Products (Protected Route)
Endpoint:
GET http://localhost:3333/stock
Optional Filters: You can filter the product list using the following query parameters:
title: (string) Title of the product.
description: (string) Description of the product.
code: (string) Code of the product.

This request requires the following headers:
Content-Type: application/json
Authorization: token_access




5. Delete Product (Protected Route)
Endpoint:
DELETE http://localhost:3333/stock/{id}
Required Headers:
Include the following header:
Authorization: token_access

In this route, you need to specify the {id} parameter of the product you wish to delete.



6. Update Product (Protected Route)
Endpoint:
PATCH http://localhost:3333/stock/{id}
Required Data:
You must send the updated product information in the request body as follows:


JSON








jsonCopiar
{
  "title": "Updated Product Title",
  "description": "Updated Product Description",
  "size": "Updated Product Size",
  "code": "Updated Unique Product Code",
  "status": "Updated Product Status"
}


Required Headers:
Include the following header:
Authorization: token_access

Specify the {id} parameter of the product you wish to update.
EndFragment


