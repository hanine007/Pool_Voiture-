
![Node.js](https://img.shields.io/badge/Node.js-18.0-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-yellow)
![CORS](https://img.shields.io/badge/CORS-Security-yellow)
![Morgan](https://img.shields.io/badge/Morgan-Logging-orange)
![Body-Parser](https://img.shields.io/badge/Body--Parser-Middleware-lightgrey)
![Thunder Client](https://img.shields.io/badge/Thunder%20Client-API%20Testing-orange)
![Express Validator](https://img.shields.io/badge/Express%20Validator-Validation-green)
![JWT](https://img.shields.io/badge/JWT-Authentication-yellowgreen)
![Bcrypt](https://img.shields.io/badge/Bcrypt-Password%20Hashing-yellow)



## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
 - [Jwt] (#jwt)
- [Database](#database)
- [Description API](#description-api)
- [License](#license)


## Introduction
 Carpooling application that allows users to create accounts, add cars, suggest journeys and reserve seats. 


## Technologies Used

List of technologies and tools used in the project:

- Node.js
- Express.js
- CORS
- Morgan
- JWT
- Bcrypt
- Prisma
- Express validator



## Setup

### Prerequisites

- Node.js installed
- Database (Postgres ) installed and running

### Installation

1. Clone the repository:

   ```bash
   $ git clone 
   $ cd your-project
   ```

2. Install dependencies:

   ```bash
   $ npm install
   ```
## Usage
1. Start the Servers
```bash
$ npm run start
```





## Database

Create an .env file and configure the environment variables to connect to your PostgreSQL database.

```bash
$ DATABASE_URL=postgresql://username:password@localhost:5432/carpooldb
```
## Jwt
Create a secret key for JWT authentication in the .env file.
## Description API
#### 1. Creat a user 
- **URL** : `/user`
- **Méthode** : `POST`
- **Description** : Create new users with username, password and user type.
- Connect users with username and password verification.
- Generation of JWT tokens for secure authentication.

- **Request Body** :
  ```json
  {
    "username": "nom_utilisateur",
    "password": "mot_de_passe",
    "type": "type_utilisateur"
  }
- **Response Success**:
 ```json
  {
    {
  "token": "",
  "data": {
    "id": "6df1859c-4b6a-4f12-8e9e-61cf9db8b10f",
    "createdAt": "2024-11-05T08:55:07.402Z",
    "username": "hanineza",
    "password": "$2b$10$JWowpeyYA9L9iaKjlVEmN.SF5ya2sPtdHW2lcUCLWedUXfpg5ystG",
    "type": " DRIVER"
  }
}
  }


## License
This project is licensed under the MIT License - see the LICENSE.md file for details




