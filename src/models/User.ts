import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, NewUser } from '../interfaces/user';

const create = async (user: User) => {
  const { username, classe, level, password } = user;
  const [data] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );
  const { insertId: id } = data;
  const newUser: NewUser = { id, username, classe, level, password };
  return newUser;
};

export default create;