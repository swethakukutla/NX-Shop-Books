import * as express from 'express';
import * as book from '../controllers/book.controller';
export const router = express.Router();

router.get('/search/', book.getBooks);
router.get('/search/:searchkey', book.getBooks);
