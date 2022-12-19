import { NextFunction, Request, Response } from 'express';

import * as serviceUsers from './service';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await serviceUsers.getAll(true);
    res.status(200).send({ users: users });
  } catch (err) {
    console.log('err', err);
    res.status(500).send(err);
  }
};

export default { getAll };
