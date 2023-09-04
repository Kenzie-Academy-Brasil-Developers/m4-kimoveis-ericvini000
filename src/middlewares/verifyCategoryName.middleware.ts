import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../repositories";
import { AppError } from "../errors";
import { TCategory } from "../interfaces";

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { name } = req.body;

  const nameExists: TCategory | null = await categoryRepo.findOneBy({ name });

  if (nameExists) throw new AppError("Category already exists", 409);

  return next();
};
