import { Request, Response } from "express";
import { userServices } from "../services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await userServices.create(req.body);

  return res.status(201).json(newUser);
};

const readUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await userServices.read();

  return res.status(200).json(users);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const payload = req.body;

  const userUpdated = await userServices.update(
    res.locals.user,
    payload,
    res.locals.decoded.admin
  );

  return res.status(200).json(userUpdated);
};

const destroyUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await userServices.destroy(res.locals.user);

  return res.status(204).send();
};

export {
  createUserController,
  readUsersController,
  updateUserController,
  destroyUserController,
};
