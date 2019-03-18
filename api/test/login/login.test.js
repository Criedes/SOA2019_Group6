const request = require('supertest');
const server = require('../../server');

beforeAll(async () => {
    console.log('Start testing with Jest');
});

afterAll(() => {
    server.close;
    console.log('Server closed');
});

/**
 * Testing POST Method
 */
describe('POST with correct email and password', () => {

    let case1 = {
        "email": "test@email.com",
        "password": "testpassword"
    }


    // Testing with correct  email and password
    it('should respond with 200 for correct email and password', () => {
        request(server).post('/api/login').send(case1).set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
                const result = res.body;
                expect(result.password).toBe(true);
            })
            .catch(err => console.log(err));
    });
});