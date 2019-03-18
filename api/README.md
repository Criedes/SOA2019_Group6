# How to use Service
### Set Up MongoDB
1. make sure your computer be installed mongoDB and MongoShell started already.
 2. import mockup database use this command.
 
 `mongoimport --db payang --collection mechanics --file mechanics.json`

### Install node module
use command. `npm install`

### Start a server
use command. `npm start`

# Mechanic Endpoint
`/api/mechanics/find` - get information of all mechanics.
`/api/mechanics/find/:id` - get information of mechanic by ID.
`/api/mechanics/find/garage/:shopname` - get information of mechanic by Garage name ( shop name ).
`/api/mechanics/updatestatus/:id'` - update status of mechanic by ID.
`/api/mechanics/updatecounter/:id` - increate a number of customer of mechanic by ID.

| Event                     | Description                                   | 
|---------------------------|---------------------------------------------|
| `/api/mechanics/find` | get information of all mechanics. | 
| `/api/mechanics/find/:id` | get information of mechanic by ID. | 
| `/api/mechanics/find/garage/:shopname` | get information of mechanic by Garage name ( shop name ). | 
| `/api/mechanics/updatestatus/:id` | update status of mechanic by ID. | 
| `/api/mechanics/updatecounter/:id` | increate a number of customer of mechanic by ID.|
