import express from 'express';
import userRouter from './routers/userRouter';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(loginRouter);

export default app;
