import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User';
import { NewUser } from '../interfaces/user';

dotenv.config();

const secret: string = process.env.SECRET || 'segreto';

export const create = async (body: NewUser) => {
  const { id, username } = await User.create(body);
  const token = jwt.sign(
    { data: { id, username } },
    secret,
    {
      algorithm: 'HS256',
      expiresIn: '7d',
    },
  );

  return token;
};

export const login = async (body: object) => {
  console.log(body);
  return 'token';
};