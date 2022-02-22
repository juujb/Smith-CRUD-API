import { Request, Response } from 'express';
import Status from '../enums/status';

const classValidation = (req: Request, res: Response, next: () => void) => {
  const { classe } = req.body;
  if (!classe) return res.status(Status.BAD_REQUEST).json({ error: 'Classe is required' });
  
  if (typeof classe !== 'string') {
    return res.status(Status.UN_ENTITY).json({ error: 'Classe must be a string' });
  }

  if (classe.length <= 2) {
    return res.status(Status.UN_ENTITY).json({ 
      error: 'Classe must be longer than 2 characters',
    });
  }
  
  next();
};

export default classValidation;