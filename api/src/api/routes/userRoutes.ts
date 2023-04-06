import express from 'express';

import Users from '../controllers/userCont';
const router = express.Router();

router.get('/', [], Users.getAll);
router.get('/:id', [], Users.getById);
router.get('/name/:username', [], Users.getByUsername);
router.delete('/:id', [], Users.remove);
router.patch('/:id', [], Users.update);

// auth
router.post('/login', [], Users.login);
router.post('/login/guest', [], Users.loginGuest);
router.post('/register', [], Users.register);

export default router;
