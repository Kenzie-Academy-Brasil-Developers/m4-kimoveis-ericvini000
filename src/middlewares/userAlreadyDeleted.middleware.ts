import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export default (req: Request, res: Response, next: NextFunction): void => {
  const { user } = res.locals;

  if (user.deletedAt) throw new AppError("User already deleted.");

  return next();
};
