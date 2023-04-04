import bcrypt from 'bcrypt';
import { Request } from 'express';
import jwt from 'jsonwebtoken';

const comparePasswords = (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};

const createPasswordHash = async (password: string) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  return hashedPassword;
};

const createToken = (username: string) => {
  const token = jwt.sign({ username }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });

  return token;
};

const isTokenValid = (token: string, username: string) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    const { username: decodedUsername } = decoded as any;
    return decodedUsername === username;
  } catch (err) {
    return false;
  }
};

const getTokenFromRequest = (req: Request) => {
  const { authorization } = req.headers;
  if (!authorization) throw new Error('No authorization header found');

  const token = authorization.split(' ')[1];
  return token;
};

const isRequestValid = (req: Request) => {
  const token = getTokenFromRequest(req);
  const { username } = req.params;
  return isTokenValid(token, username);
};

export { comparePasswords, createPasswordHash, createToken, isRequestValid };
