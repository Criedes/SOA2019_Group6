## How to run Customer Service
### Run

1.	Open CMD or Terminal
2.	git clone https://github.com/Criedes/SOA2019_Group6.git
3.	cd SOA2019_Group6
4.	cd to directory ‘ api ’
5.	cd to directory ‘ customer ’
6.	run test by this command `npm start`

### Test
1.	run test by this command npm test

## Endpoints
1.	Get information of customer by ID.
-	`Get /api/customers/:id`
  
      Return `200 SUCCESS` show all list of customer with information of user profile when given an exists user ID.
 ***

2.	Post request body to save in database.
-	`Post /api/customers/register`

        {
	        name: ‘Jutharat’
        	username: ‘Jutha60’
        	password: ‘Juju’
        	phone_number: ‘0645678900’
        	status: ‘false’
        	role: ‘customer’
        } 
      Return `201 SUCCESS` Register with correct data.\
      Return `400 UNSUCCESS` Unregister because incorrect data.
