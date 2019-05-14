[![CircleCI](https://circleci.com/gh/Criedes/SOA2019_Group6.svg?style=svg)](https://circleci.com/gh/Criedes/SOA2019_Group6)
# SOA_Group6
### Technology ที่ใช้ในระบบ
- React.js
- NodeJS
- MongoDB

### Official Website
- [```Payang```](https://payangonline.me/)

### Deploy API
- ```https://payangonline.me/{endpoint}```


### Prometheus
- [```http://35.240.250.162:9090```](http://35.240.250.162:9090)


### Eureka(Service Register)
- [```http://35.240.250.162:8761```](http://35.240.250.162:8761)

### Grafana
- [```http://35.240.250.162:3006```](http://35.240.250.162:3006)

# How to run API

### Require Software
1. Node and npm
2. MongoDB

### Set up Environment
1. git clone https://github.com/Criedes/SOA2019_Group6.git
2. cd SOA2019_Group6
3. cd api

### Change to Each API Directory
1. use command. `cd SERVICE_NAME`
2. use command `set NODE_ENV=test`

### Install node module
use command. `npm install`

### Start server to run a service
use command. `npm start`

# API
- [API Gateway](https://payangonline.me/api)

- [Customer Service](https://github.com/Criedes/SOA2019_Group6/tree/master/api/customer)

| Event                     | Description                                   | 
|---------------------------|---------------------------------------------|
|GET  `/api/customers/:id` |  Get information of customer by ID. | 
|POST `/api/customers/register` | Post request body to save in database. | 

-  [Authentication Service](https://github.com/Criedes/SOA2019_Group6/tree/master/api/auth)
   
| Event                     | Description                                   | 
|---------------------------|---------------------------------------------|
|POST `/api/auth/customer` |  Authentication customer in auth service by username and password. | 
|POST `/api/auth/mechanic` |  Authentication mechanic in auth service by username and password. | 


- [Mechanic Service](https://github.com/Criedes/SOA2019_Group6/tree/master/api/mechanics)

| Event                     | Description                                   | 
|---------------------------|---------------------------------------------|
|GET  `/api/mechanics/find` | get information of all mechanics. | 
|GET  `/api/mechanics/find/:id` | get information of mechanic by ID. | 
|GET  `/api/mechanics/search` | get information of mechanic by input data. | 
|POST `/api/mechanics/register` | post register new mechanic by request body.|


# RUN: UI TESTING
```
cd /UITest
```
run with
```
robot PayangOnline-UITesting.robot
```

