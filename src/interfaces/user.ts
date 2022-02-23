interface NewUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

interface UserId {
  id: number,
  username: string,
  classe: string,
  level: number,
  password: string,
}

interface Login {
  username: string,
  password?: string,
}

export { UserId, NewUser, Login };