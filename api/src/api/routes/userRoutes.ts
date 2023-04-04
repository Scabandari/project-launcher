import express from 'express';

import Users from '../controllers/userCont';
const router = express.Router();

router.get('/', [], Users.getAll);
router.get('/:id', [], Users.getById);
router.get('/name/:username', [], Users.getByUsername);
router.delete('/:id', [], Users.remove);
router.patch('/:id', [], Users.update);

// auth
router.post('/:id/login', [], Users.login);
router.post('/register', [], Users.create);

export default router;
