[![CircleCI](https://circleci.com/gh/Criedes/SOA2019_Group6.svg?style=svg)](https://circleci.com/gh/Criedes/SOA2019_Group6)
# SOA_Group6
### Technology ที่ใช้ในระบบ
- React.js
- NodeJS
- MongoDB

### Deploy API
```http://35.231.183.143:3000/{endpoint}```

# How to run API

### Require Software
1. Node and npm
2. MongoDB

### Set up Environment
1. git clone https://github.com/Criedes/SOA2019_Group6.git
2. cd SOA2019_Group6
3. cd api

### Set Up MongoDB
1. make sure your computer be installed mongoDB and MongoShell started already.
 2. import mockup database use this command.
 
 `mongoimport --db payang --collection mechanics --file mechanics.json`
 
 `mongoimport --db payang --collection customers --file customers.json`

### Install node module
use command. `npm install`

### Start server to run a service
use command. `npm start`

# API

- [Customer Service](https://github.com/Criedes/SOA2019_Group6/tree/master/api/customer)

| Event                     | Description                                   | 
|---------------------------|---------------------------------------------|
|GET  `/api/customers/:id` |  Get information of customer by ID. | 
|POST `/api/customers/register` | Post request body to save in database. | 

-  [Auth Service](https://github.com/Criedes/SOA2019_Group6/tree/master/api/auth)
   
| Event                     | Description                                   | 
|---------------------------|---------------------------------------------|
|POST `/api/auth/customer` |  Authentication customer in auth service by username and password. | 
|POST `/api/auth/mechanic` |  Authentication mechanic in auth service by username and password. | 


- [Mechanic Service](https://github.com/Criedes/SOA2019_Group6/tree/master/api/mechanic)

| Event                     | Description                                   | 
|---------------------------|---------------------------------------------|
|GET  `/api/mechanics/find` | get information of all mechanics. | 
|GET  `/api/mechanics/find/:id` | get information of mechanic by ID. | 
|GET  `/api/mechanics/find/garage/:shopname` | get information of mechanic by Garage name ( shop name ). | 
|POST `/api/mechanics/register` | post register new mechanic by request body.|

