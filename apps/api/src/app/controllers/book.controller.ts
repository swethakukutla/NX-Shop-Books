import { IBook, IFilteredBook } from '../../../../../libs/models/book.interface';

const express = require('express');
const request = require('request');
// var fetchUrl = require("fetch").fetchUrl;


export const getBooks = (req, res, next) => {
  try {
    if (!req.params.searchkey) {
      throw { status: 400, message: 'Bad request' };
    } else {
      request.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.searchkey}`, (err, response, body) => {
        if (err) {
            return next(err);
        }
        let filteredBooks = filterBooks(JSON.parse(body).items);
        res.send({ response: filteredBooks });
      });
    }
  }
  catch (error) {
    res.status(error.status).send(error.message);
  }
}


export const filterBooks = (books: IBook[]) => {
  const filteredBooks: IFilteredBook[] = [];
    books.forEach((book) => {
      filteredBooks.push({
        id: book.id,
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        imageLinks: book.volumeInfo.imageLinks,
        averageRating: book.volumeInfo.averageRating,
        publisher: book.volumeInfo?.publisher,
        pageCount: book.volumeInfo?.pageCount,
        language: book.volumeInfo?.language
      });
    });
  return filteredBooks;
};
