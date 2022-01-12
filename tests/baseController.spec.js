/* eslint-disable no-undef */
const base = require('../controllers/baseController.js')
const {User} = require('../models')

const mockRequest = (body = {}) => ({ body }) 
const mockResponse = () => {
  const res = {}
//   console.log(res)
  res.json = jest.fn().mockReturnValue(res)
  res.status = jest.fn().mockReturnValue(res)
//   console.log(res.json)
  return res
}

describe('base.index function', () => {
    test('res.json called with { status: true, message: "Hello World" }', done => {
      const req = mockRequest()
      const res = mockResponse()
      base.index(req, res)
      expect(res.status).toBeCalledWith(200)
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Hello World!"
      })
      done()
    })
  })

  // describe('base.index function', () => {
  //   test('test coba', done => {
  //     const req = mockRequest()
  //     const res = mockResponse()
  //     let data = User.findAll()
  //     base.getAll(req, res)
  //     expect(res.status).toBeCalledWith(200)
  //     expect(res.json).toBeCalledWith({
  //      data : data
  //     })
  //     done()
  //   })
  // })



  // test case 1
  describe('base.sum function', () => {
  test('res.json called with { ...basicResponse, data: { x: x, y: y, result: x + y } }', done => {
    const req = mockRequest({ x: 5, y: 10 })
    const res = mockResponse()
    const expectedResult = req.body.x + req.body.y
    base.sum(req, res)
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      status: true,
      message: "Parameters summarized!",
      data: { x: req.body.x, y: req.body.y, result: req.body.x + req.body.y }
    })
    done()
  })
})


// test case 2
describe('base.sum function', () => {
    test('res.json called with { ...basicResponse, data: { x: x, y: y, result: x + y } }', done => {
      const req = mockRequest({ x: 10, y: 15 })
      const res = mockResponse()
      const expectedResult = req.body.x + req.body.y
      base.sum(req, res)
      expect(res.status).toBeCalledWith(200)
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Parameters summarized!",
        data: { x: req.body.x, y: req.body.y, result: req.body.x + req.body.y }
      })
      done()
    })
  })


// test case 2
describe('base.sum function', () => {
    test('res.json called with { ...basicResponse, data: { x: x, y: y, result: x + y } }', done => {
      const req = mockRequest({ x: 15, y: 1129 })
      const res = mockResponse()
      const expectedResult = req.body.x + req.body.y
      base.sum(req, res)
      expect(res.status).toBeCalledWith(200)
      expect(res.json).toBeCalledWith({
        status: true,
        message: "Parameters summarized!",
        data: { x: req.body.x, y: req.body.y, result: req.body.x + req.body.y }
      })
      done()
    })
  })

  // test case 4 - negative 
describe('base.sum function', () => {
    test('res.json called with { ...basicResponse, data: { x: x, y: y, result: x + y } }', done => {
      const req = mockRequest({ y: 15, })
      const res = mockResponse()
      base.sum(req, res)
      console.log(res.json.mockReturnValue())
      expect(res.status).toBeCalledWith(400)
      expect(res.json).toBeCalledWith({
        status: false,
        message: req.body.y ? 'y kosong' : 'x kosong',
        // akun rikcy
        rupiah: 10000
        // data: { x: req.body.x, y: req.body.y, result: req.body.x + req.body.y }
      })
      done()
    })
})
  