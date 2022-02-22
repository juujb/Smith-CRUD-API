import { Request, Response } from 'express';
import Status from '../enums/status';

const levelValidation = (req: Request, res: Response, next: () => void) => {
  const { level } = req.body;
  if (level === undefined) {
    return res.status(Status.BAD_REQUEST).json({ error: 'Level is required' });
  }

  if (typeof level !== 'number') {
    return res.status(Status.UN_ENTITY).json({ error: 'Level must be a number' });
  }

  if (level <= 0) {
    return res.status(Status.UN_ENTITY).json({ 
      error: 'Level must be greater than 0',
    });
  }
  
  next();
};

export default levelValidation;