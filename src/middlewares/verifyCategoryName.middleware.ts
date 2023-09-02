import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../repositories";
import { AppError } from "../errors";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { name } = req.body;

  const nameExists = await categoryRepo.findOneBy({ name });

  if (nameExists) throw new AppError("Category already exists", 409);

  return next();
};
