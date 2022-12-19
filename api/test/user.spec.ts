import { describe, it } from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';
const chaiJsonEqual = require('chai-json-equal');

import app from '../src/index';
import { user1 } from './stubs/user';

chai.should();
chai.use(chaiHttp);
chai.use(chaiJsonEqual);

describe('GET api/users', () => {
  it('should fetch the list of users', async () => {
    const res = await chai.request(app).get('/api/users');
    res.should.have.status(200);
    res.body.should.have.property('users');
    res.body.users.should.be.an('array');
    res.body.users.should.have.length(1);
    const { id: resId, ...firstUser } = res.body.users[0];
    const { id, ...restUser1 } = user1;
    firstUser.should.jsonEqual(restUser1);
  });
});
