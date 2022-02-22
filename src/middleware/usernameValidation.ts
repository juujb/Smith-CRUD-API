import { Request, Response } from 'express';
import Status from '../enums/status';

const usernameValidation = (req: Request, res: Response, next: () => void) => {
  const { username } = req.body;
  if (!username) return res.status(Status.BAD_REQUEST).json({ error: 'Username is required' });
  if (typeof username !== 'string') {
    return res.status(Status.UN_ENTITY).json({ error: 'Username must be a string' });
  }
  if (username.length <= 2) {
    return res.status(Status.UN_ENTITY).json({ 
      error: 'Username must be longer than 2 characters',
    });
  }
  next();
};

export default usernameValidation;