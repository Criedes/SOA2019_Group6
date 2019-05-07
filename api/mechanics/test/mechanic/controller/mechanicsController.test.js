
const request = require('supertest')
const server = require('../../../app')
const bcrypt = require('bcrypt')

describe('/api/mechanics',()=>{
    beforeAll(async ()=>{
        console.log('change port to 3000 to test')
    })
    afterAll(()=>{
        server.close();
        console.log('test complete & server.close')
    })
    describe('GET /find', ()=>{
        it('should return all mechanics', async ()=>{
            const res = await request(server).get('/api/mechanics/find')
            expect(res.status).toBe(200)
        })
    })
    describe('GET /find/:id', ()=>{
        it('should return mechanic by id', async ()=>{
            let test_Id = '5ccf1ed0c5233a001327c5d3'
            const res = await request(server).get('/api/mechanics/find/'+test_Id)
            expect(res.body[0]).toHaveProperty("username", "jameonline")
            expect(res.status).toBe(200)
        })
    })

    describe('POST /register with correctness data', ()=>{
        const case1 = {
            "coordinate": {
              "lat": "29.001993213",
              "lng": "18.09002313"
            },
            "username": "Kit KUBKKKK",
            "password": "test1234",
            "garagename": "Chang James Shop",
            "machanic_name": "Bratt Pitch",
            "price": {
              "patch_rubber": 30,
              "change_rubber": 120
            },
            "number_of_customer": 44,
            "address": "Khaosan Road, Bangkok",
            "join_date": "12/1/2019",
            "contact": "099-9999999",
            "status": false
          }    
        it('should create new document in Database', async ()=>{
            const res = await request(server)
            .post('/api/mechanics/register')
            .send(case1)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            
            expect(res.status).toBe(201)
        })        
    })
    describe('POST /register with Incorrectness data', ()=>{
        const case2 = {
            "coordinate": {
              "lat": "29.001993213",
              "lng": "18.09002313"
            },
            "username": "Kit KUBKKKK",
            "password": "test1234",
            "garagename": "Chang James Shop",
            "machanic_name": "Bratt Pitch",
            "price": {
              "patch_rubber": 30,
              "change_rubber": 120
            },
            "number_of_customer": 44,
            "address": "Khaosan Road, Bangkok",
          }    
        it('should create new document in Database', async ()=>{
            const res = await request(server)
            .post('/api/mechanics/register')
            .send(case2)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            
            expect(res.status).toBe(400)
        })        
    })
})