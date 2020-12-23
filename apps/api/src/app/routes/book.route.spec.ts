import * as request from 'request';
import * as express from 'express';
import * as main from '../../main';
import { MockBook } from '../../../../../libs/models/mockData';
const nock = require('nock');
describe('Test routes', () => {
  const app = express();
  beforeEach(()=>{
      nock('https://www.googleapis.com').get('/books/v1/volumes?q=angular').reply(200,MockBook);
  })
  it('GET /search/', (done) => {
    request(main.app).get('/book/search/')
    .expect(400)
    .end((err, res) => {
      if (err) throw err;
      done();
    });
  });
  it('GET /search/:searchkey', (done) => {
    request(main.app).get('/book/search/angular')
    .expect(200)
    .end((err, res) => {
      if (err) throw err;
      done();
    });
  });
});
