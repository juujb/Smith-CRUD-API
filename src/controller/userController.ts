import { Request, Response } from 'express';
import { create, login } from '../services/userService';
import { UserId } from '../interfaces/user';
import Status from '../enums/status';

const singUp = async (req: Request, res: Response) => {
  const { body } = req;
  const token = await create(body);
  res.status(Status.CREATED).json({ token });
};

const singIn = async (req: Request, res: Response) => {
  const user: UserId = req.body;
  const token = await login(user);
  res.status(Status.OK).json({ token });
};

export { singUp, singIn };