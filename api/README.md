# How to run API
### Set up Environment
1. git clone https://github.com/Criedes/SOA2019_Group6.git
2. cd SOA2019_Group6
3. cd `api`
4. cd `API_Name`

### Install node module
use command. `npm install`

### Start server to run a service
use command. `npm start`

# Test Endpoint
1. make sure your computer be installed mongoDB and MongoShell started already.
2. cd to directory 'api'
3. set NODE_ENV=test
4. run test by this command ```npm test```

# API

- [Customer Service](https://github.com/Criedes/SOA2019_Group6/tree/master/api/customer)

| Event                     | Description                                 | 
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

