const request = require('supertest')
const server = require('../../../app')

describe('/api/auth', () => {
    beforeAll(() => {
        console.log('test listening on port 3001!');
    })
    afterAll(() => {
        server.close();
        console.log('test complete & server.close')
    })
    describe('POST with correctness username and password', () => {
        let case1 = {
            "username": "kitti01",
            "password": "kitti01"
        }
        it('should res 201', async () => {
            const res = await request(server).post('/api/auth/customer').send(case1).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201).
                then((res) => {
                })
                .catch(err => console.log(err));
        })
    })
    describe('POST with correctness username and incorrectness password', () => {
        let case2 = {
            "username": "kitti01",
            "password": "kitti02"
        }
        it('should res 400', async () => {
            const res = await request(server).post('/api/auth/customer').send(case2).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400).
                then((res) => {
                })
                .catch(err => console.log(err));
        })
    })
    describe('POST with incorrectness username and incorrectness password', () => {
        let case2 = {
            "username": "kitti02",
            "password": "kitti02"
        }
        it('should res 400', async () => {
            const res = await request(server).post('/api/auth/customer').send(case2).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400).
                then((res) => {
                })
                .catch(err => console.log(err));
        })
    })
    describe('POST with correctness username and correctness password', () => {
        let case3 = {
            "username": "nawin01",
            "password": "nawin01"
        }
        it('should res 201', async () => {
            const res = await request(server).post('/api/auth/mechanic').send(case3).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201).
                then((res) => {
                })
                .catch(err => console.log(err));
        })
    })
        describe('POST with correctness username and incorrectness password', () => {
        let case2 = {
            "username": "nawin01",
            "password": "kitti02"
        }
        it('should res 400', async () => {
            const res = await request(server).post('/api/auth/mechanic').send(case2).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400).
                then((res) => {
                })
                .catch(err => console.log(err));
        })
    })
    describe('POST with incorrectness username and incorrectness password', () => {
        let case2 = {
            "username": "kitti02",
            "password": "kitti02"
        }
        it('should res 400', async () => {
            const res = await request(server).post('/api/auth/mechanic').send(case2).set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(400).
                then((res) => {
                })
                .catch(err => console.log(err));
        })
    })
})