import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { ProductId, NewProduct } from '../interfaces/product';

const create = async (product: NewProduct): Promise<ProductId> => {
  const { name, amount } = product;
  const [data] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId: id } = data;
  const newUser: ProductId = { id, name, amount };
  return newUser;
};

const getAll = async (): Promise<Product[]> => {
  const [data] = await connection.query<ResultSetHeader>(
    'SELECT * FROM Trybesmith.Products',
  );
  return data;
};

const Product = {
  create,
  getAll,
};

export default Product;