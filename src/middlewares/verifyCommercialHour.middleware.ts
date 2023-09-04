import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export default async (req: Request, res: Response, next: NextFunction) => {
  const hour: number = Number(req.body.hour[0] + req.body.hour[1]);

  if (hour < 8 || hour > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM");
  }

  return next();
};
