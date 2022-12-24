import { Router } from 'express';
import prisma from '../db/client';

export const router = Router();

// Find All
router.get('/', async (req, res, next) => {
  try {
    const subjects = await prisma.subject.findMany();
    res.send(subjects);
  } catch (error) {
    next(error);
  }
});
