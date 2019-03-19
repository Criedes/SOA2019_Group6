
const request = require('supertest')
const server = require('../../../app')

describe('/api/mechanics',()=>{
    beforeAll(async ()=>{
        console.log('change port to 3001 to test')
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
            const res = await request(server).get('/api/mechanics/find/5c9001f5cf9f9075a756e419')
            expect(res.status).toBe(200)
        })
    })

    describe('GET /find/garage/:garagename', ()=>{
        it('should return mechanic information by garage name', async ()=>{
            const res = await request(server).get('/api/mechanics/find/garage/Koon%20Shop')
            expect(res.status).toBe(200)
        })
    })

    describe('PUT /updatestatus/:id', ()=>{
        it('should update status of mechanic', async ()=>{
            const res = await request(server).put('/api/mechanics/updatestatus/5c9001f5cf9f9075a756e419')
            expect(res.status).toBe(200)
        })
    })

    describe('PUT /updatecounter/:id', ()=>{
        it('should update a number of customer s mechanic by id', async ()=>{
            const res = await request(server).put('/api/mechanics/updatecounter/5c9001f5cf9f9075a756e419')
            expect(res.status).toBe(200)
        })
    })
})