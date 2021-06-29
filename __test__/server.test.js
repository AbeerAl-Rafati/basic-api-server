const supertest = require('supertest');
const { server } = require('../src/server');
const req = supertest(server);


let id;

describe('food path', () => {

  it("post data of food", async () => {
    const res = await req.post("/food").send({
      food: "apple",
      type: "fruit"
    });

    expect(res.status).toEqual(200)
    expect(res.body.food).toHaveProperty('apple')
    expect(res.body.type).toHaveProperty('fruit')
    id = res.body.id;
  });

  it('get method of food ', async () => {
    const res = await req.get('/food')

    expect(res.status).toBe(200)
    expect(res.body.food).toBe('apple')

  })

  it('get  food by id ', async () => {
    const res = await req.get(`/food${id}`)

    expect(res.status).toBe(200)
    expect(res.body.food).toBe('apple')

  })



  test("delete by id", async () => {

    const res = await req.delete(`/food${id}`)
    expect(res.body).toEqual({ "error": "Not Found" })

  })


  test("patch by id ", async () => {

    const res = await req.patch(`/food${id}`).send({ food: 'banana' })
    expect(res.status).toEqual(200)

    expect(response.body._id).toBe(id)
    expect(response.body.food).toBe('banana')

  })
})



describe('clothes path', () => {


  it("post data of clothes", async () => {
    const res = await req.post("/clothes").send({
      clothes: "shirt",
      color: "black"
    });

    expect(res.status).toEqual(200)
    expect(res.body.clothes).toBe('shirt')
    id = res.body.id;
  });


  it('get method of clothes ', async () => {
    const res = await req.get(`/clothes`)

    expect(res.status).toBe(200)
    expect(res.body.clothes).toBe('apple')

  })

  it('get clothes by id ', async () => {
    const res = await req.get(`/clothes${id}`)

    expect(res.status).toBe(200)
    expect(res.body.clothes).toBe('apple')

  })



  test("delete clothes by id", async () => {

    const res = await req.delete(`/clothes${id}`)
    expect(res.body).toEqual({ "error": "Not Found" })

  })


  test("patch by id ", async () => {

    const res = await req.patch(`/clothes${id}`).send({ color: 'red' })
    expect(res.status).toEqual(200)

    expect(response.body._id).toBe(id)
    expect(response.body.color).toBe('red')

  })
})

describe('server', () => {

  it('server connect', async () => {
    const res = await req.get('/');
    expect(res.status).toEqual(200);
  });

  it('server bad connection', async () => {
    const res = await req.get('/bad');
    expect(res.status).toEqual(404);
  });


})