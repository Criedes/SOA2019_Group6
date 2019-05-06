
const request = require('supertest')
const server = require('../../../app')

describe('/api/customers', () => {
    beforeAll(async () => {
        console.log('change port to 3001 to test')
    })

    afterAll(() => {
        server.close();
        console.log('test complete & server.close')
    })

    describe('GET /:id', () => {
        it('should return mechanic by id', async () => {
            const res = await request(server).get('/api/customers/5c98ba754ef2690d39ee6346')
            expect(res.status).toBe(200)
        })
    })

    describe('POST /register with correctness data', () => {
        const case1 = {
            "name": "Kittibun Sattabus",
            "username": "kitti_kit",
            "password": "test1234",
            "phone_number": "0987654321"
        }
        it('should create new document in Database', async () => {
            const res = await request(server)
                .post('/api/customers/register')
                .send(case1)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)

            expect(res.status).toBe(201)
        })
    })

    describe('POST /register with Incorrectness data', () => {
        const case2 = {
            "name": "Kittibun Sattabus",
            "username": "kitti_kit",
            "password": "test1234",
        }
        it('should create new document in Database', async () => {
            const res = await request(server)
                .post('/api/customers/register')
                .send(case2)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)

            expect(res.status).toBe(400)
        })
    })
})