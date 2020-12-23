export interface Book {
  kind: string;
  totalItems: number;
  items: IBook[];
}

export interface IBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    publisher: string;
    publishedDate?: string;
    pageCount?: number;
    printType?: string;
    averageRating?: number;
    ratingsCount?: number;
    maturityRating?: string;
    allowAnonLogging?: Boolean;
    contentVersion?: string;
    language?: string;
    previewLink?: string;
    infoLink?: string;
    canonicalVolumeLink?: string;
  };
  saleInfo: object;
  accessInfo: object;
  searchInfo: object;
  purchaseInfo?: object;
}

class BillingInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export interface IFilteredBook {
  id: string,
  title: string;
    publisher: string;
    description: string;
    pageCount: number;
    language: string;
    averageRating: number;
    imageLinks: {
      thumbnail: string;
      smallThumbnail: string;
  };
  bookinfo?: [IFilteredBook];
  billingData?: BillingInfo | undefined;
}
