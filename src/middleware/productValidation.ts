import { Request, Response } from 'express';
import Status from '../enums/status';

const nameValidation = (req: Request, res: Response, next: () => void) => {
  const { name } = req.body;
  if (!name) return res.status(Status.BAD_REQUEST).json({ error: 'Name is required' });
  if (typeof name !== 'string') {
    return res.status(Status.UN_ENTITY).json({ error: 'Name must be a string' });
  }
  if (name.length <= 2) {
    return res.status(Status.UN_ENTITY).json({ 
      error: 'Name must be longer than 2 characters',
    });
  }
  next();
};

const amountValidation = (req: Request, res: Response, next: () => void) => {
  const { amount } = req.body;
  if (!amount) return res.status(Status.BAD_REQUEST).json({ error: 'Amount is required' });
  if (typeof amount !== 'string') {
    return res.status(Status.UN_ENTITY).json({ error: 'Amount must be a string' });
  }
  if (amount.length <= 2) {
    return res.status(Status.UN_ENTITY).json({ 
      error: 'Amount must be longer than 2 characters',
    });
  }
  next();
};

export { nameValidation, amountValidation };