import Product from '../models/Product';
import { NewProduct } from '../interfaces/product';

export const create = async (body: NewProduct) => {
  const item = await Product.create(body);
  return item;
};

export const getAll = async () => {
  const list = await Product.getAll();
  return list;
};