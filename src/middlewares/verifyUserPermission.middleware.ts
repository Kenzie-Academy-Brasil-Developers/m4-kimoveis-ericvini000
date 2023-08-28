import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export default (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const { decoded, user } = res.locals;

  if (decoded.admin) return next();

  if (decoded.email !== user.email) {
    throw new AppError("Insufficient Permission", 403);
  }

  return next();
};
