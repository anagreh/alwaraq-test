import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './app.controller';
import { bookRouter } from './books';

// import prisma from './db/client';

// async function name() {
//   const book = await prisma.book.create({
//     data: {
//       title: 'title1',
//       year_of_publication: '20001',
//       cover_url: 'cover_url1',
//       pdf_url: 'pdf_url1',
//       authors: { create: { name: 'author1' } },
//       publisher: { create: { name: 'publisher1' } },
//       subjects: { create: { title: 'subject1' } },
//     },
//   });

//   console.log(book);
// }
// name();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRouter);
app.use('/books', bookRouter);

export default app;
