const supertest = require('supertest');
const { server } = require('../src/server');
const req = supertest(server);


describe('Api server', () => {
  test('handles invalid req', async () => {
    const res = await req.get('/anything');
    expect(res.status).toEqual(404);
  });

  it('handles error req', async () => {
    const res = await req.get('/bad');
    expect(res.status).toEqual(500);
  });

  test('handles correct req', async () => {
    const res = await req.get('/');
    expect(res.status).toEqual(200);
  });


});



describe('Food path', () => {
  let id = 0;


  it('create new food', async () => {
    const food = {
      name: 'test',
      type: 'test',
    };
    let res = await req.post('/food').send(food);
    expect(res.status).toEqual(200);
    expect(res.body.data.name).toBe('test');
    expect(res.body.data.type).toBe('test');
  });




  it('get food', async () => {
    const res = await req.get('/food');
    expect(res.body[0].data.name).toBe('test');
    expect(res.body[0].data.type).toBe('test');
    id = res.body.id;
    console.log(id);
  });

  test("delete by id", async () => {

    const res = await req.delete(`/food${id}`)
    expect(res.body).toEqual({ "error": "Not Found" })

  })



  it("update ", function (done) {
    let updates = "{ name: 'test', type: 'test' }"

    req.put('/')
      .send(updates)
      .expect(200)
      .end(function (err, res) {
        done();
      })

  });


});


describe('clothes path', () => {
  let id = 0;

  it('create new clothes', async () => {
    const clothes = {
      name: 'test',
      color: 'test',
    };
    let res = await req.post('/clothes').send(clothes);
    expect(res.status).toEqual(200);
    expect(res.body.data.name).toBe('test');
    expect(res.body.data.color).toBe('test');
  });




  it('get clothes', async () => {
    const res = await req.get('/clothes');
    expect(res.body[0].data.name).toBe('test');
    expect(res.body[0].data.color).toBe('test');
    id = res.body.id;
    console.log(id);
  });



  test("delete by id", async () => {

    const res = await req.delete(`/clothes${id}`)
    expect(res.body).toEqual({ "error": "Not Found" })

  })




  it("update", function (done) {
    let updates = "{ name: 'test', color: 'test' }"

    req.put('/')
      .send(updates)
      .expect(200)
      .end(function (err, res) {
        done();
      })

  });
});