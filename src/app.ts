import express from 'express';
import userRouter from './routers/userRouter';
import loginRouter from './routers/loginRouter';
import productsRouter from './routers/productRouter';

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(loginRouter);
app.use(productsRouter);

export default app;
