import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { UserId, NewUser } from '../interfaces/user';

const create = async (user: NewUser): Promise<UserId> => {
  const { username, classe, level, password } = user;
  const [data] = await connection.query<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId: id } = data;
  const newUser: UserId = { id, username, classe, level, password };
  return newUser;
};

export default { create };