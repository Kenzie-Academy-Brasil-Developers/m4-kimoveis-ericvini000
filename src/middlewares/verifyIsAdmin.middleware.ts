import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export default (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const { decoded } = res.locals;

  if (!decoded.admin) throw new AppError("Insufficient Permission", 403);

  return next();
};
