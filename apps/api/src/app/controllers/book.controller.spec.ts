import * as express from 'express';

const nock = require('nock');
const request = require('request');
const app = express();

import * as main from '../../main';
import * as bookController from './book.controller';
import { MockBook, filteredBookMock } from '../../../../../libs/models/mockData';


describe('Book Controller ', () => {
  beforeEach(() => {
    nock('https://www.googleapis.com')
      .get('/books/v1/volumes?q=mock')
      .reply(200, MockBook);

    nock('https://www.googleapis.com')
      .get('/books/v1/volumes?q=')
      .reply(400, new Error());
  });

  it('test for books successful', (done) => {
    request(main.app)
      .get('/search/mock')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).toEqual(filteredBookMock);
        done();
      });
  });

  it('test when error occurs', (done) => {
    request(main.app)
      .get('/search/')
      .expect(400)
      .end((err, res) => {
        if (err) throw err;
        console.log(' error ' + err);
        done();
      });
  });
});
