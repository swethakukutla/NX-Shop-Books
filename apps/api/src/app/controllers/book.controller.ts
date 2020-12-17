// import { IBook } from 'apps/shop-books/src/app/Shopping-Books/interfaces/books.interface';

var fetchUrl = require("fetch").fetchUrl;


export const getBooks = (req, res) => {
  try {
    if (req.params.searchkey) {
      fetchUrl(`https://www.googleapis.com/books/v1/volumes?q=${req.params.searchkey}`, function(error, meta, body){
          let filteredBooks = filterBooks(JSON.parse(body));
          res.send({ response: filteredBooks });
      });
    }
  }
  catch (error) {
    res.status(error.status).send(error.message);
  }
}


export const filterBooks = (books) => {
  const filteredBooks: any[] = [];
    books.items.forEach((book) => {
      filteredBooks.push({
        id: book.id,
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        imageLinks: book.volumeInfo.imageLinks,
        authors: book.volumeInfo.authors,
        averageRating: book.volumeInfo.averageRating,
        publisher: book.volumeInfo?.publisher,
        pageCount: book.volumeInfo?.pageCount,
        language: book.volumeInfo?.language
      });
    });
  return filteredBooks;
};
