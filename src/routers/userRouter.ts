import { Router } from 'express';
import userController from '../controller/userController';
import classValidation from '../middleware/classValidation';
import levelValidation from '../middleware/levelValidation';
import passwordValidation from '../middleware/passwordValidation';
import usernameValidation from '../middleware/usernameValidation';

const router = Router();

router.route('/users')
  .post(
    usernameValidation,
    classValidation,
    levelValidation, 
    passwordValidation,
    userController.create,
  );

export default router;