import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
const chaiJsonEqual = require('chai-json-equal');

import app from '../index';
import { allUsers } from './stubs/user';

chai.should();
chai.use(chaiHttp);
chai.use(chaiJsonEqual);

describe('user routes', () => {
  describe('GET api/users', () => {
    it('should fetch the list of users', async () => {
      const res = await chai.request(app).get('/users');
      res.should.have.status(200);
      res.body.should.have.property('users');
      res.body.users.should.be.an('array');
      res.body.users.should.have.length(4);
      const resUsers = res.body.users.map(
        ({ userTypeId, username, email }) => ({
          userTypeId,
          username,
          email,
        })
      );
      chai.expect(allUsers).to.jsonEqual(resUsers);
    });
  });

  describe('GET api/users/{userId}', () => {
    it('should fetch a user by id', async () => {
      const allUsersResponse = await chai.request(app).get('/users');
      const { users } = allUsersResponse.body;
      const firstCustomer = users[1];
      const res = await chai.request(app).get(`/users/${firstCustomer.id}`);
      res.should.have.status(200);
      res.body.should.have.property('user');
      res.body.user.should.be.an('object');
      res.body.user.should.be.jsonEqual(firstCustomer);
    });
  });

  describe('POST/DELETE api/users/{userId}', () => {
    it('should create a new user and delete the same user', async () => {
      const newUser = {
        userTypeId: 2,
        username: 'test',
        email: 'email@email.com',
        password: 'password',
      };
      const createUserRes = await chai
        .request(app)
        .post('/users')
        .send(newUser);
      createUserRes.should.have.status(200);
      createUserRes.body.should.have.property('user');
      createUserRes.body.user.should.be.an('object');
      const { id, userTypeId, username, email, password } =
        createUserRes.body.user;
      chai
        .expect({ userTypeId, username, email, password })
        .to.jsonEqual(newUser);

      const deleteUserRes = await chai.request(app).delete(`/users/${id}`);
      deleteUserRes.should.have.status(200);
      deleteUserRes.body.should.have.property('numberOfUsersDeleted');
      deleteUserRes.body.numberOfUsersDeleted.should.be.equal(1);
    });
  });
});
