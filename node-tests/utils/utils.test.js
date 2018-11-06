const expect = require('chai').expect;

const utils = require('./utils');

describe('Utils', () => {
  it('should add two number', () => {
    const res = utils.add(3,4);
  
    expect(res).to.be.equal(7);
  });
  
  it('should async add two number',  (done) => {
    utils.asyncAdd(1, 2, (sum) => {
      expect(sum).to.be.equal(3);
  
      done();
    })
  })

});

