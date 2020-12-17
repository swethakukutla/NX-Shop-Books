import * as fromBooks from './books.reducer';
import * as fromActions from './books.actions';
import { IBook } from '../Shopping-Books/interfaces/books.interface';

describe('BooksReducer', () => {
  describe('searchbook action', () => {
    it('should return the search books', () => {
      const searchValue: any = "java";
      const { initialState } = fromBooks;
      const action = fromActions.searchbook(searchValue);
      const state = fromBooks.reducer(initialState, action);

      expect(state).toBe(initialState);
      expect(state.loaded).toBe(true);
      expect(state.searchKey).toBe(searchValue);
    });

    it('should return the default state', () => {
      const books: IBook[] = [
        {
          "kind": "books#volume",
          "id": "eNExy_X1YYcC",
          "etag": "FSQLuTqMts8",
          "selfLink": "https://www.googleapis.com/books/v1/volumes/eNExy_X1YYcC",
          "volumeInfo": {
            "title": "AngularJS",
            "authors": [
              "Brad Green",
              "Shyam Seshadri"
            ],
            "publisher": "\"O'Reilly Media, Inc.\"",
            "publishedDate": "2013-04-08",
            "description": "Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure for building web apps. Guided by two engineers who worked on AngularJS at Google, you’ll walk through the framework’s key features, and then build a working AngularJS app—from layout to testing, compiling, and debugging. If you have JavaScript experience, you’ll learn how AngularJS helps reduce the complexity of your web app. Dive deep into Angular’s building blocks and learn how they work together Gain maximum flexibility by separating logic, data, and presentation responsibilities with MVC Assemble your full app in the browser, using client-side templates Use AngularJS directives to extend HTML with declarative syntax Communicate with the server and implement simple caching with the $http service Use dependency injection to improve refactoring, testability, and multiple environment design Get code samples for common problems you face in most web apps",
            "industryIdentifiers": [
              {
                "type": "ISBN_13",
                "identifier": "9781449355883"
              },
              {
                "type": "ISBN_10",
                "identifier": "1449355889"
              }
            ],
            "readingModes": {
              "text": false,
              "image": true
            },
            "pageCount": 196,
            "printType": "BOOK",
            "categories": [
              "Computers"
            ],
            "averageRating": 2.5,
            "ratingsCount": 4,
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.2.0.0.preview.1",
            "imageLinks": {
              "smallThumbnail": "http://books.google.com/books/content?id=eNExy_X1YYcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              "thumbnail": "http://books.google.com/books/content?id=eNExy_X1YYcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.co.in/books?id=eNExy_X1YYcC&printsec=frontcover&dq=angular+js&hl=&cd=1&source=gbs_api",
            "infoLink": "http://books.google.co.in/books?id=eNExy_X1YYcC&dq=angular+js&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/AngularJS.html?hl=&id=eNExy_X1YYcC"
          },
          "saleInfo": {
            "country": "IN",
            "saleability": "NOT_FOR_SALE",
            "isEbook": false
          },
          "accessInfo": {
            "country": "IN",
            "viewability": "PARTIAL",
            "embeddable": true,
            "publicDomain": false,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
              "isAvailable": false
            },
            "pdf": {
              "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=eNExy_X1YYcC&hl=&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "SAMPLE",
            "quoteSharingAllowed": false
          },
          "searchInfo": {
            "textSnippet": "This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure ..."
          }
        }
      ];
      const entities = {
        1: books[0],
      }
      const { initialState } = fromBooks;
      const action = fromActions.BooksLoaded(books);
      const state = fromBooks.reducer(initialState, action);
      expect(state.entities).toEqual(entities);
    });
  });
});
