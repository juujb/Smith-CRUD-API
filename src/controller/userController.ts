import { Request, Response } from 'express';
import userService from '../services/userService';
import Status from '../enums/status';

const post = async (req: Request, res: Response) => {
  const { body } = req;
  const token = await userService.create(body);
  res.status(Status.CREATED).json({ token });
};

export default { post };