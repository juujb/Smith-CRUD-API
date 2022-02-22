import { Router } from 'express';
import usernameValidation from '../middleware/usernameValidation';

const router = Router();

router.route('/users')
  .post(usernameValidation);

export default router;