import { NextFunction, Request, Response } from 'express';

import * as serviceUsers from '../services/userService';

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

const create = async (req: Request, res: Response) => {
  try {
    const user = await serviceUsers.create(req.body);
    res.status(200).send({ user });
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

export default { getAll, getById, getByUsername, create, remove };
