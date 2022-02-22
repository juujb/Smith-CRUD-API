import { Router } from 'express';
import classValidation from '../middleware/classValidation';
import usernameValidation from '../middleware/usernameValidation';

const router = Router();

router.route('/users')
  .post(usernameValidation, classValidation);

export default router;