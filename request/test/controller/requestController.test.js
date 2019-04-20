const request = require('supertest')
const server = require('../../app')

describe('/api/request', () => {
    beforeAll(async () => {
        console.log('change port to 3000 to test')
    })

    afterAll(() => {
        server.close();
        console.log('test complete & server.close')
    })

    describe('PUT /5c9001f5cf9f9075a756e419 with correctness data', () => {
        const case1 =
        {
            "request_status": true,
            "customer_name": "Rattanachat Sooksumpus",
            "customer_phone": "0987654321"
        }
        it('should return all mechanics', async () => {
            const res = await request(server).put('/api/request/5c9001f5cf9f9075a756e419')
                .send(case1)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)

                expect(res.status).toBe(201)
        })
    })

    describe('PUT /5c9001f5cf9f9075a756e419 with Incorrectness data', () => {
        const case2 =
        {
            "customer_name": "Rattanachat Sooksumpus",
            "customer_phone": "0987654321"
        }
        it('should return all mechanics', async () => {
            const res = await request(server).put('/api/request/5c9001f5cf9f9075a756e419')
                .send(case2)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)

                expect(res.status).toBe(400)
        })
    })


})