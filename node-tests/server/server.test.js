const request = require('supertest');
const assert = require('chai').assert;
const expect = require('chai').expect;

const app = require('./server').app;


it('should return hello world', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).to.contain({
        error: "Page not found."
      })
    })
    .end(done);
});

it('should return users array', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).to.deep.include({
          name: 'Jim',
          age: 21
      })
    })
    .end(done);
})