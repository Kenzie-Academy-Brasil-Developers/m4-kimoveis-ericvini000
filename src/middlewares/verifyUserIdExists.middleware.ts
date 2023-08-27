import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { userRepository } from "../repositories";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = parseInt(req.params.id);

  const user = await userRepository.findOneBy({ id: userId });

  if (!user) throw new AppError("User not found.", 404);

  res.locals = { ...res.locals, user, userId };

  return next();
};
