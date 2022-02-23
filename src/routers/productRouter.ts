import { Router } from 'express';
import { nameValidation, amountValidation } from '../middleware/productValidation';
import jwtValidation from '../middleware/auth/jwtValidation';

const router = Router();

router.route('/products')
  .post(nameValidation, amountValidation, jwtValidation);

export default router;