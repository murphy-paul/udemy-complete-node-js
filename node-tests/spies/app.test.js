const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const rewire = require('rewire');

chai.use(sinonChai);

const expect = chai.expect;

const app = rewire('./app');


describe('App', () => {
  // setup our mock
  var db = {
    saveUser: sinon.fake()
  };
  app.__set__('db', db);

  it('it should call the spy', () => {
    var spy = sinon.fake();

    spy('Paul', 21);

    expect(spy).to.have.been.calledWith('Paul', 21);
  });

  it('should call save user', () => {
    const email = 'a@b.com';
    const psswd = 'password';

    app.handleSignup(email, psswd);

    expect(db.saveUser).to.have.been.calledWith({ email, psswd });
  })
})