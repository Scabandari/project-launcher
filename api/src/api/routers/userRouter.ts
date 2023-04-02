import express from 'express';

import Users from '../controllers/userCont';
const router = express.Router();

router.get('/', [], Users.getAll);
router.get('/:id', [], Users.getById);
router.get('/name/:username', [], Users.getByUsername);
router.post('/', [], Users.create);
router.delete('/:id', [], Users.remove);

export default router;
