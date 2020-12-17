import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('BooksService', () => {
  let service: BooksService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BooksService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give response when called http', () => {
    const id = "java";
    const response = {
        "kind": "books#volumes",
        "totalItems": 2161,
        "items": [
          {
            "kind": "books#volume",
            "id": "96gMhjaAviMC",
            "etag": "9H4ISDT5PhY",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/96gMhjaAviMC",
            "volumeInfo": {
              "title": "Core Java(Tm) Volume 1-Fundamentals, 8/E",
              "authors": [
                "Horstmann"
              ],
              "publisher": "Pearson Education India",
              "publishedDate": "2008-09",
              "industryIdentifiers": [
                {
                  "type": "ISBN_10",
                  "identifier": "8131719456"
                },
                {
                  "type": "ISBN_13",
                  "identifier": "9788131719459"
                }
              ],
              "readingModes": {
                "text": false,
                "image": true
              },
              "pageCount": 864,
              "printType": "BOOK",
              "averageRating": 5,
              "ratingsCount": 2,
              "maturityRating": "NOT_MATURE",
              "allowAnonLogging": false,
              "contentVersion": "0.1.2.0.preview.1",
              "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
              },
              "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=96gMhjaAviMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=96gMhjaAviMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
              },
              "language": "en",
              "previewLink": "http://books.google.co.in/books?id=96gMhjaAviMC&pg=PT4&dq=java&hl=&cd=1&source=gbs_api",
              "infoLink": "http://books.google.co.in/books?id=96gMhjaAviMC&dq=java&hl=&source=gbs_api",
              "canonicalVolumeLink": "https://books.google.com/books/about/Core_Java_Tm_Volume_1_Fundamentals_8_E.html?hl=&id=96gMhjaAviMC"
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
              "webReaderLink": "http://play.google.com/books/reader?id=96gMhjaAviMC&hl=&printsec=frontcover&source=gbs_api",
              "accessViewStatus": "SAMPLE",
              "quoteSharingAllowed": false
            },
            "searchInfo": {
              "textSnippet": "\u003cb\u003eJava\u003c/b\u003e Programming Core \u003cb\u003eJava\u003c/b\u003e Volume I Fundamentals EIGHTH EDITION Cay S . \u003cbr\u003e\nHorstmann Gary Cornell This revised edition of the classic Core \u003cb\u003eJava\u003c/b\u003e , Volume 1 \u003cbr\u003e\n– Fundamentals , is the definitive guide to \u003cb\u003eJava\u003c/b\u003e for serious programmers who&nbsp;..."
            }
          }

        ]};

    service.getAllBooks(id).subscribe((data) => {
      expect(data).toBe(response);
    });

    const request = httpMock.expectOne(
      `https://www.googleapis.com/books/v1/volumes?q=java`
    );
    expect(request.request.method).toBe('GET');
    request.flush(response);
    httpMock.verify();
  });
});
