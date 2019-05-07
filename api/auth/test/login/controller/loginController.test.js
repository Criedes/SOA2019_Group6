const request = require('supertest')
const server = require('../../../app')

describe('/api/login', () => {
    beforeAll(() => {
        console.log('test listening on port 3001!');
    })
    afterAll(() => {
        server.close();
        console.log('test complete & server.close')
    })
    describe('POST with correctness email and password', () => {
        let case1 = {
            "email": "test@email.com",
            "password": "testpassword"
        }
        it('should res 200', async () => {
            const res = await request(server).post('/api/login').send(case1).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200).
                then((res) => {
                })
                .catch(err => console.log(err));
        })
    })
    describe('POST with correctness email and incorrectness password', () => {
        let case2 = {
            "email": "test@email.com",
            "password": "testpass333word"
        }
        it('should res 400', async () => {
            const res = await request(server).post('/api/login').send(case2).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400).
                then((res) => {
                })
                .catch(err => console.log(err));
        })
    })
    describe('POST with incorrectness email and incorrectness password', () => {
        let case3 = {
            "email": "tes222t@email.com",
            "password": "testpass333word"
        }
        it('should res 400', async () => {
            const res = await request(server).post('/api/login').send(case3).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400).
                then((res) => {
                })
                .catch(err => console.log(err));
        })
    })
})