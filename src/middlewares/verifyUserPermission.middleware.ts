import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export default (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const { decoded, user } = res.locals;

  console.log(decoded);
  console.log(user);

  if (decoded.admin) return next();

  if (decoded.email !== user.email) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
