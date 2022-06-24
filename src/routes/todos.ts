import { Router, Request, Response, NextFunction } from 'express';

import prisma from '../db';

const router = Router();

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req.body;
    const todo = await prisma.todos.create({
      data: {
        body,
      },
    });

    res.json({
      success: true,
      todo,
    });
  } catch (e) {
    console.log({ error: e });
    throw e;
  } finally {
    await prisma.$disconnect();
  }
});

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todos = await prisma.todos.findMany();

    res.json({
      success: true,
      todos,
    });
  } catch (e) {
    console.log({ error: e });
    throw e;
  } finally {
    await prisma.$disconnect();
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const todo = await prisma.todos.findUnique({ where: { id } });

    res.json({
      success: true,
      todo,
    });
  } catch (e) {
    console.log({ error: e });
    throw e;
  } finally {
    await prisma.$disconnect();
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const { body, hasCompleted } = req.body;
    const todo = await prisma.todos.update({
      where: { id },
      data: {
        body,
        has_completed: hasCompleted,
      },
    });

    res.json({
      success: true,
      todo,
    });
  } catch (e) {
    console.error({ error: e });
    throw e;
  } finally {
    await prisma.$disconnect();
  }
});

router.delete(
  '/:id',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const todo = await prisma.todos.delete({ where: { id } });

      res.json({
        success: true,
        todo,
      });
    } catch (e) {
      console.error({ error: e });
      throw e;
    } finally {
      await prisma.$disconnect();
    }
  }
);

export default router;
