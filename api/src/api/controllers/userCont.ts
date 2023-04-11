import { NextFunction, Request, Response } from 'express';

import { ErrorBadRequest } from '../../utils/error';
import * as serviceUsers from '../services/userService';
import * as serviceUserTypes from '../services/userTypeService';
import * as authUtils from '../../utils/authUtils';

const getById = async (req: Request, res: Response) => {
  let user;
  try {
    const { id } = req.params;
    const parsedId = Number(id);
    user = await serviceUsers.getById(parsedId);
    res.status(200).send({ user });
  } catch (err) {
    console.log('err', err);
  }
};

const getByUsername = async (req: Request, res: Response) => {
  let user;
  try {
    const { username } = req.params;
    user = await serviceUsers.getByUsername(username);
    res.status(200).send({ user });
  } catch (err) {
    console.log('err', err);
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const users = await serviceUsers.getAll();
    res.status(200).send({ users: users });
  } catch (err) {
    console.log('err', err);
    res.status(500).send(err);
  }
};

// Admins create users
const create = async (req: Request, res: Response) => {
  try {
    const user = await serviceUsers.create(req.body);
    res.status(201).send({ user });
  } catch (err) {
    console.log('err', err);
  }
};

// Customer registration
const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, username } = req.body;
    const isUserExists = await serviceUsers.isUserExists(email, username);
    if (isUserExists)
      throw new ErrorBadRequest(
        'email/username',
        { email, username },
        'User already exists'
      );

    const userTypeId = await serviceUserTypes.getUserTypeId('customer');
    const user = await serviceUsers.create({ ...req.body, userTypeId });
    res.status(201).send({ user });
  } catch (err) {
    next(err);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const parsedId = Number(id);
    const user = await serviceUsers.update(parsedId, req.body);
    res.status(204).send({ user });
  } catch (err) {
    console.log('err', err);
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const parsedId = Number(id);
    const numberOfUsersDeleted = await serviceUsers.remove(parsedId);
    res.status(200).send({ numberOfUsersDeleted });
  } catch (err) {
    console.log('err', err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await serviceUsers.getByEmail(email);
    const token = await serviceUsers.login(user.username, password);
    res.status(201).send({ user, token });
  } catch (err) {
    next(err);
    console.log('err', err);
  }
};

const loginGuest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = authUtils.createToken('guest');
    const user = serviceUsers.getGuestUser();
    res.status(201).send({ user, token });
  } catch (err) {
    next(err);
    console.log('err', err);
  }
};

export default {
  update,
  getAll,
  getById,
  getByUsername,
  create,
  register,
  remove,
  login,
  loginGuest,
};
