import { Router } from '../../lib/express';
import { userController } from '../controllers/userController';
export const router = Router();


router.post( '/user', userController );