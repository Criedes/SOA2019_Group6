# How to run Mechanic Service
### Run
1.  git clone https://github.com/Criedes/SOA2019_Group6.git
2.	cd SOA2019_Group6
3.	cd to directory ```api```
4.	cd to directory ```mechanics```
5.	run test by this command ```npm start	```

### Test
1.	set NODE_ENV=test
2.  run test by this command ```npm test```

### Endpoints
1. get information of all mechanics.

    ```GET /api/mechanics/find```

      Return ```200 Success``` Search and show all mechanic.
      
***
      
2. get information of mechanic by ID.

    ```GET /api/mechanics/find/:id```
    
      Return ```200 Success``` Search and show mechanic follow by ID. 
      
***

3. get information of mechanic by Garage name ( shop name ).

    ```GET /api/mechanics/search``` 
    
      Return ```200 Success``` Search and show mechanic by input data.

***
  
4. register new mechanic by request body


    ```POST /api/mechanics/register```
  
        {
  
             “username”: “ZeroCar”,
              “password”:  “SecurePassword”,
              “garagename”: “ZeroCar” ,
              “machanic_name”: “Jira Pundee”,
              “coordinate”: {
 	                “lat”: 13.733555,
       	          “lng”: 100.4712464
                  },
              “number_of_customer”: 1,
              “address”: "Khaosan Road, Bangkok",
              “contact”: “0850325686”,
              “status”: false ,
              “price”: {
                  “patch_rubber”: 60,
                  “change_rubber”: 150
                  },
              "role": “mechanic”,
              “imgUrl”: “https://www.pinterest.de/pin/746753181937262541/”
        }
        
        
     Return ```200 Success```  member registered with correct data and compleate.
     
 	 Return ```400 Error``` member not registered because incorrect data and non-compleate.
***






