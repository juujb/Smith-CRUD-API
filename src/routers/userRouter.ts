import { Router } from 'express';
import classValidation from '../middleware/classValidation';
import levelValidation from '../middleware/levelValidation';
import usernameValidation from '../middleware/usernameValidation';

const router = Router();

router.route('/users')
  .post(usernameValidation, classValidation, levelValidation);

export default router;