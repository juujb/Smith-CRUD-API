import { Router } from 'express';
import { singIn } from '../controller/userController';
import loginValidation from '../middleware/loginValidation';
import passwordValidation from '../middleware/passwordValidation';
import usernameValidation from '../middleware/usernameValidation';

const router = Router();

router.route('/login')
  .post(usernameValidation, passwordValidation, loginValidation, singIn);

export default router;