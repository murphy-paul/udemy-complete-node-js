const expect = require('expect');

const utils = require('./utils');

it('should add two number', () => {
  const res = utils.add(3,4);

  expect(res).toBe(7);
});

it('should async add two number',  (done) => {
  utils.asyncAdd(1, 2, (sum) => {
    expect(sum).toBe(3);

    done();
  })
})