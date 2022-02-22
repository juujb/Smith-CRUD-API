import { Request, Response } from 'express';
import Status from '../enums/status';

const passwordValidation = (req: Request, res: Response, next: () => void) => {
  const { password } = req.body;
  if (!password) return res.status(Status.BAD_REQUEST).json({ error: 'Password is required' });
  if (typeof password !== 'string') {
    return res.status(Status.UN_ENTITY).json({ error: 'Password must be a string' });
  }
  if (password.length <= 7) {
    return res.status(Status.UN_ENTITY).json({ 
      error: 'Password must be longer than 7 characters',
    });
  }
  next();
};

export default passwordValidation;