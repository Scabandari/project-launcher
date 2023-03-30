import { NextFunction, Request, Response } from 'express';

import * as serviceUsers from '../services/userService';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await serviceUsers.getAll();
    res.status(200).send({ users: users });
  } catch (err) {
    console.log('err', err);
    res.status(500).send(err);
  }
};

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await serviceUsers.create(req.body);
    res.status(200).send({ user: user });
  } catch (err) {
    console.log('err', err);
  }
};

export default { getAll, create };
