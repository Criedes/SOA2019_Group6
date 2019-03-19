
const request = require('supertest')
const app = require('../../../app')

let server;

describe('/api/mechanics',()=>{
    beforeAll(()=>{server = app.listen(3001, ()=>{
        console.log('test listening on port 3001!')
    });})
    afterAll(()=>{
        server.close();
        console.log('test complete & server.close')
    })
    
    describe('GET /find', ()=>{
        it('should return all mechanics', async ()=>{
            const res = await request(server).get('/api/mechanics/find')
            console.log(res.status)
            expect(res.status).toBe(200)
        })
    })
})