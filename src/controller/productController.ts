import { Request, Response } from 'express';
import { create, getAll } from '../services/productService';
import Status from '../enums/status';

const createProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const item = await create(body);
  res.status(Status.CREATED).json({ item });
};

const getProducts = async (req: Request, res: Response) => {
  const list = await getAll();
  res.status(Status.CREATED).json(list);
};

export { createProduct, getProducts };