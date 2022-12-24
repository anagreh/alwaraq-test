import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import indexRouter from './app.controller';
import { bookRouter } from './books';
import { subjectsRouter } from './subjects';
import { pdfFileGuard } from './auth/guards/pdfFileGuard';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  '/pdf',
  pdfFileGuard,
  express.static(path.join(__dirname, '..', 'public', 'pdf')),
);
app.use(express.static(path.join(__dirname, '..', 'public', 'book_cover')));

app.use('/', indexRouter);
app.use('/books', bookRouter);
app.use('/subjects', subjectsRouter);

export default app;
