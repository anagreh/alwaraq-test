import { prisma, Prisma } from '@prisma/client';
import { Router } from 'express';
import { booksService } from './books.service';

export const router = Router();

// Create
router.post('/', async (req, res, next) => {
  try {
    res.send(await booksService.create(req.body));
  } catch (error) {
    next(error);
  }
});

// Find All
router.get('/', async (req, res, next) => {
  const query = req.query;
  const search = query.search as string;
  const subjects = query.subjects as string | string[];

  console.log(query);

  try {
    res.send(await booksService.findAll(search, subjects));
  } catch (error) {
    next(error);
  }
});

// Find One
router.get('/:id', async (req, res, next) => {
  try {
    res.send(await booksService.findOne(req.params.id));
  } catch (error) {
    next(error);
  }
});

// Update
router.patch('/:id', async (req, res, next) => {
  try {
    res.send(await booksService.update(req.params.id, req.body));
  } catch (error) {
    next(error);
  }
});

// Remove
router.delete('/:id', async (req, res, next) => {
  try {
    res.send(booksService.remove(req.params.id));
  } catch (error) {
    next(error);
  }
});
