import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { userRepo } from "../repositories";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email } = req.body;

  if (!email) return next();

  const emailExists = await userRepo.findOneBy({ email: email });

  if (emailExists) throw new AppError("Email already exists", 409);

  return next();
};
