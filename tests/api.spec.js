const request = require('supertest')
const app = require('../app')
jest.setTimeout(15000); // 1 second
var isValidOrg = function(res) {
    res.body.should.have.property("id", "name", "createdAt", "updatedAtd", "teslagi");
  };
  
describe('GET /', () => {
  test("Return status: 200 and a hello world message", done => {
    request(app).get('/users').then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty('data')
        expect(res.body).toEqual(
            expect.objectContaining({
              data: expect.arrayContaining([
                  expect.objectContaining({
                      id: expect.any(Number),
                      name: expect.any(String)
                  })
              ])
            }),
          );
      done()
    })
  })
})

describe('GET /', () => {
  test("Return status: 200 and a hello world message", done => {
    request(app).get('/userss').then(res => {
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty('data')
        expect(res.body).toEqual(
            expect.objectContaining({
              data: expect.arrayContaining([
                  expect.objectContaining({
                      id: expect.any(Number),
                      name: expect.any(String)
                  })
              ])
            }),
          );
      done()
    })
  })
})


