import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

export default (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  const { decoded, userId } = res.locals;

  if (decoded.admin) return next();

  if (Number(decoded.sub) !== userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
