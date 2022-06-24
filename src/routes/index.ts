import { Router, Request, Response, NextFunction } from 'express';

import todosRoutes from './todos';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: 'API is working 🚀',
  });
});

router.use('/todos', todosRoutes);

export default router;
