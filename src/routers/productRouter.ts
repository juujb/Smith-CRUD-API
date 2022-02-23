import { Router } from 'express';
import { nameValidation, amountValidation } from '../middleware/productValidation';
import jwtValidation from '../middleware/auth/jwtValidation';
import { createProduct, getProducts } from '../controller/productController';

const router = Router();

router.route('/products')
  .post(jwtValidation, nameValidation, amountValidation, createProduct)
  .get(jwtValidation, getProducts);

export default router;