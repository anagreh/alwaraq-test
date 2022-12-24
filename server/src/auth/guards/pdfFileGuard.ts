import { RequestHandler } from 'express';

export const pdfFileGuard: RequestHandler = (req, res, next) => {
  if (req.headers['x-trusted'] === '1') return next();
  res.status(403).send('not authorized');
};
