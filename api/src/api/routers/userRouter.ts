import express from 'express';

import Users from '../controllers/userCont';
const router = express.Router();

router.get('/', [], Users.getAll);
router.post('/', [], Users.create);

export default router;
