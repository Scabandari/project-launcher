import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
const chaiJsonEqual = require('chai-json-equal');

import app from '../index';
import { allUsers } from './stubs/user';
import { runSeed } from '../utils/dbUtils';

chai.should();
chai.use(chaiHttp);
chai.use(chaiJsonEqual);

describe('user routes', async () => {
  describe('GET api/users', async () => {
    it('should fetch the list of users', async () => {
      const res = await chai.request(app).get('/users');
      res.should.have.status(200);
      res.body.should.have.property('users');
      res.body.users.should.be.an('array');
      res.body.users.should.have.length(4);
      const resUsers = res.body.users.map(({ username, email }) => ({
        username,
        email,
      }));
      chai.expect(allUsers).to.jsonEqual(resUsers);
    });
  });

  describe('GET api/users/{userId}', async () => {
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

  describe('POST/DELETE api/users/{userId}', async () => {
    beforeEach(async () => {
      await runSeed();
    });

    it('should create a new user', async () => {
      const newUser = {
        id: 50,
        userTypeId: 2,
        username: 'test',
        email: 'email@email.com',
        password: 'password',
      };
      const createUserRes = await chai
        .request(app)
        .post('/users/register')
        .send(newUser);
      createUserRes.should.have.status(201);
      createUserRes.body.should.have.property('user');
      createUserRes.body.user.should.be.an('object');
      const { id, userTypeId, username, email, password } =
        createUserRes.body.user;
      const { password: _, ...user } = newUser;
      chai
        .expect({ id, userTypeId, username, email, password })
        .to.jsonEqual(user);
    });

    it('should delete a user', async () => {
      const allUsersResponse = await chai.request(app).get('/users');
      const userToDelete = allUsersResponse.body.users[1];
      const deleteUserRes = await chai
        .request(app)
        .delete(`/users/${userToDelete.id}`);
      deleteUserRes.should.have.status(204);
    });
  });

  describe('PATCH api/users/{userId}', async () => {
    afterEach(async () => {
      await runSeed();
    });

    it('should update a user', async () => {
      const allUsersResponse = await chai.request(app).get('/users');
      const { users } = allUsersResponse.body;
      const firstCustomer = users[1];
      const updatedUser = {
        email: 'my@email.com',
        username: 'updated',
      };
      const updateUserRes = await chai
        .request(app)
        .patch(`/users/${firstCustomer.id}`)
        .send(updatedUser);
      updateUserRes.should.have.status(200);
      updateUserRes.body.should.have.property('user');
      updateUserRes.body.user.should.be.an('object');
      updateUserRes.body.user.should.have.property('email');
      updateUserRes.body.user.email.should.be.equal(updatedUser.email);
      updateUserRes.body.user.should.have.property('username');
      updateUserRes.body.user.username.should.be.equal(updatedUser.username);
    });
  });

  describe('POST api/users/login', async () => {
    it('should login a user', async () => {
      const allUsersResponse = await chai.request(app).get('/users');
      const { users } = allUsersResponse.body;
      const firstCustomer = users[1];
      const res = await chai
        .request(app)
        .post(`/users/login`)
        .send({ email: firstCustomer.email, password: 'password' });
      res.should.have.status(201);
      res.body.should.have.property('user');
      res.body.user.should.be.an('object');
      res.body.user.should.be.jsonEqual(firstCustomer);

      res.body.should.have.property('token');
      res.body.token.should.be.not.empty;
      res.body.token.should.be.an('string');
    });
  });
});
