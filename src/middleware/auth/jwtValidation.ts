import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
import Status from '../../enums/status';

dotenv.config();

// https://stackoverflow.com/questions/68403905/how-to-add-additional-properties-to-jwtpayload-type-from-types-jsonwebtoken

declare module 'jsonwebtoken' {
  export interface LoginJwtPayload extends jwt.JwtPayload {
    id: number,
    username: string
  }
}

const secret: string = process.env.SECRET || 'segreto';

const regex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/;

const jwtValidation = async (req: Request, res: Response, next: () => void) => {
  const token = req.headers.authorization;
  const { id, username } = req.body;

  if (!token) {
    return res.status(Status.UNAUTHORIZED).json({ error: 'Token not found' });
  }

  if (!regex.test(token)) {
    return res.status(Status.UNAUTHORIZED).json({ error: 'Invalid token' });
  }

  const { data } = <jwt.LoginJwtPayload> jwt.verify(token, secret);

  if (data.id !== id && data.username !== username) {
    return res.status(Status.UNAUTHORIZED).json({ error: 'Invalid token' });
  }

  next();
};

export default jwtValidation;