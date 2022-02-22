interface User {
  username: string,
  classe: string,
  level: number,
  password: string,
}

interface NewUser {
  id: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

export { User, NewUser };