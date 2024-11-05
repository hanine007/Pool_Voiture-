
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
- [Jwt](#jwt)
- [Database](#database)
- [Description API](#description-api)
- [License](#license)


## Introduction
  
Application de covoiturage permettant aux utilisateurs de créer des comptes, d'ajouter des voitures, de suggérer des trajets et de réserver des places.
. 


## Technologies Used

 
Liste des technologies et des outils utilisés dans le projet:



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
    ```bash
   $ npm install nodemon
   ```
## Usage
1. Start the Servers
```bash
$ npm run start
```





## Database

Créez un fichier .env et configurez les variables d'environnement pour vous connecter à votre base de données PostgreSQL. Selon la template choisi Local ou bien docker 
```bash
$ DATABASE_URL=postgresql://username:password@localhost:5432/carpooldb
```
```bash
$ npx prisma studio
```
Pour visualiser les different table 

## jwt
 
Créer une clé secrète pour l'authentification JWT dans le fichier .env. et sécuriser les fonctionnalite 

## Description API
### User
#### 1. Creat a user 
- **URL** : `/user`
- **Méthode** : `POST`
- **Description** : Créer de nouveaux utilisateurs avec le nom d'utilisateur, le mot de passe et le type d'utilisateur.
- Connexion des utilisateurs avec vérification du nom d'utilisateur et du mot de passe.
- Génération de jetons JWT pour une authentification sécurisée.

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
```
#### 2. Signin a user 
- **URL** : `/signin`
- **Méthode** : `POST`
- **Description** :  Connexion des utilisateurs avec leur nom d'utilisateur et leur mot de passe


- **Request Body** :
  ```json
  {
    "username": "nom_utilisateur",
    "password": "mot_de_passe",
    
  }

- **Response Success**:
 ```json
  {
    {
  "token": "",
  "message": "User Signed in"
}
  }
```
### Authentification
Toutes les routes de cette API nécessitent un en-tête d'authentification. Ajoutez le token dans l'en-tête `Authorization` sous la forme suivante :
### Car
#### 1. Touts les cars assigner vers ce user 
- **URL** : `/api/car`
- **Méthode** : `GET`
- **Description** : Récupère toutes les voitures associées à l'utilisateur connecté.
- **Réponse** (en cas de succès) :
  ```json
  {
  "data": {
    "id": "0f0cdc2d-2cf0-4988-a72e-11fe796325b7",
    "make": "Toyota",
    "model": "Toyota Prius",
    "year": 2020,
    "seats": 4,
    "ownerId": "6df1859c-4b6a-4f12-8e9e-61cf9db8b10f",
    "isActive": true
  }
  }
  ```
#### 2. Obtenir une voiture spécifique
- **URL** : /api/car/:id
- **Méthode** : GET
- **Description** : Récupère une voiture spécifique associée à l'utilisateur connecté.
- **Paramètre URL** : id - ID de la voiture
- **Réponse** (en cas de succès) :
  ```json
  {
  "data": {
    "id": "0f0cdc2d-2cf0-4988-a72e-11fe796325b7",
    "make": "Toyota",
    "model": "Toyota Prius",
    "year": 2020,
    "seats": 4,
    "ownerId": "6df1859c-4b6a-4f12-8e9e-61cf9db8b10f",
    "isActive": true
  }
   }
```json
 ```
 #### 3.  Créer une voiture 
- **URL** : `/api/car`
- **Méthode** : `POST`
- **Description** : Permet à l'utilisateur connecté de créer une nouvelle voiture.

- **Request Body** :
  ```json
  {
     "model": "Toyota Prius",
  "make": "Toyota",
  "year": 2020,
  "seats": 4,
  "isActive": true
  }

- **Response Success**:
 ```json
  {
    {
  "data": {
    "id": "43c437e0-a699-40e4-a7db-bd6f2e9f9f10",
    "make": "Toyoooooota",
    "model": "Toyota Prius",
    "year": 2020,
    "seats": 4,
    "ownerId": "6df1859c-4b6a-4f12-8e9e-61cf9db8b10f",
    "isActive": true
  }
}
  }
```

 #### 4.  Mettre a jour une voiture 
- **URL** : `/api/car/id`
- **Méthode** : `PUT`
- **Description** : Permet à l'utilisateur connecté de mettre a jour  une  voiture.
- **Paramètre URL** : id - ID de la voiture
- **Request Body** :
  ```json
  {
     "model": "Toyota Prius",
  "make": "Toyota",
  "year": 2021,
  "seats": 5,
  "isActive": false
  }

- **Response Success**:
 ```json
  {
    {
  "data": {
    "id": "43c437e0-a699-40e4-a7db-bd6f2e9f9f10",
    "make": "Toyoooooota",
    "model": "Toyota Prius",
    "year": 2020,
    "seats": 5,
    "ownerId": "6df1859c-4b6a-4f12-8e9e-61cf9db8b10f",
    "isActive": true
  }
}
  }
```


 #### 5.   Supprimer une voiture 
- **URL** : `/api/car/id`
- **Méthode** : `DELETE`
- **Description** : Permet à l'utilisateur connecté de supprimer   une  voiture.
- **Paramètre URL** : id - ID de la voiture


- **Response Success**:
 ```json
  {
    {
  "data": {
    "id": "43c437e0-a699-40e4-a7db-bd6f2e9f9f10",
    "make": "Toyoooooota",
    "model": "Toyota Prius",
    "year": 2020,
    "seats": 5,
    "ownerId": "6df1859c-4b6a-4f12-8e9e-61cf9db8b10f",
    "isActive": true
  }
}
  }
```

### Trajets

#### 1. Créer un trajet
- **URL** : `/api/ride`
- **Méthode** : `POST`
- **Description** : Permet à un utilisateur connecté de créer un nouveau trajet en spécifiant les détails du trajet et la voiture associée.
- **Corps de la requête** :
  ```json
  {
    "origin": "Point de départ",
    "destination": "Point d'arrivée",
    "date": "2024-12-01",
    "carId": 1
  }
   ```
- **Response Success**:
 ```json


{
  "data": {
    "id": "33112bed-0a44-43e9-b722-cc4d6904ed30",
    "createdAt": "2024-11-05T09:33:39.025Z",
    "origin": "Point de départ",
    "destination": "Point d'arrivée",
    "date": "2024-11-10T08:00:00.000Z",
    "carId": "b2c95f2d-e9a8-43d4-a40c-673dc1c14494",
    "userId": "6df1859c-4b6a-4f12-8e9e-61cf9db8b10f"
  }
}

 ```

 
#### 2. Mettre a jour un trajet
- **URL** : `/api/ride/id`
- **Méthode** : `PUT`
- **Description** : Permet à un utilisateur connecté de mettre a jour  un  trajet en spécifiant les détails du trajet et la voiture associée.
- **Corps de la requête** :
  ```json
  {
     "origin": "Nouvel point de départ",
  "destination": "Nouvel point d'arrivée",
  "date": "2024-12-02",
  "carId": 1
  }
   ```
- **Response Success**:
 ```json


{
  "data": {
    "id": "33112bed-0a44-43e9-b722-cc4d6904ed30",
    "createdAt": "2024-11-05T09:33:39.025Z",
    "origin": " Nouvel Point de départ",
    "destination": "Nouvel Point d'arrivée",
    "date": "2024-11-10T08:00:00.000Z",
    "carId": "b2c95f2d-e9a8-43d4-a40c-673dc1c14494",
    "userId": "6df1859c-4b6a-4f12-8e9e-61cf9db8b10f"
  }
}

 ```

  



 
#### 3. Obtenir tous  les trajet
- **URL** : `/api/ride`
- **Méthode** : `GET`
- **Description** : Récupère tous les trajets disponibles, y compris les informations sur la voiture, l'utilisateur et les réservations associées .

- **Response Success**:
 ```json

{
  "data": [
    {
      "id": 1,
      "origin": "Point de départ",
      "destination": "Point d'arrivée",
      "date": "2024-12-01",
      "time": "14:00",
      "carId": 1,
      "userId": 1,
      "car": { /* Détails de la voiture */ },
      "user": { /* Détails de l'utilisateur */ },
      "bookings": [ /* Liste des réservations associées */ ]
    },
    
  ]
}


 ```
### Réservation

#### Créer une réservation
- **URL** : `/api/bookings`
- **Méthode** : `POST`
- **Description** : Permet à un utilisateur de réserver une place pour un trajet spécifique. La réservation est acceptée si des places sont disponibles et que la voiture associée n'est pas active.
- **Corps de la requête** :
  ```json
  {
    "rideId": 1
  }
  ```
-  **Explication**rideId : ID du trajet à réserver.
- Vérifie si le trajet existe et s'il est associé à une voiture.
- Vérifie que la voiture associée n'est pas active (condition requise pour accepter la réservation).
- Compte le nombre de réservations existantes pour le trajet.
- Si des places sont disponibles :
La réservation est acceptée et l'état ACCEPTED est attribué.
- Si le trajet est complet :
La réservation est placée en attente avec l'état PENDING

- **Response Success**:
  
```json
{
  "status": "ACCEPTED",
  "booking": {
    "id": "4a240a77-4da8-44d2-bad3-46cbc003eb15",
    "createdAt": "2024-11-05T09:47:21.130Z",
    "userId": "6df1859c-4b6a-4f12-8e9e-61cf9db8b10f",
    "rideId": "33112bed-0a44-43e9-b722-cc4d6904ed30",
    "status": "ACCEPTED"
  }
}
```
- **Response PENDING**:
```json
{
  "status": "PENDING",
  "booking": {
    "id": "ded31a16-b043-409e-a69d-cdf5c22ddda0",
    "createdAt": "2024-11-05T09:48:32.766Z",
    "userId": "6df1859c-4b6a-4f12-8e9e-61cf9db8b10f",
    "rideId": "0c934466-c192-4f8d-a1fc-0ebf8aaf4d23",
    "status": "PENDING"
  }
}
```
- **Response Rejected**:
```json
{
  "status": "REJECTED",
  "message": "La voiture est active"
}
```
