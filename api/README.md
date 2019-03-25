# How to run Service
### Set Up MongoDB
1. make sure your computer be installed mongoDB and MongoShell started already.
 2. import mockup database use this command.
 
 `mongoimport --db payang --collection mechanics --file mechanics.json`

### Install node module
use command. `npm install`

### Start server to run a service
use command. `npm start`

# Mechanic Endpoint

| Event                     | Description                                   | 
|---------------------------|---------------------------------------------|
| `/api/mechanics/find` | get information of all mechanics. | 
| `/api/mechanics/find/:id` | get information of mechanic by ID. | 
| `/api/mechanics/find/garage/:shopname` | get information of mechanic by Garage name ( shop name ). | 
| `/api/mechanics/updatestatus/:id` | update status of mechanic by ID. | 
| `/api/mechanics/updatecounter/:id` | increate a number of customer of mechanic by ID.|
| `/api/mechanics/register` | register new mechanic by request body.|

# Login Endpoint

| Event                     | Description                                   | 
|---------------------------|---------------------------------------------|
| `/api/login` |  post request body to compile with hash password for login. | 

# Customer Endpoint

| Event                     | Description                                   | 
|---------------------------|---------------------------------------------|
| `/api/customer/:id` |  get information of customer by ID.|
| `/api/customer/register` |  post request body to save in Database.| 

# Test Endpoint
1. make sure your computer be installed mongoDB and MongoShell started already.
2. cd to directory 'api'
3. run test by this command `npm test`
