import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export default async (req: Request, res: Response, next: NextFunction) => {
  const { date } = req.body;

  const dateFormatted: Array<string> = date.split("/");

  const day = new Date(
    Number(dateFormatted[0]),
    Number(dateFormatted[1]) - 1,
    Number(dateFormatted[2])
  ).getDay();

  if (day === 6 || day === 7) {
    throw new AppError("Invalid date, work days are monday to friday");
  }

  return next();
};
