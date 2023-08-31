import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { userRepo } from "../repositories";
import { TUser } from "../interfaces";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId: number = parseInt(req.params.id);

  const user: TUser | null = await userRepo.findOneBy({ id: userId });

  if (!user) throw new AppError("User not found", 404);


  res.locals = { ...res.locals, user, userId };

  return next();
};
