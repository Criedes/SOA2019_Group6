# How to run Auth Service
### Run
1.  git clone https://github.com/Criedes/SOA2019_Group6.git
2.	cd SOA2019_Group6
3.	cd to directory ```api```
4.	cd to directory ```auth```
5.  set NODE_ENV=production
6.	run test by this command ```npm start	```

### Test
1.	set NODE_ENV=test
2.  run test by this command ```npm test```

### Endpoints
1. Authentication customer in auth service by username and password.

    ```POST  /api/auth/customer```
  
        {
  
           "username": "kitti01",
           "password": " SecurePassword "
    
        }
  
      Return 200 Success  login with correct data.\
 	    Return 400 Unsuccess because incorrect data.
  
2. Authentication mechanic in auth service by username and password.


    ```POST  /api/auth/mechanic```
  
        {
  
           "username": "kitti01",
           "password": " SecurePassword "
    
        }
        
    Return 200 Success  login with correct data.\
 	  Return 400 Unsuccess because incorrect data.







