import { Router } from 'express';
import userController from '../controller/userController';
import loginValidation from '../middleware/loginValidation';
import passwordValidation from '../middleware/passwordValidation';
import usernameValidation from '../middleware/usernameValidation';

const router = Router();

router.route('/login')
  .post(usernameValidation, passwordValidation, loginValidation, userController.singIn);

export default router;