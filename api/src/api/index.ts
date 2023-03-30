import express from 'express';
import users from './routers/userRouter';

const router = express.Router();
router.use('/users', users);

export default router;
